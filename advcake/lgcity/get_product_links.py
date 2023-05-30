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
    async with session.get(
            f'https://lgcity.ru/{gender}/boss-or-armani_exchange-or-hugo-or-emporio_armani-or-karl_lagerfeld-or-bikkembergs-or-ea7_emporio_armani-or-trussardi-or-guess-or-marc_opolo/sale_ok/order_price-asc/page_{page}/',
            headers=get_headers()) as response:
        links_arr = get_product_links_on_page(await response.text(), page)
        for link in links_arr:
            product_links.append(link)


async def gather_data(link, gender):
    async with aiohttp.ClientSession() as session:
        try:
            res = await session.get(link)
            soup = BeautifulSoup(await res.text(), 'lxml')
            page_count = int(soup.find('a', class_=re.compile('catalog__pagination-last')).text.strip())
            print(f'Найдено {page_count} страниц!')
            tasks = []
            # for page in range(1, page_count + 1):
            for page in range(1, 3):
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
