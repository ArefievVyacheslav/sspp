import re
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
        price = get_prices(soup.find('span', class_=re.compile('product-card-main__price-current')))
        oldprice = get_prices(soup.find('span', class_=re.compile('product-card-main__price-old')))
        sale = get_sale(soup)
        # получаю инфо, цвет, состав и страну
        info_color_structure_country = get_info_color_structure_country(soup)
        info = info_color_structure_country['info']
        color = info_color_structure_country['color']
        country = info_color_structure_country['country']
        structure = info_color_structure_country['structure']
        # получаю бренд
        brand = get_brand(soup)
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
            'category': category,
            'categoryT': get_transliterate(category),
            'color': color,
            'country': country,
            'delivery': ['ru'],
            'deliveryPrice': 199,
            'description': False,
            'gender': gender,
            'name': soup.find('span', class_='breadcrumbs__last').text.strip(),
            'info': info,
            'installment': False,
            'images': images,
            'link': link,
            'oldprice': oldprice,
            'pp': 'advcake',
            'price': price,
            'sale': sale,
            "season": False,
            'shop': 'stockmann',
            'sizes': sizes,
            "style": False,
            'structure': structure,
            'subcategory': subcategory,
            'subcategoryT': get_transliterate(subcategory)
        }
    except:
        print(f'{link} НЕ собран!')
        return