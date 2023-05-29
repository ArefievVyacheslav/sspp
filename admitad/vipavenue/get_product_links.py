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
    if gender == 'men': url = f'https://vipavenue.ru/sale/mens/?page={page}&brand=632397,37,68,69,1174146,97,122,133,594271,608081,151,261,267,275,291,356,247491,388,489,497,501,619,631,641,2028,247493,696,709,720,723,737,755,782,908,934,951,986'
    else: url = f'https://vipavenue.ru/sale/womens/?page={page}&brand=37,901997,87,97,133,594271,608081,151,162,261,265,267,275,356,247491,364,388,2022,481,489,497,501,507,1036101,618,619,631,641,2028,247493,709,720,723,730,737,755,774,908,931,934,935,951,40061'
    async with session.get(url, headers=get_headers()) as response:
        links_arr = get_product_links_on_page(await response.text(), page)
        for link in links_arr:
            product_links.append(link)


async def gather_data(link, gender):
    async with aiohttp.ClientSession() as session:
        try:
            res = await session.get(link)
            soup = BeautifulSoup(await res.text(), 'lxml')
            page_count = int(soup.find('ul', class_=re.compile('pagination-list')).find_all('li')[-2].text.strip())
            print(f'Найдено {page_count} страниц!')
            tasks = []
            # for page in range(1, page_count + 1):
            for page in range(1, 5):
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
