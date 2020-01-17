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
    if request.method == 'POST' and 'request_user_id' in data and 'befriend_user_id' in data:
        cursor.execute(f'SELECT count(*) FROM Scheduler.friendship WHERE  (user_one_id = "{request_user_id}" and user_two_id= "{befriend_user_id}") or (user_one_id = "{befriend_user_id}" and user_two_id= "{request_user_id}")')
        relationship_exist = cursor.fetchone()[0]
        response['status'] = True

        if update_requested == "befriend" and not relationship_exist:
            friend_request(request_user_id, befriend_user_id)

        elif update_requested == "accept" and relationship_exist:
            friend_request_accepted(request_user_id, befriend_user_id)

        elif (update_requested == "deny" or update_requested == "unfriend") and relationship_exist:
            remove_friendship(request_user_id, befriend_user_id)

        elif update_requested == "block":
            block_someone(request_user_id,befriend_user_id)

        else:
            response['status'] = False

        return response


def friend_request(request_user_id, befriend_user_id):
    if int(request_user_id) > int(befriend_user_id):
        cursor.execute(
            f"INSERT INTO `Scheduler`.`friendship` (`user_one_id`, `user_two_id`, `action_user_id`) VALUES ('{request_user_id}', '{befriend_user_id}', '{request_user_id}');"
        )
    else:
        cursor.execute(
            f"INSERT INTO `Scheduler`.`friendship` (`user_one_id`, `user_two_id`, `action_user_id`) VALUES ('{befriend_user_id}', '{request_user_id}', '{request_user_id}');"
        )
    database.commit()


def friend_request_accepted(requester_user_id, other_user_id):
    if int(requester_user_id) > int(other_user_id):
        cursor.execute(
            f"UPDATE `Scheduler`.`friendship` SET `relationship` = 'mutual-friends', `action_user_id` = '{requester_user_id}' WHERE (`user_one_id` = '{requester_user_id}') and (`user_two_id` = '{other_user_id}');"
        )
    else:
        cursor.execute(
            f"UPDATE `Scheduler`.`friendship` SET `relationship` = 'mutual-friends', `action_user_id` = '{requester_user_id}' WHERE (`user_one_id` = '{other_user_id}') and (`user_two_id` = '{requester_user_id}');"
        )
    database.commit()


def remove_friendship(requester_user_id, other_user_id):
    if int(requester_user_id) > int(other_user_id):
        cursor.execute(
            f"DELETE FROM `Scheduler`.`friendship` WHERE (`user_one_id` = '{requester_user_id}') and (`user_two_id` = '{other_user_id}');"
        )
    else:
        cursor.execute(
            f"DELETE FROM `Scheduler`.`friendship` WHERE (`user_one_id` = '{other_user_id}') and (`user_two_id` = '{requester_user_id}');"
        )
    database.commit()


def block_someone(requester_user_id, other_user_id):
    cursor.execute(f'SELECT count(*) FROM Scheduler.friendship WHERE  (user_one_id = "{requester_user_id}" and user_two_id= "{other_user_id}") or (user_one_id = "{other_user_id}" and user_two_id= "{requester_user_id}")')
    relationship_exist = cursor.fetchone()[0]
    if relationship_exist:
        cursor.execute(
            f"UPDATE `Scheduler`.`friendship` SET `action_user_id` = '{requester_user_id}', `relationship` = 'blocked' WHERE (`user_one_id` = '{requester_user_id}') and (`user_two_id` = '{other_user_id}') OR (`user_one_id` = '{other_user_id}') and (`user_two_id` = '{requester_user_id}') ;"
        )
    else:
        if int(requester_user_id) > int(other_user_id):
            cursor.execute(
                f"INSERT INTO `Scheduler`.`friendship` (`user_one_id`, `user_two_id`, `action_user_id`,`relationship`) VALUES ('{requester_user_id}', '{other_user_id}', '{requester_user_id}', 'blocked');"
            )
        else:
            cursor.execute(
                f"INSERT INTO `Scheduler`.`friendship` (`user_one_id`, `user_two_id`, `action_user_id`,`relationship`) VALUES ('{other_user_id}', '{requester_user_id}', '{requester_user_id}', 'blocked');"
            )
        database.commit()
