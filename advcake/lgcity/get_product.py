import re
import random
from bs4 import BeautifulSoup
from get_brand import get_brand
from get_sizes import get_sizes
from get_images import get_images
from get_categories import get_categories
from get_transliterate import get_transliterate
from get_info_color_structure_country import get_info_color_structure_country


def get_product(html, link, gender):
    try:
        soup = BeautifulSoup(html, 'html.parser')
        if gender == 'men':
            gender = 'Мужской'
        else:
            gender = 'Женский'
        # получаю крошки для распаршивания категорий и имени
        name_cat_subcat = get_categories(soup)
        if name_cat_subcat:
            name = name_cat_subcat['name']
            category = name_cat_subcat['category']
            subcategory = name_cat_subcat['subcategory']
        else:
            return
        # получаю цены
        try:
            scriptData = soup.find_all('script', attrs={ 'data-skip-moving': True })
            scriptDataArr = scriptData[1].text.split(',')
            price = int(soup.find('div', class_=re.compile('card__info-price-text--new')).get('content').replace(' ', ''))
            oldprice = int([s for s in scriptDataArr if 'metric3' in s][0].replace('"metric3":', ''))
            sale = int([s for s in scriptDataArr if 'coupon' in s][0].replace('"coupon":"', '').replace('%"', ''))
        except:
            print('Проблема при получении цены у товара'.encode('utf-8'), link)
            return
        # # получаю инфо, цвет, состав и страну
        try:
            info_data = get_info_color_structure_country(soup)
            info = info_data['info']
            brand_country = info_data['brand_country']
            color = info_data['color']
            country = info_data['country']
            season = info_data['season']
            structure = info_data['structure']
            style = info_data['style']
        except:
            print('Проблема при получении информации у товара'.encode('utf-8'), link)
            return
        # получаю бренд
        brand = get_brand(soup)
        # получаю размеры в наличии
        if category == 'Аксессуары': sizes = ['one size']
        else: sizes = get_sizes(soup, category)
        # получаю пикчи
        images = get_images(soup)
        if len(sizes) == 0 or len(sizes) == 0: return
        if category == 'Верхняя одежда ': category = 'Одежда'
        return {
            'id': round(random.uniform(1000000000, 9999999999)),
            'age': 'Взрослый',
            'benefit': oldprice - price,
            'brand': brand,
            'brandCountry': brand_country,
            'category': category,
            'categoryT': get_transliterate(category),
            'color': color,
            'country': country,
            'delivery': ['ru'],
            'deliveryPrice': False,
            'description': False,
            'gender': gender,
            'name': name,
            'info': info,
            'installment': False,
            'images': images,
            'link': link,
            'oldprice': oldprice,
            'pp': 'advcake',
            'price': price,
            'sale': sale,
            'season': season,
            'shop': 'lgcity',
            'sizes': sizes,
            'style': style,
            'structure': structure,
            'subcategory': subcategory,
            'subcategoryT': get_transliterate(subcategory)
        }
    except:
        print(f'{link} НЕ собран!'.encode('utf-8'))
        return
