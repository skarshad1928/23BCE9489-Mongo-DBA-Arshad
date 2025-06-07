package connection;


import com.mongodb.MongoClient;

import com.mongodb.MongoCredential;

import com.mongodb.client.MongoDatabase;


public class mongoDB {


public static void main(String[] args) {

try {

MongoClient db

= new MongoClient("localhost", 27017);


MongoCredential credential;

credential

= MongoCredential

.createCredential(

"GFGUser", "mongoDb",

"password".toCharArray());

System.out.println(

"Successfully Connected"

+ " to the database");


MongoDatabase database

= db.getDatabase("mongoDb");

System.out.println("Credentials are: "

+ credential);

}

catch (Exception e) {

System.out.println(

"Connection establishment failed");

System.out.println(e);

}


}


}
