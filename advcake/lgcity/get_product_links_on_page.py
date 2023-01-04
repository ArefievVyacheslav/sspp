import re
from bs4 import BeautifulSoup


def get_product_links_on_page(html, page):
    try:
        soup = BeautifulSoup(html, 'lxml')
        products_links = soup.find_all('a', class_=re.compile('owox-catalog-list'))
        links_arr = []
        for link in products_links:
            links_arr.append('https://lgcity.ru/' + link.get('href'))
        return links_arr
    except:
        print(f'Ссылки на {page} странице НЕ собраны!')
        return