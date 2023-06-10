import re
import requests
import random
from bs4 import BeautifulSoup
from get_sale import get_sale
from get_brand import get_brand
from get_sizes import get_sizes
from get_prices import get_prices
from get_images import get_images
from get_categories import get_categories
from get_transliterate import get_transliterate
from get_info_color_structure_country import get_info_color_structure_country


def get_product(html, link, idx):
    print(idx, 'product')
    try:
        soup = BeautifulSoup(html, 'lxml')
        price = int(soup.find('span', class_='clrtype1').text.replace(' руб', '').replace(' ', ''))
        oldprice = int(soup.find('span', class_='clrtype3').text.replace(' руб', '').replace(' ', ''))
        sale = int(soup.find('div', class_='clrtype4').text.split(':')[1].replace('%', '').strip())
        try: color = soup.find('div', class_='supcolor').text.replace('Цвет: ', '').lower().strip()
        except: color = soup.find('h1').get('title').split('цвет ')[1].split(' Модель')[0]
        if 'Женс' in soup.find('h1').text: gender = 'Женский'
        else: gender = 'Мужской'
        name = soup.find('h1').text.split(',')[0].replace('Женские ', '').replace('Мужские ', '').capitalize()
        name = name + soup.find('div', class_='sub').text
        name = name.replace('Модель:', '').replace(', арт:', '').replace('арт: ', ' арт: ').replace('  ', ' ').strip()
        desc = soup.find('div', { 'itemprop': 'description' }).text.strip()
        sizes = []
        for size in soup.find_all('span', class_='cnt'):
            sizes.append(size.text.strip())
        info = {}
        info_keys = soup.find_all('td', class_='char_name')
        info_values = soup.find_all('td', class_='char_value')
        for idx, key in enumerate(info_keys):
            info[key.find('span', { 'itemprop': 'name' }).text.strip()] = info_values[idx].find('span', { 'itemprop': 'value' }).text
        brand = info['Бренд'].replace(' Обувь ', '').strip()
        category = 'Обувь'
        subcategory = info['Вид обуви'].strip().capitalize()
        images = []
        scripts = soup.find_all('script')
        for script in scripts:
            if '/*получение размеров + добавление в корзину*/' in str(script):
                for param in str(script).split(','):
                    if 'SRC' in param\
                        and 'UNSAFE_SRC' not in param\
                        and 'DETAIL_PICTURE' not in param\
                        and 'SAFE_SRC' not in param\
                        and 'NO_PHOTO' not in param\
                        and 'DEFAULT_PICTURE' not in param: images.append('https://sohoshop.ru' + param.replace("SRC':'", '').replace("'", ''))
        images = set(images)
        return {
            'id': round(random.uniform(1000000000, 9999999999)),
            'age': 'Взрослый',
            'benefit': oldprice - price,
            'brand': brand,
            "brandCountry": False,
            'brandCountry_t': False,
            'category': category,
            'category_t': get_transliterate(category),
            'color': color,
            'color_t': get_transliterate(color) if color else color,
            'country': False,
            'country_t': False,
            'delivery': ['ru'],
            'deliveryPrice': 199,
            'description': desc,
            'gender': gender,
            'name': name,
            'info': info,
            'installment': False,
            'images': images,
            'like': 0,
            'link': link,
            'oldprice': oldprice,
            'pp': 'admitad',
            'price': price,
            'sale': sale,
            'season': False,
            'season_t': False,
            'shop': 'intermodann',
            'sizes': sizes,
            "style": False,
            'style_t': False,
            'structure': False,
            'subcategory': subcategory,
            'subcategory_t': get_transliterate(subcategory)
        }
    except:
        print(f'{link} НЕ собран!')
        return


# res = requests.get('https://sohoshop.ru/product/22207082-4611365?oid=4616942&utm_source=admitad&utm_medium=cpc&utm_campaign=1392094&admitad_uid=5cc9ac23fb9ff58945a31ae07627db24')
# print(get_product(res.text, 'link', 1))
