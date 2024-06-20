#!/usr/bin/python3
from extensions import db
from models.models import Group
from api.schema.group import GroupSchema
from flask import request
from flask_jwt_extended import get_current_user, jwt_required
from flask_restful import Resource, abort



class GroupList(Resource):
    method_decorators = [jwt_required()]
    def get(self):
        groups = Group.query.all()
        schema = GroupSchema(many=True)
        return {"results": schema.dump(groups)}

    def post(self):
        schema = GroupSchema()
        user = get_current_user()
        print(user)
        group = schema.load(request.json)
        group.user_id = user.id
        group.members.append(user)
        group.admins.append(user)
        db.session.add(group)
        db.session.commit()

        return {"msg": "Group created", "group": schema.dump(group)}

class GroupResource(Resource):
    def get(self, group_id):
        group = Group.query.get_or_404(group_id)
        schema = GroupSchema()
        return {"group": schema.dump(group)}

    def put(self, group_id):
        schema = GroupSchema(partial=True)
        group = Group.query.get_or_404(group_id)
        group = schema.load(request.json, instance=group)
        db.session.commit()

        return {"msg": "Group updated", "group": schema.dump(group)}

    def delete(self, group_id):
        group = Group.query.get_or_404(group_id)
        db.session.delete(group)
        db.session.commit()
        return {"msg": "Group deleted"}
