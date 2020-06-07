from flask import Flask, Blueprint, request, jsonify
import mysql.connector
from collections import defaultdict

event = Blueprint('event', __name__)

@event.route("/api/event", methods=['POST'])
def createEvent():
    try:
        database = mysql.connector.connect(host='scheduler-mysql-db.cxe7niamrusn.us-west-2.rds.amazonaws.com', database='Scheduler', user='admin_Scheduler', password='82h20kfaCrn05EKpEDrh')
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

            if not userID or not startDate:
                error = "Can't create event because of missing essential parameters"
                response['error'] = error
                raise Exception(response)


            mySql_insert_query = """INSERT INTO `Scheduler`.`events` (`user_id`, `title`, `location`, `description`, `startDate`, `endDate`, `startTime`, `endTIme`)  VALUES (%s, %s, %s, %s, %s, %s, %s, %s) """
            recordTuple = (userID, eventTitle, location, description, startDate, endDate, startTime, endTime)
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