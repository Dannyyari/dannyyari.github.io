from flask import Flask, url_for, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about.html")
def about():
    return render_template("about.html")

@app.route("/resume.html")
def resume():
    return render_template("resume.html")


@app.route("/services.html")
def services():
    return render_template("services.html")

@app.route("/portfolio.html")
def portfolio():
    return render_template("portfolio.html")

@app.route("/portfolio/<int:project_id>")
def portfolio_details(project_id):
    # Här kan du t.ex. hämta information om projektet med project_id
    return render_template("portfolio-details.html", project_id=project_id)

@app.route("/contact.html")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)