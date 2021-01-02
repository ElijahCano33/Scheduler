from flask import Flask, Blueprint, request
from hashlib import sha1
from passlib.hash import argon2
import secrets
import bcrypt
import mysql.connector
from validate_email import validate_email

reg = Blueprint('register', __name__)

@reg.route("/api/register", methods=['POST'])
def register_():
    try:
        database = mysql.connector.connect(host='us-cdbr-east-02.cleardb.com', database='heroku_d5d142a49ae2a49', user='bc2b010a09f146', password='29e8ca6a')
        if database:
            cursor = database.cursor()
            response = dict()
            data = request.get_json()

            for key, value in data.items():
                error = checkValidityOfData(value, key)
                response['error'] = error
                if error != None:
                    raise Exception(response)

            email = data['email']
            passphrase = data['password']
            user_name = data['user_name']
            first_name = data['first_name']
            last_name = data['last_name']

            isValid = validate_email(email)

            if isValid:
                salt = generate_salt_string()
                newPassPhrase = encrypt_password(passphrase, salt)
                salt = salt.decode("utf-8")

                if request.method == 'POST' and 'email' in data and 'password' in data:
                    cursor.execute(f'SELECT * FROM heroku_d5d142a49ae2a49.users WHERE username = "{user_name}" or email = "{email}"')
                    account = cursor.fetchone()
                    if account:
                        response['error'] = "User Already Exists!" 
                        raise Exception(response)
                    else:
                        cursor.execute(
                            f'insert into heroku_d5d142a49ae2a49.users (username, email, password, salts, first_name, last_name) values ("{user_name}", "{email}", "{newPassPhrase}", "{salt}", "{first_name}", "{last_name}")')
                        database.commit()
                        response['status'] = True
                        response['status_info'] = 'account created successfully'
            else:
                response['error'] = "Entered Email Is Not Valid!" 
                raise Exception(response)
        else:
            error = "Connection to database failed!"
            response['error'] = error
            raise Exception(response)

    except Exception:
        return response, 400
    return response


def generate_salt_string():
    salt_string = bcrypt.gensalt()
    return salt_string

def encrypt_password(password_unencrypted, salt_string):
    encrypted_password = argon2.using(rounds=5, salt=salt_string).hash(password_unencrypted)
    return encrypted_password

def checkValidityOfData(requestData, typeOfData):
    if requestData == "" and typeOfData == "first_name":
        error = "Please Type In A First Name!"
        return error
    elif requestData == "" and typeOfData == "last_name":
        error = "Please Type In A Last Name!"
        return error
    elif requestData == "" and typeOfData == "email":
        error = "Please Type In An Email!"
        return error
    elif requestData == "" and typeOfData == "user_name":
        error = "Please Type In A Username!"
        return error
    elif requestData == "" and typeOfData == "password":
        error = "Please Type In A Password!"
        return error
    else:
        return None