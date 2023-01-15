from get_database import get_database


def db_write_status(status, mode):
    ss = get_database('ss')
    if mode == 'create':
        ss['processing'].delete_one({ 'name': 'elyts' })
        ss['temp_products'].delete_one({ 'shop': 'elyts' })
        ss['processing'].insert_one(status)
    if mode == 'update': ss['processing'].update_one({
        'name': 'elyts'
    }, {
        '$set': {
            status[0]: status[1]
        }
    }, upsert=False)
