from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "https://python-flask-devops.netlify.app"}})

@app.route("/api/contact", methods=["POST"])
def contact_api():
    data = request.get_json()
    print ("Data received:", data)
    return jsonify({"status": "success", "message": "Contact form submitted successfully!"})


if __name__ == "__main__":
    app.run(debug=True)