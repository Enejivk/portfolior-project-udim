#!/usr/bin/python3
from marshmallow import validate, validates_schema, ValidationError
from marshmallow.fields import String
from extensions import ma
from models.models import Group

class GroupSchema(ma.SQLAlchemyAutoSchema):
    name = String(required=True, validate=[validate.Length(min=3)], error_messages={
        "required": "The group name is required",
        "invalid": "The group name is invalid and needs to be a string",
    })

    @validates_schema
    def validate_name(self, data, **kwargs):
        name = data.get("name")

        if Group.query.filter_by(name=name).count():
            raise ValidationError(f"Group name {name} already exists.")

    class Meta:
        model = Group
        load_instance = True