import re
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
        if gender == 'men': gender = 'Мужской'
        else: gender = 'Женский'
        # получаю крошки для распаршивания категорий и имени
        name_cat_subcat = get_categories(soup)
        if name_cat_subcat:
            brand = name_cat_subcat['brand']
            name = name_cat_subcat['name']
            category = name_cat_subcat['category']
            subcategory = name_cat_subcat['subcategory']
        else:
            return
        # получаю цены
        try:
            price = int(soup.find('div', class_=re.compile('product__price')).find('ins').text.replace(' ', '').replace('₽', ''))
            oldprice = int(soup.find('div', class_=re.compile('product__price')).find('del').text.replace(' ', '').replace('₽', ''))
            sale = int(soup.find('div', class_=re.compile('card-product__sale')).text.replace('-', '').replace('%', '').strip())
        except:
            print('Проблема при получении цены у товара', link)
            return
        # # получаю инфо, цвет, состав и страну
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
        if category == 'Аксессуары': sizes = ['one size']
        else: sizes = get_sizes(soup)
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
            'category': category,
            'categoryT': get_transliterate(category),
            'color': color,
            'country': country,
            'delivery': ['ru', 'rb', 'kz', 'am', 'kg', 'az', 'md', 'tj', 'uz', 'tm'],
            'deliveryPrice': 500,
            'description': description,
            'gender': gender,
            'name': name,
            'info': info,
            'installment': False,
            'images': images,
            'link': link,
            'oldprice': oldprice,
            'pp': 'admitad',
            'price': price,
            'sale': sale,
            'season': False,
            'shop': 'vipavenue',
            'sizes': sizes,
            'style': False,
            'structure': structure,
            'subcategory': subcategory,
            'subcategoryT': get_transliterate(subcategory)
        }
    except Exception as ex:
        print(ex)
        print(f'{link} НЕ собран!')
        return