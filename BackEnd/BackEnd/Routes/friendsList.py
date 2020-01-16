from flask import Flask, Blueprint, request
import mysql.connector
from .login import userAuthenticationTracker

database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com',
                                   database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')

cursor = database.cursor()


fl = Blueprint('friendsList', __name__)

@fl.route('/api/friendsList', methods=['GET'])
def fetchAllFriends():
    response = {}
    print("eheh")
    #friends = []

    if request.method == 'GET':
        print("success")

        data = request.get_json()
        token = data['authentication token']
        print("This is the token from frontend: ", token)
        print("This is the login token from server: ", userAuthenticationTracker[0][1])

        #if token == userAuthenticationTracker[0][1]:
            #print("tokens are equal")

            #email = userAuthenticationTracker[0][0]
            #cursor.execute(f"SELECT user_id FROM Scheduler.users WHERE email = '{email}'")
            #userIdQueryResult = cursor.fetchone()[0] #everything up to here works perfectly!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            #print("This is the user_id: ", userIdQueryResult) #everything up to here works perfectly!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            #cursor.execute(f"SELECT user_one_id FROM Scheduler.friendship WHERE user_two_id = '{userIdQueryResult}'")
            #friendsResult = cursor.fetchall() #this is where stuff starts breaking because not retriving data correctly
            #for i in range(len(friendsResult)):
            #    print(friendsResult[i])
            #print("This is the first friends query result: ", friendsResult)

            #for row in friendsResult:
            #    friendInfo = ("", row) #gets the id of the friend
            #    friends.insert(0, friendInfo) #stores the tuple in the friends list in 0(1)
            #
            #print("These are the friends: ", friends)

            #cursor.execute(f"SELECT user_two_id FROM Scheduler.friendship WHERE user_one_id = '{userIdQueryResult}'")
            #friendsResult = cursor.fetchall()

            #for row in friendsResult:
            #    friendInfo = ("", row) #gets the id of the friend
            #    friends.insert(0, friendInfo) #stores the tuple in the friends list in 0(1)

            #for friendTuple in friendsResult:
            #    friendId = friendTuple[1]
            #    cursor.execute(f"SELECT first_name FROM Scheduler.users WHERE user_id = '{friendId}'")
            #    friendFirstName = cursor.fetchall()
            #    print("we got all the friends")
            #    response[friendId] = friendFirstName
    print("we out the if")
    return response


