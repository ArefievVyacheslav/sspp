import time
import json
import asyncio
import aiohttp
from get_time import get_time
from get_headers import get_headers
# from get_proxies import get_proxies


products = []
start_time = time.time()

async def get_product_link(session, product):
    # , proxy = f'http://{get_proxies(page % 50)}'
    link = product['link']
    async with session.post('http://localhost:3002/deeplink', json={
        'deeplink': link,
        'pp': 'admitad',
        'offerId': 19294
    }, headers=get_headers()) as response:
        try:
            res = await response.text()
            product['link'] = res.replace("/'/?admitad", '/?admitad')
            products.append(product)
        except: print('deeplink - FAIL!!!')

async def gather_data(products):
    async with aiohttp.ClientSession() as session:
        try:
            tasks = []
            for product in products:
                await asyncio.sleep(0.1)
                task = asyncio.create_task(get_product_link(session, product))
                tasks.append(task)
            await asyncio.gather(*tasks)
        except:
            print(f'Диплинки на ТОВАРЫ с пагинации НЕ собраны!')
            return

def get_deeplinks(products):
    asyncio.run(gather_data(products))
    d_products = products.copy()
    products.clear()
    return {
        'products_with_deeplink': d_products,
        'status': f'Диплинки собраны через {get_time(round(time.time() - start_time))} от начала'
    }
