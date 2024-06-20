# api/schemas/donation.py

from marshmallow import validate
from marshmallow.fields import String, Float
from extensions import ma
from models.models import Donation

class DonationSchema(ma.SQLAlchemyAutoSchema):
    amount = Float(required=True)
    description = String(validate=[validate.Length(max=1024)])

    class Meta:
        model = Donation
        load_instance = True
        exclude = ["id"]
