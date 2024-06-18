from flask import request
from flask_restful import Resource, abort
from api.models import Group
from api.schemas.group import GroupSchema
from api.extensions import db

class GroupList(Resource):
    def get(self):
        groups = Group.query.all()
        schema = GroupSchema(many=True)
        return {"results": schema.dump(groups)}

    def post(self):
        schema = GroupSchema()
        validated_data = schema.load(request.json)

        group = Group(**validated_data)
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

        db.session.add(group)
        db.session.commit()

        return {"msg": "Group updated", "group": schema.dump(group)}

    def delete(self, group_id):
        group = Group.query.get_or_404(group_id)
        db.session.delete(group)
        db.session.commit()
        return {"msg": "Group deleted"}