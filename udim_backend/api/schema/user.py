#!/usr/bin/python3
from marshmallow import validate, validates_schema, ValidationError
from marshmallow.fields import String

from extensions import ma
from models.models import User

from dataclasses import dataclass
from datetime import datetime as dt


class UserSchema(ma.SQLAlchemyAutoSchema):
    first_name = String(required=True, validate=[validate.Length(min=3)], error_messages={
        "required": "The first name is required",
        "invalid": "The first_name is invalid and needs to be a string",
    })
    
    last_name = String(required=True, validate=[validate.Length(min=3)], error_messages={
        "required": "The last name is required",
        "invalid": "The last name is invalid and needs to be a string",
    })
    email = String(required=True, validate=[validate.Email()])

    @validates_schema
    def validate_email(self, data, **kwargs):
        email = data.get("email")

        if User.query.filter_by(email=email).count():
            raise ValidationError(f"Email {email} already exists.")

    class Meta:
        model = User
        load_instance = True
        exclude = ["id", "password", "updated_at"]


class UserCreateSchema(UserSchema):
    password = String(
        required=True,
        validate=[validate.Regexp(r"^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$",
                                  error="The password need to be at least 8 characters long, and have at least 1 of each of the following: lowercase letter, uppercase letter, special character, number."
                                  )], 
                                    error_messages={
                                    "required": "The last name is required",
                                    "invalid": "The last name is invalid and needs to be a string",
                                }
                    )
    class Meta:
        model = User
        load_instance = True