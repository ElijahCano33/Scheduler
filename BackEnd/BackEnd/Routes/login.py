  
from flask import Flask, Blueprint, request, make_response
from hashlib import sha1
from passlib.hash import argon2
import secrets
import bcrypt
import mysql.connector
from validate_email import validate_email
import json
from datetime import timedelta
import os
from flask_login import current_user, login_user, logout_user, login_required

log = Blueprint('login', __name__)

class User():
    def __init__(self, email):
        self.email = email
    def is_authenticated(self):
        return True
    def is_active(self):
        return True
    def is_anonymous(self):
        return False
    def get_id(self):
        return self.email

log = Blueprint('login', __name__)

userAuthenticationTracker = []

@log.route('/api/login', methods=['POST'])
def login():
    try:
        database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com', database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')
        if database:
            cursor = database.cursor()
            response = {}
            if request.method == 'POST':
                data = request.get_json()
                email = data['email'].lower()

                if len(email) == 0:
                    error = "Email Needs A Value!"
                    response["error"] = error
                    raise Exception(response)

                isValid = validate_email(email)
                if(not isValid):
                    response['error'] = "The Entered Email Is Not Valid!" 
                    raise Exception(response)

                password = data['password']
                if(len(password) == 0):
                    error = "Password Needs A Value!"
                    response["error"] = error
                    raise Exception(response)

                cursor.execute(f"SELECT COUNT(1) FROM Scheduler.users WHERE email = '{email}'")
                if not cursor.fetchone()[0]:
                    error = "User Does Not Exist!"
                    response["error"] = error
                    raise Exception(response)
                    
                else:
                    password = data['password']
                    cursor.execute(f'SELECT password FROM Scheduler.users WHERE email = "{email}"')
                    results = cursor.fetchall()
                    
                    if len(results) > 0:
                        response['status']= False
                        response['status_info'] = 'Invalid Password!'
                    cursor.execute(f'SELECT salts FROM Scheduler.users WHERE email = "{email}"')
                    salt_result = cursor.fetchone()[0]
                    salt_result = str.encode(salt_result)

                    for row in results:
                        if encrypt_password(password, salt_result) == row[0]:
                            response = make_response(json.dumps({
                                'status_info': 'User Logged In'
                            }))
                            login_user(User(email), remember=True, duration=timedelta(days=1))
                        else:
                            error = "Incorrect Password!"
                            response['error'] = error
                            raise Exception(response)
                
            else:
                error = "Invalid Request Type!"
                response['error'] = error
                raise Exception(response)
        else:
            error = "Connection To Database Failed!"
            response['error'] = error
            raise Exception(response)
    except Exception:
        return response, 400

    return response


def encrypt_password(password_unencrypted, salt_string):
    encrypted_password = argon2.using(rounds=5, salt=salt_string).hash(password_unencrypted)
    return encrypted_password