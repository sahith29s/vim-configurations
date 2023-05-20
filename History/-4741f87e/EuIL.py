from flask import Flask , render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html" , name = "sahith")

@app.route("/boostrap")
def boostrap():
    return render_template( render_template(boostrap))

app.run(host='127.0.0.1', port=3002 , debug=True)