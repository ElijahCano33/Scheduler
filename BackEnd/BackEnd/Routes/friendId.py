from flask import Blueprint, request
import mysql.connector
from flask_login import current_user, login_user, logout_user, login_required

fid = Blueprint('friendId', __name__)


@fid.route('/api/friendId', methods=['POST'])
def readFriendId():
    try:
        database = mysql.connector.connect(host='us-cdbr-east-02.cleardb.com', database='heroku_d5d142a49ae2a49', user='bc2b010a09f146', password='29e8ca6a')
        if database:
            response = {}
            cursor = database.cursor()
            
            if current_user.is_authenticated():

                data = request.get_json()
                friend = data['friend']
                cursor.execute(f"""SELECT user_id FROM heroku_d5d142a49ae2a49.users WHERE email='{friend}' OR username='{friend}'""")
                result = cursor.fetchone()[0]
                response['friend_id'] = result
           
            
        else:
            error = "Connection To Database Failed!"
            response['error'] = error
            raise Exception(response)
    except Exception:
        return response, 400

    return response