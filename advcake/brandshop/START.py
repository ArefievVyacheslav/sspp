import time
import datetime
import requests
from get_product_links import get_product_links
from get_deeplinks import get_deeplinks
from get_products import get_products
from db_write import db_write
from get_time import get_time
from multiprocessing import Pool


start_time = time.time()
start_date = datetime.datetime.now()


def start_gender(option):
    product_links_data = get_product_links(option['link'])
    product_links = product_links_data['product_links']
    print(len(product_links), 'ССЫЛОК НА ТОВАРЫ!')
    if option['gender'] == 'women': db_write('status', [ 'second', product_links_data['status'] ], 'update')
    products_data = get_products(product_links[1:3], option['gender'])
    products = products_data['products']
    if option['gender'] == 'women': db_write('status', [ 'third', products_data['status'] ], 'update')
    print(len(products), 'ТОВАРОВ обработано!!!')
    products_with_deeplink_data = get_deeplinks(products)
    products_with_deeplink = products_with_deeplink_data['products_with_deeplink']
    if option['gender'] == 'women': db_write('status', [ 'fourth', products_with_deeplink_data['status'] ], 'update')
    print(len(products_with_deeplink), 'ТОВАРОВ с диплинками!!!')
    db_write('products', products_with_deeplink)
    if option['gender'] == 'women': db_write('status', [ 'total', f'~ {len(products_with_deeplink) * 2} товаров собрано за {get_time(round(time.time() - start_time))}' ], 'update')
    # requests.post('http://api-parser.sales-search.store/update-products', json={ 'shop': 'brandshop' })
    requests.post('http://localhost:3005/update-products', json={ 'shop': 'brandshop' })


def start():
    status = {
        'name': 'brandshop',
        'first': f'Начало сбора в {start_date.hour}:{start_date.minute}:{start_date.second}'
    }
    db_write('status', status, 'create')
    catalog_data = [
        {
            'gender': 'men',
            'link': 'https://brandshop.ru/sale/?mfp=17-pol%5B%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9%5D,manufacturers%5Badidas%20Originals,ASICS,Lacoste,adidas%20Performance,adidas%20Skateboarding,Alpha%20Industries,Converse,Diadora,Dr.%20Martens,Helly%20Hansen,Lacoste,Napapijri,New%20Balance,Nike,Premiata,Polo%20Ralph%20Lauren,Reebok,Puma,Saucony,Stone%20Island%20Shadow%20Project,Timberland,Umbro,Vans,Y-3%5D&limit=240'
        },
        {
            'gender': 'women',
            'link': 'https://brandshop.ru/sale/?mfp=17-pol%5B%D0%96%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%5D,manufacturers%5Badidas%20Originals,adidas%20Performance,adidas%20Skateboarding,Alpha%20Industries,Converse,Diadora,Dr.%20Martens,Helly%20Hansen,Lacoste,Napapijri,New%20Balance,Nike,Premiata,Polo%20Ralph%20Lauren,Reebok,Puma,Saucony,Lacoste,Stone%20Island%20Shadow%20Project,Timberland,Umbro,Vans,Y-3,ASICS%5D&limit=240'
        }
    ]
    p = Pool(processes=2)
    p.map(start_gender, catalog_data)
    db_write('status', [ 'total', f'Товары собраны за {get_time(round(time.time() - start_time))}' ], 'update')


start()