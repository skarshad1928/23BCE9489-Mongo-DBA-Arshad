from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")
db = client["universityDB"]
db1=db.users
#All subclasses are stored in the same collection, distinguished by a type field. :Single Collection Inheritance
db1.insert_many([{'name':'Shaik_Arshad','Age':23,'type':'Student'},{'name':'A1','Age':37,'type':'faculty'}])
print(db.users.find_one({}))
#Store common fields in a base collection, and subclass-specific fields in separate collections.:Hybrid inheritence
db2=db.mul
db3=db.teachers
user_id=db2.insert_one({'name':'Shaik Arshad','Age':23}).inserted_id#gives user id to user id
db3.insert_one({"userid":user_id,'subject':'Maths'})
db4 = db.Researchers
db4.insert_one({"UserId":user_id,'field':'Data Analytics'})
#Each subclass has its own collection, but may duplicate common fields.:Multiple Inheritance
db5= db.mul2
db5.insert_one({"name": "Dr. Smith","Age": 45,"roles": [{"role": "Teacher", "subject": "Math"},{"role": "Researcher", "field": "AI"}]})



