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
    async with session.get(f'https://stockmann.ru/sale/filter/brand-antony_morato-or-adidas-or-boss-or-bugatti-or-calvin_klein-or-ck_jeans-or-champion-or-converse-or-crocs-or-coccinelle-or-ck_performance-or-diesel-or-dkny-or-dr_martens-or-dsquared2-or-dirk_bikkembergs-or-emporio_armani-or-ea7-or-ecco-or-furla-or-fila-or-guess-or-geox-or-gerry_weber-or-gerry_weber_edition-or-gerry_weber_casual-or-hugo-or-icepeak-or-incanto-or-jack_jones-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lauren_ralph_lauren-or-liu_jo-or-lacoste-or-love_moschino-or-liujo_milano-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-moschino-or-michael_michael_kors-or-moschino_boutique-or-nike-or-napapijri-or-new_balance-or-pepe_jeans-or-paul_shark-or-polo_ralph_lauren-or-polaroid-or-puma-or-roxy-or-stella_mccartney-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-tamaris-or-urban_tiger-or-ugg-or-versace_jeans_couture-or-vogue-or-valentino/available_online-online/has_discount-y/?page={page}', headers = get_headers()) as response:
        links_arr = get_product_links_on_page(await response.text(), page)
        for link in links_arr:
            product_links.append(link)

async def gather_data():
    async with aiohttp.ClientSession() as session:
        try:
            res = requests.get('https://stockmann.ru/sale/filter/brand-antony_morato-or-adidas-or-boss-or-bugatti-or-calvin_klein-or-ck_jeans-or-champion-or-converse-or-crocs-or-coccinelle-or-ck_performance-or-diesel-or-dkny-or-dr_martens-or-dsquared2-or-dirk_bikkembergs-or-emporio_armani-or-ea7-or-ecco-or-furla-or-fila-or-guess-or-geox-or-gerry_weber-or-gerry_weber_edition-or-gerry_weber_casual-or-hugo-or-icepeak-or-incanto-or-jack_jones-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lauren_ralph_lauren-or-liu_jo-or-lacoste-or-love_moschino-or-liujo_milano-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-moschino-or-michael_michael_kors-or-moschino_boutique-or-nike-or-napapijri-or-new_balance-or-pepe_jeans-or-paul_shark-or-polo_ralph_lauren-or-polaroid-or-puma-or-roxy-or-stella_mccartney-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-tamaris-or-urban_tiger-or-ugg-or-versace_jeans_couture-or-vogue-or-valentino/available_online-online/has_discount-y/?page=1')
            page_count = BeautifulSoup(res.text, 'lxml')
            page_count = int(page_count.find_all('a', re.compile('pagination_link__'))[-2].text)
            print(f'Найдено {page_count} страниц')
            tasks = []
            for page in range(1, page_count + 1):
            # for page in range(1, 3):
                await asyncio.sleep(0.1)
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