from marshmallow import validate
from marshmallow.fields import String, Float
from extensions import ma
from models.models import Debt

class DebtSchema(ma.SQLAlchemyAutoSchema):
    amount = Float(required=True)
    description = String(validate=[validate.Length(max=1024)])

    class Meta:
        model = Debt
        load_instance = True
        exclude = ["id"]
