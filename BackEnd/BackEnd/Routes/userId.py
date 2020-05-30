from flask import Blueprint, request
import mysql.connector
from flask_login import current_user, login_user, logout_user, login_required

uid = Blueprint('userId', __name__)


@uid.route('/api/userId', methods=['POST'])
def readUserId():
    try:
        database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com', database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')
        if database:
            response = {}
            if current_user.is_authenticated():
                currentUserId = current_user.get_id()

                response['user_id'] = currentUserId      
            
        else:
            error = "Connection To Database Failed!"
            response['error'] = error
            raise Exception(response)
    except Exception:
        return response, 400

    return response