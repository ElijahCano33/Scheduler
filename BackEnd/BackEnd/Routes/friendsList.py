from flask import Flask, Blueprint, request
import mysql.connector
from login import userAuthenticationTracker

database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com',
                                   database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')

cursor = database.cursor()


fl = Blueprint('friendsList', __name__)

@fl.route('api/friendsList', methods=['GET'])
def fetchAllFriends():
    response = {}
    friends = []

    if request.method == 'GET':

        data = request.get_json()
        token = data['authentication token']

        if token == userAuthenticationTracker[0][1]:

            email = userAuthenticationTracker[0][0]
            cursor.execute(f"SELECT user_id FROM Scheduler.users WHERE email = '{email}'")
            userIdQueryResult = cursor.fetchall()[0]
            cursor.execute(f"SELECT user_one_id FROM Scheduler.friendship WHERE user_two_id = '{userIdQueryResult}'")
            friendsResult = cursor.fetchall()

            for row in friendsResult:
                friendInfo = ("", row) #gets the id of the friend
                friends.insert(0, friendInfo) #stores the tuple in the friends list in 0(1)

            cursor.execute(f"SELECT user_two_id FROM Scheduler.friendship WHERE user_one_id = '{userIdQueryResult}'")
            friendsResult = cursor.fetchall()

            for row in friendsResult:
                friendInfo = ("", row) #gets the id of the friend
                friends.insert(0, friendInfo) #stores the tuple in the friends list in 0(1)

            for friendTuple in friendsResult:
                friendId = friendTuple[1]
                cursor.execute(f"SELECT first_name FROM Scheduler.users WHERE user_id = '{friendId}'")
                friendFirstName = cursor.fetchall()
                response[friendId] = friendFirstName
            
    return response


