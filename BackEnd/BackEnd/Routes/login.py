from flask import Flask, Blueprint
from flask import Flask, request
from hashlib import sha1
from passlib.hash import argon2
import secrets
import bcrypt
import mysql.connector

database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com',
                                   database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')

cursor = database.cursor()

log = Blueprint('login', __name__)

userAuthenticationTracker = []

@log.route('/api/login', methods=['POST'])
def login():
    response = {}
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        cursor.execute(f"SELECT COUNT(1) FROM Scheduler.users WHERE email = '{email}'")
        if not cursor.fetchone()[0]:
            response['status']= False
            response['status_info'] = 'invalid email or email not present in db'
            print(response)
        else:
            password = data['password']
            cursor.execute(f'SELECT password FROM Scheduler.users WHERE email = "{email}"')
            results = cursor.fetchall()
            print(results, "results")
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
                    userInfo = (email, response["authentication token"])
                    userAuthenticationTracker.insert(0, userInfo)
    else:
        response["status"] = False
        response["status_info"] = "invalid request type"

    return response


def encrypt_password(password_unencrypted, salt_string):
    encrypted_password = argon2.using(rounds=5, salt=salt_string).hash(password_unencrypted)
    return encrypted_password


def generate_authorization_token():
    token_string = secrets.token_hex(32)
    return token_string