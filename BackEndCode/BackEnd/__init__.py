from flask import Flask, Blueprint
from BackEnd.Routes.connection import connect
from BackEnd.Routes.register import reg
from BackEnd.Routes.login import log

app = Flask(__name__)

app.register_blueprint(connect)
app.register_blueprint(reg)
app.register_blueprint(log)


def RunServer():
    app.run(debug=True)