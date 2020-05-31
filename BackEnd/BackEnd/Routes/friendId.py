from flask import Blueprint, request
import mysql.connector
from flask_login import current_user, login_user, logout_user, login_required

fid = Blueprint('friendId', __name__)


@fid.route('/api/friendId', methods=['POST'])
def readFriendId():
    try:
        database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com', database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')
        if database:
            response = {}
            cursor = database.cursor()
            
            if current_user.is_authenticated():

                data = request.get_json()
                friend = data['friend']  
                cursor.execute(f"""SELECT user_id FROM Scheduler.users WHERE email='{friend}' OR username='{friend}'""")
                result = cursor.fetchone()[0]
                response['friend_id'] = result
           
            
        else:
            error = "Connection To Database Failed!"
            response['error'] = error
            raise Exception(response)
    except Exception:
        return response, 400

    return response