from flask import Blueprint, request
import mysql.connector
from flask_login import current_user, login_user, logout_user, login_required

uid = Blueprint('userId', __name__)


@uid.route('/api/userId', methods=['POST'])
def readUserId():
    try:
        database = mysql.connector.connect(host='us-cdbr-east-02.cleardb.com', database='heroku_d5d142a49ae2a49', user='bc2b010a09f146', password='29e8ca6a')
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