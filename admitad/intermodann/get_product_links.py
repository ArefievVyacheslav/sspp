import re
import time
import json
import asyncio
import aiohttp
import requests
from bs4 import BeautifulSoup
from get_time import get_time
from get_headers import get_headers
# from get_proxies import get_proxies
from get_product_links_on_page import get_product_links_on_page


product_links = []
start_time = time.time()

async def get_page_data(session, page):
    # , proxy = f'http://{get_proxies(page % 50)}'
    async with session.get(f'https://sohoshop.ru/catalog/obuv/filter/actual-is-skidka_20_35-or-skidka_35_45-or-skidka_45_60-or-skidka_60-or-thelastpair/brend-is-bugatti-or-clarks-or-diesel-or-gant-or-gas-or-napapijri-or-pepe-jeans-london-or-tom-tailor-shoes-or-strellson-or-sergio-tacchini-or-united-colors-of-benetton/pol-is-men-or-women/?PAGEN_1={page}', headers = get_headers()) as response:
        links_arr = get_product_links_on_page(await response.text(), page)
        for link in links_arr:
            product_links.append(link)

async def gather_data():
    async with aiohttp.ClientSession() as session:
        try:
            res = requests.get('https://sohoshop.ru/catalog/obuv/filter/actual-is-skidka_20_35-or-skidka_35_45-or-skidka_45_60-or-skidka_60-or-thelastpair/brend-is-bugatti-or-clarks-or-diesel-or-gant-or-gas-or-napapijri-or-pepe-jeans-london-or-tom-tailor-shoes-or-strellson-or-sergio-tacchini-or-united-colors-of-benetton/pol-is-men-or-women/')
            page_count = BeautifulSoup(res.text, 'lxml')
            page_count = int(page_count.find_all('a', class_='dark_link')[-1].text)
            print(f'Найдено {page_count} страниц')
            tasks = []
            for page in range(1, page_count + 1):
            # for page in range(1, 2):
                await asyncio.sleep(1)
                task = asyncio.create_task(get_page_data(session, page))
                tasks.append(task)
            await asyncio.gather(*tasks)
        except:
            print(f'Ссылки на ТОВАРЫ с пагинации НЕ собраны!')
            return

def get_product_links():
    asyncio.run(gather_data())
    print('Ссылки на товары собраны за', f'{get_time(round(time.time() - start_time))}')
    return {
        'product_links': product_links,
        'status': f'Ссылки на товары собраны через {get_time(round(time.time() - start_time))} от начала'
    }