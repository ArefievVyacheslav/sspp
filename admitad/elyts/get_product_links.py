import re
import time
import asyncio
import aiohttp
from bs4 import BeautifulSoup
from get_time import get_time
from get_headers import get_headers
# from get_proxies import get_proxies
from get_product_links_on_page import get_product_links_on_page

product_links = []
start_time = time.time()


async def get_page_data(session, page, gender):
    # , proxy = f'http://{get_proxies(page % 50)}'
    if gender == 'men': url = f'https://elyts.ru/catalog/man/sale/filter/brand-is-adidas%20originals-or-armani%20jeans-or-asics-or-billionaire-or-brioni-or-carhartt%20wip-or-clarks%20originals-or-corneliani-or-diesel-or-dsquared2-or-ea7-or-emporio%20armani-or-frankie%20morello-or-geox-or-giorgio%20armani-or-mizuno-or-napapijri-or-obey-or-off-white-or-palm%20angels-or-philippe%20model-or-roberto%20cavalli-or-saint%20laurent-or-the%20north%20face-or-ugg-or-versace-or-versace%20collection-or-versace%20jeans%20couture/?PAGEN_1={page}'
    else: url = f'https://elyts.ru/catalog/woman/sale/filter/brand-is-armani%20jeans-or-asics-or-class%20cavalli-or-corneliani-or-diesel-or-dolce%26gabbana-or-dr.%20martens-or-dsquared2-or-ea7-or-emporio%20armani-or-frankie%20morello-or-geox-or-giorgio%20armani-or-jimmy%20choo-or-john%20richmond-or-liu%20jo-or-moschino-or-off-white-or-paco%20rabanne-or-palm%20angels-or-philippe%20model-or-saucony-or-the%20north%20face-or-valentino%20red-or-versace-or-versace%20collection-or-versace%20jeans%20couture/?PAGEN_1={page}'
    async with session.get(url, headers=get_headers()) as response:
        links_arr = get_product_links_on_page(await response.text(), page)
        for link in links_arr:
            product_links.append(link)


async def gather_data(link, gender):
    async with aiohttp.ClientSession() as session:
        try:
            res = await session.get(link)
            soup = BeautifulSoup(await res.text(), 'lxml')
            page_count = int(soup.find_all('a', class_=re.compile('num'))[-1].text)
            print(f'Найдено {page_count} страниц!')
            tasks = []
            for page in range(1, page_count + 1):
            # for page in range(1, 2):
                await asyncio.sleep(0.1)
                task = asyncio.create_task(get_page_data(session, page, gender))
                tasks.append(task)
            await asyncio.gather(*tasks)
        except:
            print(f'Ссылки на ТОВАРЫ с пагинации НЕ собраны!')
            return


def get_product_links(link, gender):
    asyncio.run(gather_data(link, gender))
    print('Ссылки на товары собраны за', f'{get_time(round(time.time() - start_time))}')
    links = product_links.copy()
    product_links.clear()
    return {
        'product_links': links,
        'status': f'Ссылки на товары собраны через {get_time(round(time.time() - start_time))} от начала'
    }