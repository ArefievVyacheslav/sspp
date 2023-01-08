import json

from get_database import get_database
import requests


def db_write_products(products=False):
    ss = get_database('ss')
    if products:
        old_products = []
        clothes_products = ss['clothes'].find({ 'shop': 'stockmann'}, {'_id': False })
        shoes_products = ss['shoes'].find({ 'shop': 'stockmann'}, {'_id': False })
        accessories_products = ss['accessories'].find({ 'shop': 'stockmann'}, {'_id': False })
        for product in clothes_products: old_products.append(product)
        for product in shoes_products: old_products.append(product)
        for product in accessories_products: old_products.append(product)
        res = requests.post('http://localhost:3002/matrix', json={
            'oldProducts': old_products,
            'newProducts': products
        })
        products = json.loads(res.text)
        ss['clothes'].delete_many({ 'shop': 'stockmann' })
        ss['shoes'].delete_many({ 'shop': 'stockmann' })
        ss['accessories'].delete_many({ 'shop': 'stockmann' })
        clothes = list(filter(lambda product: product['category'] == 'Одежда', products))
        shoes = list(filter(lambda product: product['category'] == 'Обувь', products))
        accessories = list(filter(lambda product: product['category'] == 'Аксессуары', products))
        if len(clothes): ss['clothes'].insert_many(clothes)
        if len(shoes): ss['shoes'].insert_many(shoes)
        if len(accessories): ss['accessories'].insert_many(accessories)
