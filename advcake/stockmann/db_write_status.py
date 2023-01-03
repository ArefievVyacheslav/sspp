from get_database import get_database


def db_write_status(status):
    ss = get_database('ss')
    ss['processing'].delete_one({ 'name': 'stockmann' })
    ss['processing'].insert_one(status)
