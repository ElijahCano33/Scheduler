from flask import Flask, Blueprint
from flask_login import current_user, login_user, logout_user, login_required, LoginManager
from BackEnd.Routes.connection import connect
from BackEnd.Routes.register import reg
from BackEnd.Routes.login import log, User
from BackEnd.Routes.friendship import friendship
from BackEnd.Routes.friendsList import fl
from BackEnd.Routes.userId import uid
from BackEnd.Routes.friendId import fid
from BackEnd.Routes.events import event
import mysql.connector

app = Flask(__name__)
app.secret_key = b'Y\xf7\xec\xe3m\x99r\x19A\x9d*l[\xdd\xa1\xf9\xe7P\x8a\x88\xd7\x067<'
authenticationManager = LoginManager(app)

app.register_blueprint(connect)
app.register_blueprint(reg)
app.register_blueprint(log)
app.register_blueprint(friendship)
app.register_blueprint(fl)
app.register_blueprint(uid)
app.register_blueprint(fid)
app.register_blueprint(event)

@authenticationManager.user_loader
def load_user(id):
    try:
        database = mysql.connector.connect(host='us-cdbr-east-02.cleardb.com', database='heroku_d5d142a49ae2a49', user='bc2b010a09f146', password='29e8ca6a')
        if database:
            response = dict()
            cursor = database.cursor()
            cursor.execute(f"""SELECT user_id from heroku_d5d142a49ae2a49.users WHERE email='{id}'""")
            result = cursor.fetchone()
            
            if result == None:
                return None
            else:
                return User(result[0])
        else:
            error = "Connection To Database Failed!"
            response['error'] = error
            raise Exception(response)
    except Exception:
        return response, 400

def RunServer():
    app.run(debug=True, host='0.0.0.0')