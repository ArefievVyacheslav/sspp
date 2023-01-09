import time
import json
import asyncio
import aiohttp
from get_time import get_time
from get_headers import get_headers
# from get_proxies import get_proxies
from get_product_links_on_page import get_product_links_on_page


product_links = []
start_time = time.time()

async def get_page_data(session, page):
    # , proxy = f'http://{get_proxies(page % 50)}'
    async with session.get(f'https://stockmann.ru/sale/filter/brand-boss-or-tommy_hilfiger-or-guess-or-hugo-or-marc_o_polo-or-guess_jeans-or-calvin_klein-or-karl_lagerfeld-or-emporio_armani-or-geox-or-levi_s-or-gerry_weber-or-tommy_jeans-or-marc_o_polo_denim-or-liu_jo-or-antony_morato-or-lauren_ralph_lauren-or-gerry_weber_edition-or-ea7-or-mavi-or-pepe_jeans-or-versace_jeans_couture-or-coccinelle-or-lacoste-or-furla-or-ecco-or-tom_tailor-or-moschino-or-love_moschino-or-polaroid-or-michael_michael_kors-or-gerry_weber_casual-or-dkny-or-icepeak-or-champion-or-incanto-or-valentino-or-bikkembergs-or-polo_ralph_lauren-or-gant-or-dr_martens-or-napapijri-or-jimmy_choo-or-adidas-or-crocs-or-ugg-or-converse-or-ck_performance-or-diesel-or-puma-or-vogue-or-tamaris-or-dsquared2-or-dirk_bikkembergs-or-moschino_boutique-or-jordan-or-the_kooples-or-nike-or-reebok-or-lego-or-fila-or-tommy_hilfiger_tailored-or-lee-or-trussardi_jeans-or-guess_by_marciano-or-keds/available_online-online/?page={page}', headers = get_headers()) as response:
        links_arr = get_product_links_on_page(await response.text(), page)
        for link in links_arr:
            product_links.append(link)

async def gather_data():
    async with aiohttp.ClientSession() as session:
        try:
            res = await session.get('https://stockmann.ru/catalog-api/sale/filter/brand-boss-or-tommy_hilfiger-or-guess-or-hugo-or-marc_o_polo-or-guess_jeans-or-calvin_klein-or-karl_lagerfeld-or-emporio_armani-or-geox-or-levi_s-or-gerry_weber-or-tommy_jeans-or-marc_o_polo_denim-or-liu_jo-or-antony_morato-or-lauren_ralph_lauren-or-gerry_weber_edition-or-ea7-or-mavi-or-pepe_jeans-or-versace_jeans_couture-or-coccinelle-or-lacoste-or-furla-or-ecco-or-tom_tailor-or-moschino-or-love_moschino-or-polaroid-or-michael_michael_kors-or-gerry_weber_casual-or-dkny-or-icepeak-or-champion-or-incanto-or-valentino-or-bikkembergs-or-polo_ralph_lauren-or-gant-or-dr_martens-or-napapijri-or-jimmy_choo-or-adidas-or-crocs-or-ugg-or-converse-or-ck_performance-or-diesel-or-puma-or-vogue-or-tamaris-or-dsquared2-or-dirk_bikkembergs-or-moschino_boutique-or-jordan-or-the_kooples-or-nike-or-reebok-or-lego-or-fila-or-tommy_hilfiger_tailored-or-lee-or-trussardi_jeans-or-guess_by_marciano-or-keds/available_online-online/?outmode=json&filters[0][id]=sort&filters[0][values][0]=recommended')
            page_count = json.loads(await res.text())['payload']['pagination']['total']
            products_count = json.loads(await res.text())['payload']['productsCount']
            print(f'Найдено {products_count} товаров на {page_count} страницах')
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