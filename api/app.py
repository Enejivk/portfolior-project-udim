#!/usr/bin/python3

from api.config import Config
from api.views import app_view
from api.extensions import db, bcrypt, ma
from flask import Flask
from api.script.populate_DB import generate_fake_data

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    db.init_app(app)
    bcrypt.init_app(app)
    ma.init_app(app)

    app.register_blueprint(app_view)

    return app

if __name__ == '__main__':
    app = create_app()
    try:
        # with app.app_context():
        #     db.create_all()
        #     generate_fake_data()
        app.run(
                host=app.config.get("FLASK_RUN_HOST"),
                port=app.config.get("FLASK_RUN_PORT"),
                )
    except Exception as e:
        print(e)
