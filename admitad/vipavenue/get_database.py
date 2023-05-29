from pymongo import MongoClient


def get_database(db_name):
    # CONNECTION_STRING = "mongodb://localhost:27017"
    CONNECTION_STRING = "mongodb://local:Qwerty_123@localhost:27017"
    client = MongoClient(CONNECTION_STRING)
    return client[db_name]