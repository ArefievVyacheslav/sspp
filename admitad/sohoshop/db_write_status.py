from get_database import get_database


def db_write_status(status, mode):
    ss = get_database('ss')
    if mode == 'create':
        ss['processing'].delete_one({ 'name': 'intermodann' })
        ss['temp_products'].delete_one({ 'shop': 'intermodann' })
        ss['processing'].insert_one(status)
    if mode == 'update': ss['processing'].update_one({
        'name': 'intermodann'
    }, {
        '$set': {
            status[0]: status[1]
        }
    }, upsert=False)
