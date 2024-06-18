#!/usr/bin/python3
from api.extensions import db, bcrypt
from datetime import datetime


class User(db.Model):
    """Representation of a user """
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    first_name = db.Column(db.String(60), nullable=False)
    last_name = db.Column(db.String(60), nullable=False)
    profile_image = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)
    email = db.Column(db.String(60), nullable=False, unique=True)

    created_group = db.relationship('Group', backref='created_by', lazy=True)
    donations = db.relationship('Donation', backref='user', lazy=True)
    debts = db.relationship('Debt', backref='user', lazy=True)
    
    def __setattr__(self, name, value):
        """sets a password with bcrypt encryption"""
        if name == "password":
            value = bcrypt.generate_password_hash(value).decode('utf-8')
        super().__setattr__(name, value)


group_member = db.Table('group_member',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('group_id', db.Integer, db.ForeignKey('groups.id'), primary_key=True)
)

group_admin = db.Table('group_admin',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id', onupdate='CASCADE', ondelete='CASCADE'), primary_key=True),
    db.Column('group_id', db.Integer, db.ForeignKey('groups.id', onupdate='CASCADE', ondelete='CASCADE'), primary_key=True)
)

class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    name = db.Column(db.String(60), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    members = db.relationship('User', secondary=group_member, lazy='subquery',
        backref=db.backref('groups', lazy=True))
    donations = db.relationship('Donation', backref='group', lazy=True)
    debts = db.relationship('Debt', backref='group', lazy=True)
    admins = db.relationship('User', secondary=group_admin, lazy='subquery',
        backref=db.backref('admin_groups', lazy=True))


class Donation(db.Model):
    __tablename__ = 'donations'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    amount = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(1024), nullable=True)
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


class Debt(db.Model):
    __tablename__ = 'debts'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    amount = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(1024), nullable=True)
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

