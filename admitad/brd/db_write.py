from db_write_status import db_write_status
from db_write_products import db_write_products


def db_write(mode, data=False, statusMode=False):
    if mode == 'products': db_write_products(data)
    if mode == 'status': db_write_status(data, statusMode)