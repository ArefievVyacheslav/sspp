from get_database import get_database


def db_write_products(products=False):
    ss = get_database('ss')
    if products:
        clothes = list(filter(lambda product: product['category'] == 'Одежда', products))
        shoes = list(filter(lambda product: product['category'] == 'Обувь', products))
        accessories = list(filter(lambda product: product['category'] == 'Аксессуары', products))
        if len(clothes): ss['clothes'].insert_many(clothes)
        if len(shoes): ss['shoes'].insert_many(shoes)
        if len(accessories): ss['accessories'].insert_many(accessories)
    else:
        ss['processing'].delete_one({ 'name': 'stockmann' })
        ss['clothes'].delete_many({ 'shop': 'stockmann' })
        ss['shoes'].delete_many({ 'shop': 'stockmann' })
        ss['accessories'].delete_many({ 'shop': 'stockmann' })
