import time
import datetime
import requests
from get_product_links_2 import get_product_links_2
from get_deeplinks import get_deeplinks
from get_products import get_products
from db_write import db_write
from get_time import get_time


def start():
    start_time = time.time()
    start_date = datetime.datetime.now()
    status = {
        'name': 'vipavenue',
        'first': f'Начало сбора в {start_date.hour}:{start_date.minute}:{start_date.second}'
    }
    db_write('status', status, 'create')
    catalog_data = [
        {
            'gender': 'men',
            'link': 'https://vipavenue.ru/sale/mens/'
        },
        {
            'gender': 'women',
            'link': 'https://vipavenue.ru/sale/womens/'
        }
    ]
    products_count = 0
    for option in catalog_data:
        product_links = get_product_links_2(option['gender'])
        if option['gender'] == 'women': db_write('status', [ 'second', product_links ], 'update')
        products_data = get_products(product_links[1:7], option['gender'])
        products = products_data['products']
        if option['gender'] == 'women': db_write('status', [ 'third', products_data['status'] ], 'update')
        print(len(products), 'ТОВАРОВ СОБРАНО!!!')
        products_with_deeplink_data = get_deeplinks(products)
        products_with_deeplink = products_with_deeplink_data['products_with_deeplink']
        if option['gender'] == 'women': db_write('status', [ 'fourth', products_with_deeplink_data['status'] ], 'update')
        print(len(products_with_deeplink), 'ТОВАРОВ С ДИПЛИНКАМИ!!!')
        db_write('products', products_with_deeplink)
        products_count += len(products_with_deeplink)
        if option['gender'] == 'women': db_write('status', [ 'total', f'{products_count} товаров собрано за {get_time(round(time.time() - start_time))}' ], 'update')
    # requests.post('https://api-parser.do-2000.store/update-products', json={ 'shop': 'vipavenue' })
    requests.post('http://localhost:3005/update-products', json={ 'shop': 'vipavenue' })

start()
