import time
import datetime
import requests
from get_product_links import get_product_links
from get_deeplinks import get_deeplinks
from get_products import get_products
from db_write import db_write
from get_time import get_time


start_time = time.time()
start_date = datetime.datetime.now()



def start_gender(option):
    product_links_data = get_product_links(option['link'])
    product_links = product_links_data['product_links']
    print(len(product_links), 'ССЫЛОК НА ТОВАРЫ!')
    if option['gender'] == 'women': db_write('status', ['second', product_links_data['status']], 'update')
    products_data = get_products(product_links[1:3], option['gender'])
    products = products_data['products']
    if option['gender'] == 'women': db_write('status', ['third', products_data['status']], 'update')
    print(len(products), 'ТОВАРОВ обработано!!!')
    products_with_deeplink_data = get_deeplinks(products)
    products_with_deeplink = products_with_deeplink_data['products_with_deeplink']
    if option['gender'] == 'women': db_write('status', ['fourth', products_with_deeplink_data['status']], 'update')
    print(len(products_with_deeplink), 'ТОВАРОВ с диплинками!!!')
    db_write('products', products_with_deeplink)
    if option['gender'] == 'women': db_write('status', ['total',
                                                        f'~ {len(products_with_deeplink) * 2} товаров собрано за {get_time(round(time.time() - start_time))}'],
                                             'update')
    requests.post('http://localhost:3005/update-products', json={'shop': 'brandshop'})


start_gender(
    {
        'gender': 'men',
        'link': 'https://lgcity.ru/men/boss-or-armani_exchange-or-hugo-or-emporio_armani-or-karl_lagerfeld-or-bikkembergs-or-ea7_emporio_armani-or-bugatti-or-trussardi-or-guess-or-marc_opolo/sale_ok/order_price-asc/'
    }
)

# start_gender(
#     {
#         'gender': 'women',
#         'link': 'https://lgcity.ru/women/boss-or-armani_exchange-or-hugo-or-emporio_armani-or-liu_jo-or-tommy_hilfiger-or-love_moschino-or-ea7_emporio_armani-or-betty_barclay-or-liu_jo_sport-or-vogue-or-trussardi-or-bettyco-or-guess-or-marc_opolo/order_price-asc/'
#     }
# )



# def start():
#     start_time = time.time()
#     start_date = datetime.datetime.now()
#     status = {
#         'name': 'lgcity',
#         'first': f'Начало сбора в {start_date.hour}:{start_date.minute}:{start_date.second}'
#     }
#     db_write('status', status, 'create')
#     catalog_data = [
#         {
#             'gender': 'men',
#             'link': 'https://lgcity.ru/men/boss-or-armani_exchange-or-hugo-or-emporio_armani-or-karl_lagerfeld-or-bikkembergs-or-ea7_emporio_armani-or-bugatti-or-trussardi-or-guess-or-marc_opolo/sale_ok/order_price-asc/'
#         },
#         {
#             'gender': 'women',
#             'link': 'https://lgcity.ru/women/boss-or-armani_exchange-or-hugo-or-emporio_armani-or-liu_jo-or-tommy_hilfiger-or-love_moschino-or-ea7_emporio_armani-or-betty_barclay-or-liu_jo_sport-or-vogue-or-trussardi-or-bettyco-or-guess-or-marc_opolo/order_price-asc/'
#         }
#     ]
#     products_count = 0
#     for option in catalog_data:
#         product_links_data = get_product_links(option['link'], option['gender'])
#     #     product_links = product_links_data['product_links']
#     #     if option['gender'] == 'women': db_write('status', [ 'second', product_links_data['status'] ], 'update')
#     #     products_data = get_products(product_links[1:5], option['gender'])
#     #     products = products_data['products']
#     #     if option['gender'] == 'women': db_write('status', [ 'third', products_data['status'] ], 'update')
#     #     print(len(products), 'ТОВАРОВ СОБРАНО!!!')
#     #     products_with_deeplink_data = get_deeplinks(products)
#     #     products_with_deeplink = products_with_deeplink_data['products_with_deeplink']
#     #     if option['gender'] == 'women': db_write('status', [ 'fourth', products_with_deeplink_data['status'] ], 'update')
#     #     print(len(products_with_deeplink), 'ТОВАРОВ С ДИПЛИНКАМИ!!!')
#     #     db_write('products', products_with_deeplink)
#     #     products_count += len(products_with_deeplink)
#     #     if option['gender'] == 'women': db_write('status', [ 'total', f'{products_count} товаров собрано за {get_time(round(time.time() - start_time))}' ], 'update')
#     # # requests.post('http://api-parser.sales-search.store/update-products', json={ 'shop': 'lgcity' })
#     # requests.post('http://localhost:3005/update-products', json={ 'shop': 'lgcity' })
#
# start()
