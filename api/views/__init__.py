#!/usr/bin/python3

"""
This module initializes a Flask Blueprint for API version 1 views.
"""


from flask import Blueprint, jsonify
from flask_restful import Api
from marshmallow import ValidationError
from api.resource.group import GroupList, GroupResource
from api.resource.user import UserList, UserResource


app_view = Blueprint("app_view", __name__, url_prefix="/api")
api = Api(app_view, errors=app_view.errorhandler)

api.add_resource(UserList, "/users")
api.add_resource(UserResource, "/users/<int:user_id>")
api.add_resource(GroupList, "/groups")
api.add_resource(GroupResource, "/groups/<int:group_id>"), 


@app_view.errorhandler(ValidationError)
def handle_marshmallow_error(e):
    return jsonify(e.messages), 400
