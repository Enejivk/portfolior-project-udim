
from extensions import db
from models.models import Group, User
from api.schema.group import group_schema
from api.schema.user import user_schema
from flask import request
from flask_jwt_extended import get_current_user, jwt_required
from flask_restful import Resource, abort
class UserGroupList(Resource):

    method_decorators = [jwt_required()]
    
    def get(self, user_id):
        """
        Retrieve all groups that a specific user belongs to.
        
        Parameters:
            user_id (int): The ID of the user to retrieve groups for.
            
        Returns:
            dict: A dictionary containing a list of group data.
        """
        
        # Get the user from the database
        user = User.get_or_404(user_id)
        
        # Get all groups that the user belongs to
        groups = user.groups
        
        # Return a dictionary with the group data
        return {"groups": group_schema.dump(groups, many=True)}
    
