from flask import Flask, render_template, request, redirect, url_for, session
from bson import ObjectId
from pymongo import MongoClient
from flask_bcrypt import Bcrypt

# Initialize Flask app
app = Flask(__name__)
app.secret_key = "your_secret_key"  # Replace with a secure secret in production

# Initialize Bcrypt
bcrypt = Bcrypt(app)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["tasknext_db"]
users = db["users"]
tasks = db["tasks"]

# Home route redirects to login
@app.route("/")
def home():
    return redirect(url_for("login"))

# Register
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        if users.find_one({"username": username}):
            return "User already exists. Try a different username."

        hashed_pw = bcrypt.generate_password_hash(password).decode("utf-8")
        users.insert_one({"username": username, "password": hashed_pw})
        return redirect(url_for("login"))

    return render_template("register.html")

# Login
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        user = users.find_one({"username": username})
        if user and bcrypt.check_password_hash(user["password"], password):
            session["username"] = username
            return redirect(url_for("dashboard"))
        else:
            return "Invalid username or password."

    return render_template("login.html")

# Dashboard
@app.route("/dashboard")
def dashboard():
    if "username" in session:
        username = session["username"]
        user_tasks = list(tasks.find({"username": username}))
        return render_template("dashboard.html", username=username, tasks=user_tasks)
    return redirect(url_for("login"))

# Add task
@app.route("/add_task", methods=["POST"])
def add_task():
    if "username" in session:
        task_content = request.form["task"]
        tasks.insert_one({"username": session["username"], "task": task_content})
        return redirect(url_for("dashboard"))
    return redirect(url_for("login"))

# Delete task
@app.route("/delete_task", methods=["POST"])
def delete_task():
    if "username" in session:
        task_id = request.form["task_id"]
        tasks.delete_one({"_id": ObjectId(task_id), "username": session["username"]})
        return redirect(url_for("dashboard"))
    return redirect(url_for("login"))

# Logout
@app.route("/logout")
def logout():
    session.pop("username", None)
    return redirect(url_for("login"))

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
