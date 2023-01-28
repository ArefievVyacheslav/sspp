import time
import asyncio
import aiohttp
from get_time import get_time
from get_product import get_product
from get_headers import get_headers
# from get_proxies import get_proxies


products = []
start_time = time.time()

async def get_page_data(session, link, idx, gender):
    # , proxy = f'http://{get_proxies(idx % 50)}'
    async with session.get(link, headers = get_headers()) as response:
        product = get_product(await response.text(), link, gender)
        if product: products.append(product)
        print(idx, 'product - OK!!!')

async def gather_data(links_arr, gender):
    async with aiohttp.ClientSession() as session:
        try:
            tasks = []
            for idx, link in enumerate(links_arr):
                await asyncio.sleep(0.1)
                task = asyncio.create_task(get_page_data(session, link, idx, gender))
                tasks.append(task)
            await asyncio.gather(*tasks)
        except:
            print(f'ТОВАРЫ НЕ собраны!')
            return

def get_products(links_arr, gender):
    asyncio.run(gather_data(links_arr, gender))
    print('Tovary sobrani za', f'{get_time(round(time.time() - start_time))}')
    goods = products.copy()
    products.clear()
    return {
        'products': goods,
        'status': f'Informacia po tovaram sobrana cherez {get_time(round(time.time() - start_time))} ot nachala'
    }
