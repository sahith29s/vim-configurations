from flask import Flask , render_template

app = Flask(__name__)

@app.route('/')
def index():
    name = "sahith"
    return render_template("index.html" , name = name )
app.run(host='127.0.0.1', port=3002 , debug=True)