import re
from bs4 import BeautifulSoup


def get_product_links_on_page(html, page):
    try:
        soup = BeautifulSoup(html, 'lxml')
        catalog = soup.find_all('a', class_=re.compile('dark_link option-font-bold font_sm'))
        links_arr = []
        for card in catalog:
            links_arr.append('https://sohoshop.ru' + card['href'])
        return links_arr
    except:
        print(f'Ссылки на {page} странице НЕ собраны!')
        return
