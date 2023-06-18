import re
import random
import requests
from bs4 import BeautifulSoup
from get_sizes import get_sizes
from get_images import get_images
from get_categories import get_categories
from get_transliterate import get_transliterate
from get_info import get_info


def get_product(html, link, gender):
    try:
        soup = BeautifulSoup(html, 'lxml')
        if gender == 'men': gender = 'Мужской'
        else: gender = 'Женский'
        sizes_proto = soup.find_all('label', class_=re.compile('options-item'))
        sizes = []
        for size in sizes_proto:
            if 'disabled' not in size.get('class'):
                result = size.find('span').text.strip()
                if len(result) == 4 and 'XX' not in result: result = result[0:2] + '/' + result[2:4]
                sizes.append(result.replace(',', '.'))
        if len(sizes) == 0: return
        if sizes[0] == '': return
        name = soup.find('h1').text
        price = int(soup.find('span', { 'itemprop': 'price' }).text)
        oldprice = int(soup.find('span', class_='price_obsolete').text.replace(' Р', ''))
        sale = int(soup.find('div', class_=re.compile('product-card__label--sale')).text.replace('-', '').replace('%', ''))
        brand = soup.find('a', class_='brand').find('img').get('alt')
        color = soup.find('div', class_='options').find('span').text.replace('ё', 'е').lower()
        try: desc = soup.find('div', class_='info-description').text.strip()
        except: desc = False
        info = []
        for property in soup.find('div', class_='details-description').find_all('li'):
            info.append(property.text.strip())
        images = []
        for img in soup.find('section', class_='desktop_images').find_all('a', class_=re.compile('cloud-zoom')):
            images.append(img.find('img').get('src'))
        breadcrumbs_proto = soup.find('nav', class_='breadcrumbs').find_all('span', { 'itemprop': 'name' })
        breadcrumbs = []
        for crumb in breadcrumbs_proto:
            breadcrumbs.append(crumb.text)
        category = ''
        if 'одежда' in breadcrumbs[2].lower(): category = 'Одежда'
        else:
            if 'обувь' in breadcrumbs[2].lower(): category = 'Обувь'
        if category == '': category = 'Аксессуары'
        subcategory = breadcrumbs[3]\
            .replace(' мужская', '').replace('Мужская ', '').replace(' мужские', '').replace('Мужские', '').replace('Женские ', '')\
            .replace('Женская ', '').replace(' женская', '').replace(' женские', '').strip().capitalize()
        return {
            'id': round(random.uniform(1000000000, 9999999999)),
            'age': 'Взрослый',
            'benefit': oldprice - price,
            'brand': brand.upper(),
            'brandCountry': False,
            'brandCountry_t': False,
            'category': category,
            'category_t': get_transliterate(category),
            'color': color,
            'color_t': get_transliterate(color) if color else color,
            'country': False,
            'country_t': False,
            'delivery': ['ru'],
            'deliveryPrice': False,
            'description': desc,
            'gender': gender,
            'name': name,
            'info': info,
            'installment': True,
            'images': images,
            'like': 0,
            'link': link,
            'oldprice': oldprice,
            'pp': 'admitad',
            'price': price,
            'sale': sale,
            'season': False,
            'season_t': False,
            'shop': 'brd',
            'sizes': sizes,
            'style': False,
            'style_t': False,
            'structure': False,
            'subcategory': subcategory,
            'subcategory_t': get_transliterate(subcategory).replace(' ', '-').lower()
        }
    except Exception as ex:
        print(ex)
        print(f'{link} НЕ собран!')
        return

# res = requests.get('https://www.brd.ru/product/adynp03076-rsd0-bryuki-chinos-worker-relaxed?utm_source=admitad&utm_medium=cpa&utm_campaign=1392094&admitad_uid=3911ed74823043c1eec359d596ce0bc9&tagtag_uid=3911ed74823043c1eec359d596ce0bc9')
# print(get_product(res.text, 'link', 'gender'))