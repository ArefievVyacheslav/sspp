import time
import datetime
import requests
from get_product_links import get_product_links
from get_deeplinks import get_deeplinks
from get_products import get_products
from db_write import db_write
from get_time import get_time


def start():
    start_time = time.time()
    start_date = datetime.datetime.now()
    status = {
        'name': 'stockmann',
        'first': f'Начало сбора в {start_date.hour}:{start_date.minute}:{start_date.second}'
    }
    db_write('status', status, 'create')
    product_links_data = get_product_links()
    product_links = product_links_data['product_links']
    db_write('status', [ 'second', product_links_data['status'] ], 'update')
    products_data = get_products(product_links)
    products = products_data['products']
    db_write('status', [ 'third', products_data['status'] ], 'update')
    print(len(products), 'ТОВАРОВ СОБРАНО!!!')
    products_with_deeplink_data = get_deeplinks(products)
    products_with_deeplink = products_with_deeplink_data['products_with_deeplink']
    db_write('status', [ 'fourth', products_with_deeplink_data['status'] ], 'update')
    print(len(products_with_deeplink), 'ТОВАРОВ С ДИПЛИНКАМИ!!!')
    db_write('products', products_with_deeplink)
    db_write('status', [ 'total', f'{len(products_with_deeplink)} товаров собрано за {get_time(round(time.time() - start_time))}' ], 'update')
    requests.post('http://localhost:3005/update-products', json={ 'shop': 'stockmann' })

start()