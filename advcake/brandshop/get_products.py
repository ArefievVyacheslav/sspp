import time
from get_time import get_time
from get_product import get_product


products = []
start_time = time.time()


def get_products(links_arr, gender):
    for idx, product_link in enumerate(links_arr):
        products.append(get_product(product_link, gender, idx))

    print('Товары собраны за', f'{get_time(round(time.time() - start_time))}')
    goods = products.copy()
    products.clear()
    return {
        'products': goods,
        'status': f'Информация по товарам собрана через {get_time(round(time.time() - start_time))} от начала'
    }
