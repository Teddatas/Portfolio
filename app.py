from flask import Flask, render_template, request

#load_dotenv()

def create_app():
    
    app = Flask(__name__)
    
    @app.route('/')
    def homepage():
        return render_template("home.html")