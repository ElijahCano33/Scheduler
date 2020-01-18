from flask import Flask, Blueprint, request, jsonify
import mysql.connector
from .login import userAuthenticationTracker

database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com',
                                   database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')

cursor = database.cursor()


fl = Blueprint('friendsList', __name__)

@fl.route('/api/friendsList', methods=['GET'])
def fetchAllFriends():
    response = []
    friends = []

    if request.method == 'GET':

        data = request.get_json()
        token = data['authentication token']
        
        if token == userAuthenticationTracker[0][1]:

            email = userAuthenticationTracker[0][0]
            cursor.execute(f"SELECT user_id FROM Scheduler.users WHERE email = '{email}'")
            userId = cursor.fetchone()[0] 
            cursor.execute(f"SELECT user_one_id FROM Scheduler.friendship WHERE user_two_id = '{userId}'")
            firstFriendsResult = cursor.fetchall()

            friendIds = [tup[0] for tup in firstFriendsResult]
            
            for ids in friendIds:
                friends.insert(0, ids) 
            
            cursor.execute(f"SELECT user_two_id FROM Scheduler.friendship WHERE user_one_id = '{userId}'")
            secondFriendsResult = cursor.fetchall()

            friendIds = [tup[0] for tup in secondFriendsResult]

            for ids in friendIds:
                friends.insert(0, ids)

            for info in friends:
                cursor.execute(f"SELECT first_name FROM Scheduler.users WHERE user_id = '{info}'")
                friendFirstName = cursor.fetchone()[0]
                response.insert(0, friendFirstName)

    return jsonify(response)


