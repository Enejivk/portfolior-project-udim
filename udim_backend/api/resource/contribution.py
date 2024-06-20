# api/resources/contribution.py

from flask_restful import Resource
from flask import request
from models.models import Contribution, db
from api.schema.contribution import ContributionSchema

contribution_schema = ContributionSchema()
contributions_schema = ContributionSchema(many=True)

class ContributionResource(Resource):
    def get(self, contribution_id):
        contribution = Contribution.query.get_or_404(contribution_id)
        return contribution_schema.dump(contribution)

    def put(self, contribution_id):
        contribution = Contribution.query.get_or_404(contribution_id)
        data = request.get_json()
        errors = contribution_schema.validate(data)
        if errors:
            return errors, 400
        for key, value in data.items():
            setattr(contribution, key, value)
        db.session.commit()
        return {"msg": "Contribution updated", "contribution": contribution_schema.dump(contribution)}

    def delete(self, contribution_id):
        contribution = Contribution.query.get_or_404(contribution_id)
        db.session.delete(contribution)
        db.session.commit()
        return {"msg": "Contribution deleted"}

class ContributionListResource(Resource):
    def get(self):
        contributions = Contribution.query.all()
        return contributions_schema.dump(contributions)

    def post(self):
        data = request.get_json()
        errors = contribution_schema.validate(data)
        if errors:
            return errors, 400
        contribution = Contribution(**data)
        db.session.add(contribution)
        db.session.commit()
        return {"msg": "Contribution created", "contribution": contribution_schema.dump(contribution)}