from flask import Flask, url_for, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, main page of Flask! <h1>Welcome to Flask!</h1>"



if __name__ == "__main__":
    app.run()