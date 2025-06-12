package connection;

import java.util.Arrays;
import org.bson.Document;
import com.mongodb.client.*;

public class MongoDBQueries {

    public static void main(String[] args) {
        // Create Mongo client
        try (MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017")) {

            MongoDatabase database = mongoClient.getDatabase("myDb");

            // Call desired methods one by one or based on user choice
            queryPriceRange(database);
            aggregateTotalPrice(database);
            getHighestPricedItems(database);
        }
    }

    // 1. Query products where price is between 700 and 900
    public static void queryPriceRange(MongoDatabase database) {
        MongoCollection<Document> collection = database.getCollection("products");
        Document priceQuery = new Document("price", new Document("$gte", 700).append("$lte", 900));
        FindIterable<Document> results = collection.find(priceQuery);

        System.out.println("\nProducts with price between 700 and 900:");
        for (Document doc : results) {
            System.out.println(doc.toJson());
        }
    }

    // 2. Aggregate total price and count from products
    public static void aggregateTotalPrice(MongoDatabase database) {
        MongoCollection<Document> collection = database.getCollection("products");

        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(
            new Document("$match", new Document("price", new Document("$ne", null))),
            new Document("$group", new Document("_id", null)
                .append("totalPrice", new Document("$sum", "$price"))
                .append("count", new Document("$sum", 1)))
        ));

        System.out.println("\nTotal price and count of all products:");
        for (Document doc : result) {
            System.out.println("Total Price: " + doc.get("totalPrice"));
            System.out.println("Count: " + doc.get("count"));
        }
    }

    // 3. Get top-priced product for each item in sales
    public static void getHighestPricedItems(MongoDatabase database) {
        MongoCollection<Document> collection = database.getCollection("sales");

        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(
            new Document("$sort", new Document("item", 1).append("price", -1)),
            new Document("$group", new Document("_id", "$item")
                .append("maxPrice", new Document("$first", "$price"))
                .append("document", new Document("$first", "$$ROOT"))),
            new Document("$replaceRoot", new Document("newRoot", "$document"))
        ));

        System.out.println("\nHighest priced document for each item:");
        for (Document doc : result) {
            System.out.println(doc.toJson());
        }
    }
}
