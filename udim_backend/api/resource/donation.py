from flask import request
from flask_restful import Resource, abort
from models.models import Donation
from api.schema.donation import DonationSchema
from extensions import db

class DonationList(Resource):
    def get(self):
        donations = Donation.query.all()
        schema = DonationSchema(many=True)
        return {"results": schema.dump(donations)}

    def post(self):
        schema = DonationSchema()
        validated_data = schema.load(request.json)

        donation = Donation(**validated_data)
        db.session.add(donation)
        db.session.commit()

        return {"msg": "Donation created", "donation": schema.dump(donation)}


class DonationResource(Resource):
    def get(self, donation_id):
        donation = Donation.query.get_or_404(donation_id)
        schema = DonationSchema()

        return {"donation": schema.dump(donation)}

    def put(self, donation_id):
        schema = DonationSchema(partial=True)
        donation = Donation.query.get_or_404(donation_id)
        donation = schema.load(request.json, instance=donation)

        db.session.add(donation)
        db.session.commit()

        return {"msg": "Donation updated", "donation": schema.dump(donation)}

    def delete(self, donation_id):
        donation = Donation.query.get_or_404(donation_id)

        db.session.delete(donation)
        db.session.commit()

        return {"msg": "Donation deleted"}
