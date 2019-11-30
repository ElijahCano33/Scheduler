from flask import Flask, request
from hashlib import sha1
from passlib.hash import pbkdf2_sha256
import bcrypt
import mysql.connector

app = Flask(__name__)
database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com',
                                   database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')

                  

cursor = database.cursor()

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
    salt = generate_salt_string()
    newPassPhrase = encrypt_password(passphrase, salt)
    salt = salt.decode("utf-8")
    user_name = data['user_name']
    #imei = data['imei']
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
                f'insert into Scheduler.users (username, email, password, salts, first_name, last_name) values ("{user_name}", "{email}", "{newPassPhrase}", "{salt}", "{first_name}", "{last_name}")')
            database.commit()
            response['status'] = True
            response['status_info'] = 'account created successfully',
    return response


@app.route('/api/login', methods=['POST'])
def login():
    response = {}
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        #email = request.get_json()['email']
        cursor.execute(f"SELECT COUNT(1) FROM Scheduler.users WHERE email = '{email}'")
        if not cursor.fetchone()[0]:
            response['status']= False
            response['status_info'] = 'invalid email or email not present in db'
            print(response)
        else:
            #password = request.get_json()['password']
            password = data['password']
            cursor.execute(f'SELECT password FROM Scheduler.users WHERE email = "{email}"')
            results = cursor.fetchall()
            if len(results) > 0:
                response['status']= False
                response['status_info'] = 'invalid password'
            cursor.execute(f'SELECT salts FROM Scheduler.users WHERE email = "{email}"')
            salt_result = cursor.fetchall()[0]
            salt_result = str.encode(salt_result[0])
            for row in results:
                if encrypt_password(password, salt_result) == row[0]:
                    response['status']= True
                    response['status_info'] = 'Login attempt was Successful'
                    response["authentication token"] = generate_authorization_token()
    else:
        response["status"] = False
        response["status_info"] = "invalid request type"

    return response

def encrypt_password(password_unencrypted, salt_string):
    encrypted_password = pbkdf2_sha256.hash(password_unencrypted, rounds=200000, salt=salt_string)
    return encrypted_password

def generate_salt_string():
    salt_string = bcrypt.gensalt()
    return salt_string

def generate_authorization_token():
    return "laughing"

if __name__ == '__main__':
    app.run(debug=True)

