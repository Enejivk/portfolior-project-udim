#!/usr/bin/python3

from flask import Flask, make_response, jsonify
from flask_sqlalchemy import SQLAlchemy
from os import getenv


# Environment Variables
HBNB_MYSQL_USER = getenv('HBNB_MYSQL_USER')
HBNB_MYSQL_PWD = getenv('HBNB_MYSQL_PWD')
HBNB_MYSQL_HOST = getenv('HBNB_MYSQL_HOST')
HBNB_MYSQL_DB = getenv('HBNB_MYSQL_DB')
HBNB_ENV = getenv('HBNB_ENV')
DEBUG = True
uri = 'mysql+mysqldb://{}:{}@{}/{}'.format(HBNB_MYSQL_USER,
                                           HBNB_MYSQL_PWD,
                                           HBNB_MYSQL_HOST,
                                           HBNB_MYSQL_DB)

# Flask Application Setup
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)

# from api.v1.models import User, Group, Member, Message, Donation, Debt
@app.errorhandler(404)
def not_found(error):
    """
    Handle 404 errors by returning a JSON response indicating resource
    not found.
    """
    return make_response(jsonify({"error": "Not found"}), 404)
