#!/usr/bin/python3

"""
This module initializes a Flask Blueprint for API version 1 views.
"""

from flask import Blueprint, jsonify, make_response
from flask_restful import Api
from marshmallow import ValidationError
from api.resource.group import GroupList, GroupResource
from api.resource.user import UserList, UserResource
from api.resource.donation import DonationList, DonationResource
from api.resource.debt import DebtList, DebtResource

app_auth = Blueprint("app_auth", __name__, url_prefix="/auth")
app_view = Blueprint("app_view", __name__, url_prefix="/api")
api = Api(app_view, errors=app_view.errorhandler)

api.add_resource(UserList, "/users")
api.add_resource(UserResource, "/users/<int:user_id>")
api.add_resource(GroupList, "/groups")
api.add_resource(GroupResource, "/groups/<int:group_id>")
api.add_resource(DonationList, "/donations")
api.add_resource(DonationResource, "/donations/<int:donation_id>")
api.add_resource(DebtList, "/debts")
api.add_resource(DebtResource, "/debts/<int:debt_id>")  


@app_auth.errorhandler(ValidationError)
@app_view.errorhandler(ValidationError)
def handle_marshmallow_error(e):
    return make_response(jsonify({"error": e.messages}), 400)

@app_auth.errorhandler(404)
@app_view.errorhandler(404)
def not_found(error):
    """
    Handle 404 errors by returning a JSON response indicating resource
    not found.
    """
    return make_response(jsonify({"error": "Not found"}), 404)

from api.views.auth import *
