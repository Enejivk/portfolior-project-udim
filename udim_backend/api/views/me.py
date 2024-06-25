#!/usr/bin/python3
from api.views import app_view
from api.schema.user import user_schema
from flask_jwt_extended import get_current_user, jwt_required

@app_view.route("/users/me", methods=["GET"])
@jwt_required()
def get():
        """
        retrieve the current user's data
        """        
        return {"current_user": user_schema.dump(get_current_user())}
