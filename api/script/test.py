from api.app import db, app
from api.models import User, Group, Donation, Debt
def test1():
    i = 0
    for group in Group.query.all():
        i+=1
        print(f'({i})THIS Group  named {group.name}-group is created by {group.created_by.last_name} {group.created_by.first_name}')
        for member in group.members:
            print(f'\tMEMBERs added : {member.first_name}, {member.last_name}----- {len(group.members)}')
        for admin in group.admins:
            print(f'\tADMINs are: {admin.first_name}----- {len(group.admins)}')
        for donation in group.donations:
            print(f'\tDONATE: name={donation.user.first_name} {donation.user.last_name}, amount={donation.amount}, date={donation.created_at}')
        for debt in group.debts:
            print(f'\tDEBT: {debt.user.first_name} {debt.user.last_name}, amount={debt.amount}, date={debt.created_at}')

def test2():
    i=0
    for user in User.query.limit(15).all():
        i+=1
        print(f"({i}) Donations", user.donations)
        print()
        print(f"({i}) created Groups", user.created_group)
        print()
        print(f"({i}) Debts", user.debts)
        print()
        print(f"({i}) Groups am admin", user.admin_groups)
        print()
        print(f"({i}) groups i belong", user.groups)
       
if __name__ == "__main__":
    with app.app_context():  # Ensure you are working within the app context
        test1()
        input()
        test2()