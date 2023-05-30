import re
from bs4 import BeautifulSoup


def get_product_links_on_page(html, page):
    try:
        soup = BeautifulSoup(html, 'lxml')
        catalog = soup.find('div', class_=re.compile('grid_grid__'))
        products_links = catalog.find_all('a', class_=re.compile('spa_link'))
        links_arr = []
        for link in products_links:
            links_arr.append('https://stockmann.ru' + link.get('href'))
        return links_arr
    except:
        print(f'Ссылки на {page} странице НЕ собраны!')
        return

# def get_product_links_on_page(page, proxy):
#     try:
#         res = requests.get(f'https://stockmann.ru/sale/filter/brand-boss-or-tommy_hilfiger-or-guess-or-hugo-or-marc_o_polo-or-guess_jeans-or-calvin_klein-or-karl_lagerfeld-or-emporio_armani-or-geox-or-levi_s-or-gerry_weber-or-tommy_jeans-or-marc_o_polo_denim-or-liu_jo-or-antony_morato-or-lauren_ralph_lauren-or-gerry_weber_edition-or-ea7-or-mavi-or-pepe_jeans-or-versace_jeans_couture-or-coccinelle-or-lacoste-or-furla-or-ecco-or-tom_tailor-or-moschino-or-love_moschino-or-polaroid-or-michael_michael_kors-or-gerry_weber_casual-or-dkny-or-icepeak-or-champion-or-incanto-or-valentino-or-bikkembergs-or-polo_ralph_lauren-or-gant-or-dr_martens-or-napapijri-or-jimmy_choo-or-adidas-or-crocs-or-ugg-or-converse-or-ck_performance-or-diesel-or-puma-or-vogue-or-tamaris-or-dsquared2-or-dirk_bikkembergs-or-moschino_boutique-or-jordan-or-the_kooples-or-nike-or-reebok-or-lego-or-fila-or-tommy_hilfiger_tailored-or-lee-or-trussardi_jeans-or-guess_by_marciano-or-keds/available_online-online/?page={page}', headers=get_headers(), proxies={'http': f'http://{proxy}'})
#         soup = BeautifulSoup(res.text, 'lxml')
#         catalog = soup.find('ul', class_=re.compile('category-products_products__'))
#         products_links = catalog.find_all('a', class_=re.compile('card_link__'))
#         links_arr = []
#         for link in products_links:
#             links_arr.append('https://stockmann.ru' + link.get('href'))
#         return links_arr
#     except:
#         print(f'Ссылки на {page} странице НЕ собраны!')
#         return