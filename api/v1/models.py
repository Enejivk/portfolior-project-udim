#!/usr/bin/python3
from api.v1 import db
from datetime import datetime
from hashlib import md5
import uuid


# DateTime format
time = "%Y-%m-%dT%H:%M:%S.%f"


class BaseModel(db.Model):
    """The BaseModel class from which future classes will be derived"""
    __abstract__ = True  # Ensure this class is not used to create any table

    id = db.Column(db.String(60), primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, *args, **kwargs):
        """Initialization of the base model"""
        if kwargs:
            for key, value in kwargs.items():
                setattr(self, key, value)
            if kwargs.get("created_at", None) and isinstance(self.created_at, str):
                self.created_at = datetime.strptime(kwargs["created_at"], time)
            else:
                self.created_at = datetime.now()
            if kwargs.get("updated_at", None) and isinstance(self.updated_at, str):
                self.updated_at = datetime.strptime(kwargs["updated_at"], time)
            else:
                self.updated_at = datetime.now()
            if kwargs.get("id", None) is None:
                self.id = str(uuid.uuid4())
        else:
            self.id = str(uuid.uuid4())
            self.created_at = datetime.now()
            self.updated_at = self.created_at

    def __eq__(self, other):
        """
        Check equality based on the 'id' attribute of the instances.

        Args:
            other (BaseModel): The other instance to compare with.

        Returns:
            bool: True if both instances have the same 'id', otherwise False.
        """
        if isinstance(other, self.__class__):
            return self.id == other.id
        return False

    def __str__(self):
        """String representation of the BaseModel class"""
        return "[{:s}] ({:s}) {}".format(self.__class__.__name__, self.id, self.__dict__)

    def save(self):
        """updates the attribute 'updated_at' with the current datetime"""
        self.updated_at = datetime.now()
        db.session.add(self)
        db.session.commit()

    def to_dict(self):
        """returns a dictionary containing all keys/values of the instance"""
        new_dict = self.__dict__.copy()
        if "created_at" in new_dict:
            new_dict["created_at"] = new_dict["created_at"].strftime(time)
        if "updated_at" in new_dict:
            new_dict["updated_at"] = new_dict["updated_at"].strftime(time)
        new_dict["__class__"] = self.__class__.__name__
        if "_sa_instance_state" in new_dict:
            del new_dict["_sa_instance_state"]
        if "password" in new_dict:
            del new_dict["password"]

        return new_dict

    def delete(self):
        """delete the current instance from the storage"""
        db.session.delete(self)
        db.session.commit()


class User(BaseModel):
    """Representation of a user """
    __tablename__ = 'users'
    
    email = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(128), nullable=False)
    full_name = db.Column(db.String(128), nullable=False)
    profile_image = db.Column(db.String(20), nullable=False, default='default.jpg')
    groups = db.relationship("Group", backref="user")
    messages = db.relationship("Message", backref="user")
    member = db.relationship("Member", uselist=False, backref="user")

    def __init__(self, *args, **kwargs):
        """initializes user"""
        super().__init__(*args, **kwargs)

    def __setattr__(self, name, value):
        """sets a password with md5 encryption"""
        if name == "password":
            value = md5(value.encode()).hexdigest()
        super().__setattr__(name, value)


group_member = db.Table('group_member', 
                        db.Column('group_id', db.String(60),
                                  db.ForeignKey('groups.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                  primary_key=True),
                        db.Column('member_id', db.String(60),
                                  db.ForeignKey('members.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                  primary_key=True))

class Group(BaseModel):
    """Representation of group """
    __tablename__ = 'groups'

    name = db.Column(db.String(128), nullable=False, unique=True)
    created_by = db.Column(db.String(128), nullable=False)
    user_id = db.Column(db.String(60), db.ForeignKey('users.id'), nullable=False)
    members = db.relationship("Member", secondary=group_member, backref="groups")
    messages = db.relationship("Message", backref="group")
    donations = db.relationship("Donation", backref="group")
    debts = db.relationship("Debt", backref="group")


    def __init__(self, *args, **kwargs):
        """initializes group"""
        super().__init__(*args, **kwargs)


class Member(BaseModel):
    """Representation of member """
    __tablename__ = 'members'

    name = db.Column(db.String(128), nullable=False)
    admin = db.Column(db.Boolean, default=False)
    user_id = db.Column(db.String(60), db.ForeignKey('users.id'), nullable=False)
    donations = db.relationship("Donation", backref="member")
    debts = db.relationship("Debt", backref="member")

    def __init__(self, *args, **kwargs):
        """initializes member"""
        super().__init__(*args, **kwargs)


class Message(BaseModel):
    """Representation of Message """
    __tablename__ = 'messages'

    group_id = db.Column(db.String(60), db.ForeignKey('groups.id'), nullable=False)
    user_id = db.Column(db.String(60), db.ForeignKey('users.id'), nullable=False)
    text = db.Column(db.String(1024), nullable=False)

    def __init__(self, *args, **kwargs):
        """initializes Message"""
        super().__init__(*args, **kwargs)


class Donation(BaseModel):
    """"""
    __tablename__ = 'donations'
    amount = db.Column(db.Float, nullable=False, default=0)
    description = db.Column(db.String(1024), nullable=True)
    group_id = db.Column(db.String(60), db.ForeignKey('groups.id'), nullable=False)
    member_id = db.Column(db.String(60), db.ForeignKey('members.id'), nullable=False)


class Debt(BaseModel):
    """"""
    __tablename__ = 'debts'
    amount = db.Column(db.Float, nullable=False, default=0)
    description = db.Column(db.String(1024), nullable=True)
    group_id = db.Column(db.String(60), db.ForeignKey('groups.id'), nullable=False)
    member_id = db.Column(db.String(60), db.ForeignKey('members.id'), nullable=False)

