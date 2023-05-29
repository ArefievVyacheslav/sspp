from get_database import get_database


def db_write_products(products):
    ss = get_database('ss')
    temp_products = ss['temp_products'].find_one({'shop': 'vipavenue'})
    if temp_products is not None:
        for product in products:
            temp_products['products'].append(product)
        ss['temp_products'].replace_one({'shop': 'vipavenue'}, temp_products)
    else:
        ss['temp_products'].insert_one({
            'shop': 'vipavenue',
            'products': products
        })
