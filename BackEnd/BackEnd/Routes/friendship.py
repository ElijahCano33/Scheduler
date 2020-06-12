from flask import Blueprint, request
import mysql.connector

database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com',
                                   database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')

cursor = database.cursor()

friendship = Blueprint('friendship', __name__)


@friendship.route('/api/friendship/update', methods=['POST'])
def friendship_update():
    
    response = dict()
    data = request.get_json()
    request_user_id = data['request_user_id']
    befriend_user_id = data['befriend_user_id']
    update_requested = data['requested_friendship_type']   # this could be befriend, accept, deny, unfriend or block
    
    cursor.execute(
        f"SELECT COUNT(*) FROM Scheduler.users WHERE user_id = '{request_user_id}' or user_id = '{befriend_user_id}' "
    )

    if cursor.fetchone()[0] != 2:
        response['status'] = False
        response['status_info'] = "one of the user_id isn't valid"

    elif request.method == 'POST' and 'request_user_id' in data and 'befriend_user_id' in data:
        
        cursor.execute(f'SELECT * FROM Scheduler.friendship WHERE  (user_one_id = "{request_user_id}" and user_two_id= "{befriend_user_id}") or (user_one_id = "{befriend_user_id}" and user_two_id= "{request_user_id}")')
        current_relationship_status = cursor.fetchone()
        
        if update_requested == "befriend":
            response = friend_request(request_user_id, befriend_user_id, current_relationship_status)

        elif update_requested == "accept":
            response = friend_request_accepted(request_user_id, befriend_user_id, current_relationship_status)

        elif update_requested == "deny" or update_requested == "unfriend":
            response = remove_friendship(request_user_id, befriend_user_id, current_relationship_status)

        elif update_requested == "block":
            response = block_someone(request_user_id,befriend_user_id, current_relationship_status)

        else:
            response['status'] = False
            response['status_info'] = 'invalid command'

    return response


def friend_request(request_user_id, befriend_user_id, current_relationship_status):
    response = dict()
    if not current_relationship_status:
        if int(request_user_id) > int(befriend_user_id):
            cursor.execute(
                f"INSERT INTO `Scheduler`.`friendship` (`user_one_id`, `user_two_id`, `action_user_id`) VALUES ('{request_user_id}', '{befriend_user_id}', '{request_user_id}');"
            )
        else:
            cursor.execute(
                f"INSERT INTO `Scheduler`.`friendship` (`user_one_id`, `user_two_id`, `action_user_id`) VALUES ('{befriend_user_id}', '{request_user_id}', '{request_user_id}');"
            )
        database.commit()
        response['status'] = True
        response['status_info'] = 'Friend Request Sent!'
    else:
        response['status'] = False
        response['status_info'] = 'Relationship already exist in the database'
    return response


def friend_request_accepted(requester_user_id, other_user_id, current_relationship_status):
    response = dict()
    if current_relationship_status and current_relationship_status[-2] == int(other_user_id):
        cursor.execute(
            f"UPDATE `Scheduler`.`friendship` SET `relationship` = 'mutual-friends', `action_user_id` = '{requester_user_id}' WHERE (`user_one_id` = '{current_relationship_status[0]}') and (`user_two_id` = '{current_relationship_status[1]}');"
        )
        database.commit()
        response['status'] = True
        response['status_info'] = 'Friendship Created!'
    elif current_relationship_status and current_relationship_status[-2] == int(requester_user_id):
        response['status'] = False
        response['status_info'] = 'user can\'t accept friend request they initiated'
    else:
        response['status'] = False
        response['status_info'] = "unusual entry in the database"
    return response


def remove_friendship(requester_user_id, other_user_id, current_relationship_status):
    response = dict()
    if current_relationship_status: 
        cursor.execute(
            f"DELETE FROM `Scheduler`.`friendship` WHERE (`user_one_id` = '{current_relationship_status[0]}') and (`user_two_id` = '{current_relationship_status[1]}');"
        )
        database.commit()
        response['status'] = True
        response['status_info'] = 'Friendship Disbanded!'
    else:
        response['Status'] = False
        response['status_info'] = 'The relationship doesnt exist in the table'
    return response


def block_someone(requester_user_id, other_user_id, current_relationship_status):
    if current_relationship_status:
        cursor.execute(
            f"UPDATE `Scheduler`.`friendship` SET `action_user_id` = '{requester_user_id}', `relationship` = 'blocked' WHERE (`user_one_id` = '{requester_user_id}') and (`user_two_id` = '{other_user_id}') OR (`user_one_id` = '{other_user_id}') and (`user_two_id` = '{requester_user_id}') ;"
        )
    else:
        cursor.execute(
            f"INSERT INTO `Scheduler`.`friendship` (`user_one_id`, `user_two_id`, `action_user_id`,`relationship`) VALUES ('{current_relationship_status[0]}', '{current_relationship_status[1]}', '{requester_user_id}', 'blocked');"
        )
    database.commit()
    response = dict()
    response['status'] = True
    response['status_info'] = 'Friend Blocked!'
    return response
