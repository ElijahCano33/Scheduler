from flask import Flask, Blueprint, request, jsonify
import mysql.connector
from flask_login import current_user, login_user, logout_user, login_required
from collections import defaultdict

fl = Blueprint('friendsList', __name__)

@fl.route('/api/friendsList', methods=['GET'])
def fetchAllFriends():

    try:
        database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com', database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')
        if database:
            if current_user.is_authenticated():
                response = {}
                friends = []
                cursor = database.cursor()
                currentUserId = current_user.get_id()

                cursor.execute(f"SELECT user_one_id FROM Scheduler.friendship WHERE user_two_id = '{currentUserId}'")
                firstFriendsResult = cursor.fetchall()

                friendIds = [tup[0] for tup in firstFriendsResult]
                
                for ids in friendIds:
                    friends.insert(0, ids) 
                
                cursor.execute(f"SELECT user_two_id FROM Scheduler.friendship WHERE user_one_id = '{currentUserId}'")
                secondFriendsResult = cursor.fetchall()

                friendIds = [tup[0] for tup in secondFriendsResult]

                for ids in friendIds:
                    friends.insert(0, ids)

                if len(friends) == 0:
                    error = "No Current Friends!"
                    response['error'] = error
                    raise Exception(response)

                response = []
                counter = 0
                for info in friends:
                    counter += 1
                    friendInfo = {}
                    cursor.execute(f"SELECT first_name, last_name, email, username FROM Scheduler.users WHERE user_id = '{info}'")
                    result = cursor.fetchone()
                    firstName = result[0]
                    lastName = result[1]
                    email = result[2]
                    userName = result[3]
                    friendInfo['id'] = counter
                    friendInfo['first'] = firstName
                    friendInfo['last'] = lastName
                    friendInfo['email'] = email
                    friendInfo['username'] = userName
                    response.append(friendInfo)
        else:
            error = "Connection To Database Failed!"
            response['error'] = error
            raise Exception(response)
    except Exception:
        return response, 400

    return jsonify(response)


