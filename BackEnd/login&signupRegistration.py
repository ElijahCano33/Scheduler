from flask import Flask, request
from hashlib import sha1
from passlib.hash import pbkdf2_sha256
import bcrypt
import mysql.connector

app = Flask(__name__)
database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com',
                                   database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')

#Cursor objects interact with the MySQL server using a MySQLConnection object.
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
                f'insert into Scheduler.users (username, email, password, first_name, last_name) values ("{user_name}", "{email}", "{newPassPhrase}",  "{first_name}", "{last_name}")')
            database.commit()
            response['status'] = True
            response['status_info'] = 'account created successfully'
    return response


@app.route('/api/login', methods=['POST'])
def login():
    response = {}
    if request.method == 'POST':
        email = request.get_json()['email']
        #searches for email in database
        cursor.execute(f"SELECT COUNT(1) FROM Scheduler.users WHERE email = '{email}'")
        #if email is not found returned invalid email or email doesn't exist
        if not cursor.fetchone()[0]:
            response['status']= False
            response['status_info'] = 'invalid email or email not present in db'
            print(response)
        #if email is found now we will search for password in the database just to verify
        else:
            password = request.get_json()['password']
            cursor.execute(f'SELECT password FROM Scheduler.users WHERE email = "{email}"')
            #The method fetchall() fetches all (or all remaining) rows of a query result set and returns a list of tuples. If no more rows are available, it returns an empty list.
            results = cursor.fetchall()
            if len(results) > 0:
                response['status']= False
                response['status_info'] = 'invalid password'
            #HERE I NEED TO SEARCH DATABASE FOR THE SALTED STRING THEN PASS IT INTO ENCRYPT_PASSWORD!!!!!!
            cursor.execute(f'SELECT salts FROM Scheduler.users WHERE email = "{email}"')
            #store found salt into salt_result
            salt_result = cursor.fetchall()
            for row in results:
                #make a call to encrypt_password with the password sent from frontend and salt that was made during registration
                #to see if its the same password
                #if same hash return login attempt was successful
                if encrypt_password(password, salt_result) == row[0]:
                    response['status']= True
                    response['status_info'] = 'Login attempt was Successful'
                    response["authentication token"] = generate_authorization_token()
    else:
        response["status"] = False
        response["status_info"] = "invalid request type"

    return response

#salt: a random string we do this because often what happens is that
#if two users have the the same password, they'll have the same password hashes.
#lookup tables and rainbow table attacks are feasible and successful becuase
#passwords are hashed the exact same way.A solution around this is to randomize
#each hash so that when the same password is hashed twice, the hashes are not the same
# we can do this using salts.
#salts are unique per password
#password is hashed using a new random salt
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

