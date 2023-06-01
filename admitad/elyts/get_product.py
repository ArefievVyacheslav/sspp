import re
import requests
import random
from bs4 import BeautifulSoup
from get_sizes import get_sizes
from get_images import get_images
from get_categories import get_categories
from get_transliterate import get_transliterate
from get_info import get_info


def get_product(html, link, gender):
    try:
        soup = BeautifulSoup(html, 'lxml')
        if gender == 'men':
            gender = 'Мужской'
        else:
            gender = 'Женский'
        # получаю крошки для распаршивания категорий и имени
        breadcrumbs_data = get_categories(soup)
        if breadcrumbs_data:
            brand = breadcrumbs_data['brand']
            name = breadcrumbs_data['name']
            category = breadcrumbs_data['category']
            subcategory = breadcrumbs_data['subcategory']
        else:
            return
        # получаю цены
        try:
            price = int(soup.find('div', class_=re.compile('final-price')).text.replace(' ', '').replace('руб.', ''))
            oldprice = int(soup.find('div', class_=re.compile('price-item')).text.replace(' ', '').replace('руб.', ''))
            sale = int(
                soup.find('span', class_=re.compile('discount-percent')).text.replace('-', '').replace('%', '').replace(
                    ')', '').replace('(', ''))
        except:
            print('Проблема при получении цены у товара', link)
            return
        # получаю инфо, цвет, состав и страну
        try:
            info_data = get_info(soup)
            info = info_data['info']
            color = info_data['color']
            country = info_data['country']
            description = info_data['description']
            structure = info_data['structure']
        except:
            print('Проблема при получении информации у товара', link)
            return
        # получаю размеры в наличии
        if category == 'Аксессуары':
            sizes = ['one size']
        else:
            sizes = get_sizes(soup)
        # получаю пикчи
        images = get_images(soup)
        if len(sizes) == 0 or len(sizes) == 0: return
        if category == 'Нижнее белье': category = 'Одежда'
        return {
            'id': round(random.uniform(1000000000, 9999999999)),
            'age': 'Взрослый',
            'benefit': oldprice - price,
            'brand': brand,
            'brandCountry': False,
            'brandCountry_t': False,
            'category': category,
            'category_t': get_transliterate(category),
            'color': color,
            'color_t': get_transliterate(color) if color else False,
            'country': country,
            'country_t': get_transliterate(country) if country else False,
            'delivery': ['ru'],
            'deliveryPrice': 500,
            'description': description,
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
            'shop': 'elyts',
            'sizes': sizes,
            'style': False,
            'style_t': False,
            'structure': structure,
            'subcategory': subcategory,
            'subcategory_t': get_transliterate(subcategory)
        }
    except Exception as ex:
        print(ex)
        print(f'{link} НЕ собран!')
        return


# res = requests.get('https://elyts.ru/product/derbi-emporio-armani-275894-black/')
# print(get_product(res.text, 'link', 'gender'))