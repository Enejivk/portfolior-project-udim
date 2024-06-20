#!/usr/bin/python3
from flask import request, jsonify
from flask_restful import Resource
from models.models import User, Group
from api.schema.user import UserSchema
from extensions import db

class UserList(Resource):
    def get(self):
        first_name_filter = request.args.get("first_name")
        user_query = User.query
        # if first_name_filter:
        #     user_query = user_query.filter(User.first_name.ilike(f"%{first_name_filter}%"))
        users = user_query.all()
        schema = UserSchema(many=True)
        return {"results": schema.dump(users)}


class UserResource(Resource):
    def get(self, user_id):
        schema = UserSchema()
        user = User.query.get_or_404(user_id)
        return {"user": schema.dump(user)}

    def put(self, user_id):
        schema = UserSchema(partial=True)
        user = User.query.get_or_404(user_id)
        user = schema.load(request.json, instance=user)
        db.session.commit()
        return {"msg": "User updated", "user": schema.dump(user)}

    def delete(self, user_id):
        user = User.query.get_or_404(user_id)

        db.session.delete(user)
        db.session.commit()

        return {"msg": "User deleted"}