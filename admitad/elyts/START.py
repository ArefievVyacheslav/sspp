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
        'name': 'elyts',
        'first': f'Начало сбора в {start_date.hour}:{start_date.minute}:{start_date.second}'
    }
    db_write('status', status, 'create')
    catalog_data = [
        {
            'gender': 'men',
            'link': 'https://elyts.ru/catalog/man/sale/filter/brand-is-adidas%20originals-or-armani%20jeans-or-asics-or-billionaire-or-brioni-or-carhartt%20wip-or-clarks%20originals-or-corneliani-or-diesel-or-dsquared2-or-ea7-or-emporio%20armani-or-frankie%20morello-or-geox-or-giorgio%20armani-or-mizuno-or-napapijri-or-obey-or-off-white-or-palm%20angels-or-philippe%20model-or-roberto%20cavalli-or-saint%20laurent-or-the%20north%20face-or-ugg-or-versace-or-versace%20collection-or-versace%20jeans%20couture/'
        },
        {
            'gender': 'women',
            'link': 'https://elyts.ru/catalog/woman/sale/filter/brand-is-armani%20jeans-or-asics-or-class%20cavalli-or-corneliani-or-diesel-or-dolce%26gabbana-or-dr.%20martens-or-dsquared2-or-ea7-or-emporio%20armani-or-frankie%20morello-or-geox-or-giorgio%20armani-or-jimmy%20choo-or-john%20richmond-or-liu%20jo-or-moschino-or-off-white-or-paco%20rabanne-or-palm%20angels-or-philippe%20model-or-saucony-or-the%20north%20face-or-valentino%20red-or-versace-or-versace%20collection-or-versace%20jeans%20couture/'
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
    # requests.post('https://api-parser.do-2000.store/update-products', json={ 'shop': 'elyts' })
    requests.post('http://localhost:3005/update-products', json={ 'shop': 'elyts' })

start()
