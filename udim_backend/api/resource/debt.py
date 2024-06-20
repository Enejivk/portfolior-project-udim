# api/resource/debt.py

from flask import request
from flask_restful import Resource, abort
from models.models import Debt
from api.schema.debt import DebtSchema
from extensions import db

class DebtList(Resource):
    def get(self):
        debts = Debt.query.all()
        schema = DebtSchema(many=True)
        return {"results": schema.dump(debts)}

    def post(self):
        schema = DebtSchema()
        validated_data = schema.load(request.json)

        debt = Debt(**validated_data)
        db.session.add(debt)
        db.session.commit()

        return {"msg": "Debt created", "debt": schema.dump(debt)}


class DebtResource(Resource):
    def get(self, debt_id):
        debt = Debt.query.get_or_404(debt_id)
        schema = DebtSchema()

        return {"debt": schema.dump(debt)}

    def put(self, debt_id):
        schema = DebtSchema(partial=True)
        debt = Debt.query.get_or_404(debt_id)
        debt = schema.load(request.json, instance=debt)

        db.session.add(debt)
        db.session.commit()

        return {"msg": "Debt updated", "debt": schema.dump(debt)}

    def delete(self, debt_id):
        debt = Debt.query.get_or_404(debt_id)

        db.session.delete(debt)
        db.session.commit()

        return {"msg": "Debt deleted"}
