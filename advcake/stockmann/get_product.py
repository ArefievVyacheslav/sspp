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


def get_product(html, link):
    try:
        soup = BeautifulSoup(html, 'lxml')
        # получаю крошки для распаршивания категорий, возраста и пола
        age_cat_subcat = get_categories(soup)
        if age_cat_subcat:
            age = age_cat_subcat['age']
            category = age_cat_subcat['category']
            gender = age_cat_subcat['gender']
            subcategory = age_cat_subcat['subcategory']
        else: return
        # получаю цены
        price = get_prices(soup.find('li', class_=re.compile('prices_discount__')))
        oldprice = get_prices(soup.find('li', class_=re.compile('prices_price__')))
        sale = get_sale(soup)
        # получаю инфо, цвет, состав и страну & season
        info_color_structure_country = get_info_color_structure_country(soup)
        info = info_color_structure_country['info']
        color = info_color_structure_country['color']
        country = info_color_structure_country['country']
        season = info_color_structure_country['season']
        structure = info_color_structure_country['structure']
        # получаю бренд
        brand = get_brand(soup)['brand']
        name = get_brand(soup)['name']
        # получаю размеры в наличии
        if category == 'Аксессуары': sizes = ['one size']
        else: sizes = get_sizes(soup, brand, category)
        # получаю пикчи
        images = get_images(soup)
        if len(sizes) == 0 or len(sizes) == 0: return
        if category == 'Верхняя одежда ': category = 'Одежда'
        return {
            'id': round(random.uniform(1000000000, 9999999999)),
            'age': age,
            'benefit': oldprice - price,
            'brand': brand,
            "brandCountry": False,
            'brandCountry_t': False,
            'category': category,
            'category_t': get_transliterate(category),
            'color': color,
            'color_t': get_transliterate(color) if color else color,
            'country': country,
            'country_t': get_transliterate(country) if country else country,
            'delivery': ['ru'],
            'deliveryPrice': 199,
            'description': False,
            'gender': gender,
            'name': name,
            'info': info,
            'installment': False,
            'images': images,
            'like': 0,
            'link': link,
            'oldprice': int(oldprice),
            'pp': 'advcake',
            'price': int(price),
            'sale': int(sale),
            'season': season,
            'season_t': get_transliterate(season) if season else season,
            'shop': 'stockmann',
            'sizes': sizes,
            "style": False,
            'style_t': False,
            'structure': structure,
            'subcategory': subcategory,
            'subcategory_t': get_transliterate(subcategory)
        }
    except:
        print(f'{link} НЕ собран!')
        return


# res = requests.get('https://stockmann.ru/product/5187316-dzhinsy-mavi/?oid=ctl2etk3u&utm_source=partners&utm_medium=cpa&utm_campaign=335&utm_content=gc9g7&wid=gc9g7&statid=351_77bda930feaa5ad5&sub5=48832&clickId=77bda930feaa5ad53146a5d7e2dfdaeb&sub1=77bda930feaa5ad5&sub2=3146a5d7e2dfdaeb&sub=77bda930feaa5ad5')
# print(get_product(res.text, 'link'))
