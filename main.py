from flask import Flask, url_for, render_template, request, jsonify
app = Flask(__name__, static_folder="frontend/static",      # <-- pekar på din static
    template_folder="frontend/templates"  # <-- pekar på dina templates
    )

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")


@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

@app.route("/portfolio/<int:project_id>")
def portfolio_details(project_id):
    # Här kan du t.ex. hämta information om projektet med project_id
    return render_template("portfolio-details.html", project_id=project_id)

@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/api/contact", methods=["POST"])
def contact_api():
    data = request.get_json()
    print ("Data received:", data)
    return jsonify({"status": "success", "message": "Contact form submitted successfully!"})


if __name__ == "__main__":
    app.run(debug=True)