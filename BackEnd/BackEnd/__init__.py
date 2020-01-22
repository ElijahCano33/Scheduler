from flask import Flask, Blueprint
from BackEnd.Routes.connection import connect
from BackEnd.Routes.register import reg
from BackEnd.Routes.login import log
from BackEnd.Routes.friendship import friendship
from BackEnd.Routes.friendsList import fl

app = Flask(__name__)

app.register_blueprint(connect)
app.register_blueprint(reg)
app.register_blueprint(log)
app.register_blueprint(friendship)
app.register_blueprint(fl)


def RunServer():
    app.run(debug=True)