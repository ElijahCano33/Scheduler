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

reg = Blueprint('register', __name__)

@reg.route("/api/register", methods=['POST'])
def register_():
    print("yooooo")
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


def generate_salt_string():
    salt_string = bcrypt.gensalt()
    return salt_string

def encrypt_password(password_unencrypted, salt_string):
    encrypted_password = argon2.using(rounds=5, salt=salt_string).hash(password_unencrypted)
    return encrypted_password

def generate_authorization_token():
    token_string = secrets.token_hex(32)
    return token_string