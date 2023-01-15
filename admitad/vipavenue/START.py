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
        'name': 'vipavenue',
        'first': f'Начало сбора в {start_date.hour}:{start_date.minute}:{start_date.second}'
    }
    db_write('status', status, 'create')
    catalog_data = [
        {
            'gender': 'men',
            'link': 'https://vipavenue.ru/sale/mens/?brand=632397,37,68,69,1174146,97,122,133,594271,608081,151,261,267,275,291,356,247491,388,489,497,501,619,631,641,2028,247493,696,709,720,723,737,755,782,908,934,951,986'
        },
        {
            'gender': 'women',
            'link': 'https://vipavenue.ru/sale/womens/?brand=37,901997,87,97,133,594271,608081,151,162,261,265,267,275,356,247491,364,388,2022,481,489,497,501,507,1036101,618,619,631,641,2028,247493,709,720,723,730,737,755,774,908,931,934,935,951,40061'
        }
    ]
    products_count = 0
    for option in catalog_data:
        product_links_data = get_product_links(option['link'], option['gender'])
        product_links = product_links_data['product_links']
        if option['gender'] == 'women': db_write('status', [ 'second', product_links_data['status'] ], 'update')
        products_data = get_products(product_links, option['gender'])
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
    requests.post('http://localhost:3002/update-products', json={ 'shop': 'vipavenue' })

start()
