from flask import Flask, Blueprint, request, jsonify
import mysql.connector
from collections import defaultdict

event = Blueprint('event', __name__)

@event.route("/api/event", methods=['POST'])
def createEvent():
    try:
        database = mysql.connector.connect(host='us-cdbr-east-02.cleardb.com', database='heroku_d5d142a49ae2a49', user='bc2b010a09f146', password='29e8ca6a')
        if database:
            cursor = database.cursor()
            response = dict()
            data = request.get_json()

            eventTitle = data["event_title"]
            description = data["description"]
            location = data["location"]
            eventTitle = data["event_title"]
            startDate = data["starting_date"] 
            endDate = data["ending_day"] 
            startTime = data["starting_time"] 
            endTime = data["ending_time"]
            userID = data["user_id"]
            hiddenEvent = data["hidden_event"]

            if not userID or not startDate:
                error = "Can't create event because of missing essential parameters"
                response['error'] = error
                raise Exception(response)


            mySql_insert_query = """INSERT INTO `Scheduler`.`events` (`user_id`, `title`, `location`, `description`, `startDate`, `endDate`, `startTime`, `endTIme`,`hiddenEvent`)  VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) """
            recordTuple = (userID, eventTitle, location, description, startDate, endDate, startTime, endTime, hiddenEvent)
            cursor.execute(mySql_insert_query, recordTuple)
            database.commit()

            cursor.close()
            database.close()
            
            response['status'] = True
            response['status_info'] = 'event created successfully'

        else:
            error = "Connection to database failed!"
            response['error'] = error
            raise Exception(response)

    except Exception:
        return response, 400
    return response


@event.route("/api/event/read", methods=['POST'])
def GetEvent():
    try:
        database = mysql.connector.connect(host='us-cdbr-east-02.cleardb.com', database='heroku_d5d142a49ae2a49', user='bc2b010a09f146', password='29e8ca6a')
        if database:
            cursor = database.cursor()
            response = dict()
            friends = []
            data = request.get_json()

            userID = data["user_id"]
            requestType = data["request_type"]

            if requestType == "month":
                month = data["month"]
                year = data["year"]
            elif requestType == "year":
                year = data["year"]

            if not userID or not requestType or not year:
                error = "Can't create event because of missing essential parameters"
                response['error'] = error
                raise Exception(response)

            if requestType == "month":
                mySql_insert_query = """SELECT * FROM Scheduler.events where user_id = %s and month(startDate)= %s and year(startDate)= %s  """
                recordTuple = (userID, month, year)
                cursor.execute(mySql_insert_query, recordTuple)
            elif requestType == "year":
                mySql_insert_query = """SELECT * FROM Scheduler.events where user_id = %s and year(startDate)= %s  """
                recordTuple = (userID, year)
                cursor.execute(mySql_insert_query, recordTuple)
            
            eventList = cursor.fetchall()

            cursor.execute("SELECT GROUP_CONCAT(column_name ORDER BY ordinal_position) FROM information_schema.columns WHERE table_schema = DATABASE() and table_name = 'events'")
            columnLabels = list(cursor.fetchone())[0].split(',')

            if len(eventList) == 0:
                error = "No Events available for this period!"
                response['error'] = error
                print(error)
                raise Exception(response)

            toReturn = []
            for event in eventList:
                anEvent = [str(column) for column in event]
                toReturn.append(dict(zip(columnLabels, anEvent)))

            response["events"] = toReturn
        else:
            error = "Connection to database failed!"
            response['error'] = error
            raise Exception(response)

    except Exception:
        return response, 400
    return response

