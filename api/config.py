from dotenv import load_dotenv
import os

load_dotenv()
class Config:
    FLASK_RUN_HOST = os.getenv("FLASK_RUN_HOST", "0.0.0.0")
    FLASK_RUN_PORT = os.getenv("FLASK_RUN_PORT", 9000)
    FLASK_DEBUG = os.getenv("FLASK_DEBUG")
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLITE_DATABASE_URI")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
