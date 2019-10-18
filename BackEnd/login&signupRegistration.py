from flask import Flask, request
from hashlib import sha1
import mysql.connector
import json

app = Flask(__name__)
connection = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com',
                                     database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')
cursor = connection.cursor()


@app.route('/api/connection-test')
def connection_test():
    if connection.is_connected():
        db_info = connection.get_server_info()
        cursor.execute("select database();")
        record = cursor.fetchone()
        return f'''
        Connected to MySQL Server version {db_info}
        Your connected to database: {record}
        '''
    else:
        return "Database is having an error"


@app.route("/api/register", methods=['GET', 'POST'])
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
            response['status'] = 'username or email already exist'
        else:
            cursor.execute( f'insert into Scheduler.users (username, email, password, mac_address,first_name, last_name) values ("{user_name}", "{email}", "{passphrase}", "{imei}", "{first_name}", "{last_name}")')
            response['status'] = "Successfull"
    return response


@app.route('/login', methods=['GET', 'POST'])
def login():
    response = {}
    if request.method == 'POST':
        email = request.get_json()['email']
        cursor.execute("SELECT COUNT(1) FROM users WHERE email = %s", (email))
        if not cursor.fetchone()[0]:
            response['status'] = 'invalid email or email not present in db'
            return response
        password = request.get_json()['password']
        cursor.execute("SELECT password FROM users WHERE name = %s", (email))
        for row in cursor.fetchall():
            if md5(password).hexdigest() == row[0]:
                response['status'] = 'Sucessful login'
                response['status'] = 'invalid password'
                return response


if __name__ == '__main__':
    app.run(debug=True)
