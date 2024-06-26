#!/usr/bin/python3

# from config import Config
from api.views import app_view, app_auth
from extensions import db, bcrypt, ma, migrate, jwt
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object("config")

db.init_app(app)
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "http://localhost:3000"}})
bcrypt.init_app(app)
migrate.init_app(app, db)
ma.init_app(app)
jwt.init_app(app)

app.register_blueprint(app_view)
app.register_blueprint(app_auth)

if __name__ == '__main__':
    try:
        app.run(
                host=app.config.get("FLASK_RUN_HOST"),
                port=app.config.get("FLASK_RUN_PORT"),
                )
    except Exception as e:
        print(e)
