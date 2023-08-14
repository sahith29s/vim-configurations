# from flask import Flask , render_template

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template("index.html" , name = "sahith")

# @app.route("/bootstrap")
# def boostrap():
#     return render_template("bootstrap.html") 



from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'

app.run(host='127.0.0.1', port=3002 , debug=True)