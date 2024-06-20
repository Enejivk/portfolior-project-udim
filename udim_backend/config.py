#!/usr/bin/python3
from datetime import timedelta
from dotenv import load_dotenv
import os

load_dotenv()

FLASK_RUN_HOST = os.getenv("FLASK_RUN_HOST", "0.0.0.0")
FLASK_RUN_PORT = os.getenv("FLASK_RUN_PORT", 9000)
FLASK_DEBUG = os.getenv("FLASK_DEBUG")
SQLALCHEMY_DATABASE_URI = os.environ.get("SQLITE_DATABASE_URI")
SQLALCHEMY_TRACK_MODIFICATIONS = False
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
JWT_TOKEN_LOCATION = ["headers"]
JWT_IDENTITY_CLAIM = "user_id"
JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=15)