from get_database import get_database


def db_write_status(status, mode):
    ss = get_database('ss')
    if mode == 'create':
        ss['processing'].delete_one({ 'name': 'lgcity' })
        ss['temp_products'].delete_one({ 'shop': 'lgcity' })
        ss['processing'].insert_one(status)
    if mode == 'update': ss['processing'].update_one({
        'name': 'lgcity'
    }, {
        '$set': {
            status[0]: status[1]
        }
    }, upsert=False)
