### Explanation

1. **User Class**:
   - Represents a user in the application. Contains fields like `first_name`, `last_name`, `profile_image`, `password`, and `email`.
   - Has relationships with `Group`, `Donation`, and `Debt` models.

2. **Group Class**:
   - Represents a group in the application. Contains fields like `name` and `user_id` (the user who created the group).
   - Has a many-to-many relationship with the `User` model for members, using the `group_member` association table.
   - Has a many-to-many relationship with the `User` model for admins, using the `group_admin` association table. This allows us to access admins of the group using the `admins` relationship.

3. **group_member Association Table**:
   - This is an auxiliary table that represents the many-to-many relationship between groups and users as members.

4. **group_admin Association Table**:
   - This is an auxiliary table that represents the many-to-many relationship between groups and users as admins.

5. **Donation Class**:
   - Represents a donation made by a user to a group. Contains fields like `amount`, `description`, `group_id`, and `user_id`.

6. **Debt Class**:
   - Represents a debt associated with a user and a group. Contains fields like `amount`, `description`, `group_id`, and `user_id`.

### Accessing Data

To access the members of a group, you can use the `members` relationship:

```python
for group in Group.query.all():
    print("Group => {}".format(group.name))
    for member in group.members:
        print("\tMember => ", member.first_name, member.last_name)
```

To access the admins of a group, you can use the `admins` relationship:

```python
for group in Group.query.all():
    print("Group => {}".format(group.name))
    for admin in group.admins:
        print("\tAdmin => ", admin.first_name, admin.last_name)
```

This setup ensures that the relationships are clearly defined and can be used to query related data efficiently.