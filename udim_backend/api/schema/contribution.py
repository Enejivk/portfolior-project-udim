# api/schema/contribution.py

from marshmallow import Schema, fields

class ContributionSchema(Schema):
    id = fields.Int(dump_only=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)
    amount = fields.Float(required=True)
    description = fields.Str()
    group_id = fields.Int(required=True)
    user_id = fields.Int(required=True)
    donation_id = fields.Int(required=True)
