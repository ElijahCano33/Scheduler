from flask import Flask, session, redirect, url_for, escape, request, render_template
from hashlib import md5
import mysql.connector
from mysql.connector import Error


app = Flask(__name__)
connection = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com', database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')
cursor = connection.cursor()


@app.route('/api/connection-test')
def connection_test():
    if connection.is_connected():
        db_info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_info)
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("Your connected to database: ", record)
    else:
        print("Database is having an error")


@app.route("/api/register", methods=['GET', 'POST'])
def register_():
    response = {}
    data = request.get_json()
    email = data['email']
    password = data['password']
    display = data['display_name']
    imei = data["imei"]
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        cursor.execute('SELECT * FROM accounts WHERE username = %s AND password = %s', (email, password))
        account = cursor.fetchone()
        if not account[0]:
            cursor.execute("insert into Scheduler.users (username,email,password,mac_address,"


@app.route('/login', methods=['GET', 'POST'])
def login():
    response = {}
    if request.method == 'POST':
        email  = request.get_json()['email']
        cursor.execute("SELECT COUNT(1) FROM users WHERE email = %s". (email)
        if not cursor.fetchone()[0]:
            response['status'] = 'invalid email or email not present in db'
			return response
        password  = request.get_json()['password']
        cursor.execute("SELECT password FROM users WHERE name = %s", (email))
        for row in cursor.fetchall():
            if md5(password).hexdigest() == row[0]:
                response['status'] = 'Sucessful login'
                response['status'] = 'invalid password'
                retrurn response


if __name__ == '__main__':
    app.run(debug=True)

