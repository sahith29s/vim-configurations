from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Two years down the road sahith will be best programmer." 

app.run()