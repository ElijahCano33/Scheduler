from flask import Flask, request
from hashlib import sha1
import mysql.connector

app = Flask(__name__)


@app.route('/api/connection-test')
def connection_test():
    if database.is_connected():
        db_info = database.get_server_info()
        cursor.execute("select database();")
        record = cursor.fetchone()
        return f'''
        Connected to MySQL Server version {db_info}
        Your connected to database: {record}
        '''
    else:
        return "Database is having an error"


@app.route("/api/register", methods=['POST'])
def register_():
    response = dict()
    data = request.get_json()
    email = data['email']
    passphrase = data['password']
    user_name = data['user_name']
    imei = data['imei']
    first_name = data['first_name']
    last_name = data['last_name']

    if request.method == 'POST' and 'email' in data and 'password' in data:
        cursor.execute(f'SELECT * FROM Scheduler.users WHERE username = "{user_name}" or email = "{email}"')
        account = cursor.fetchone()
        if account:
            response['status'] = False
            response['status_info'] = 'username or email already exist'
        else:
            cursor.execute(
                f'insert into Scheduler.users (username, email, password, mac_address,first_name, last_name) values ("{user_name}", "{email}", "{passphrase}", "{imei}", "{first_name}", "{last_name}")')
            database.commit()
            response['status'] = True
            response['status_info'] = 'account created successfully'
    return response


@app.route('/login', methods=['POST'])
def login():
    response = {}
    if request.method == 'POST':
        email = request.get_json()['email']
        cursor.execute(f"SELECT COUNT(1) FROM users WHERE email = {email}")
        if not cursor.fetchone()[0]:
            response['status']= False
            response['status_info'] = 'invalid email or email not present in db'
        else:
            password = request.get_json()['password']
            cursor.execute(f'SLECT password FROM Scheduler.users WHERE email = "{email}"')
            for row in cursor.fetchall():
                if(encrypt_Password(password) == row[0]):
                    response['status']= True
                    response['status_info'] = 'Login attempt was Successful'
                    response["authentication token"] = generate_authorization_token()
    else:
        response["status"] = False
        response["status_info"] = "invalid request type"

    return response


def encrypt_Password(password_unencrypted):
    hashed_password = "jk;hs;jh"
    return hashed_password

def generate_authorization_token():
    return "llsjkahfkjldh"

if __name__ == '__main__':
    app.run(debug=True)
    database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com',
                                   database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')
    cursor = database.cursor()
