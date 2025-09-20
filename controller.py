from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, main page of Flask! <h1>Welcome to Flask!</h1>"

@app.route("/<name>")
def user(name):  
     return f"Hello, {name}"

@app.route("/admin")
def admin():  
     return '<a href="https://github.com/">Gå till GitHub</a>'

if __name__ == "__main__":
    app.run()