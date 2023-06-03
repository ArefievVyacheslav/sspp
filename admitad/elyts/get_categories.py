import re


def get_categories(soup):
    global category, subcategory
    brand = soup.find('span', { 'itemprop': 'brand' }).text.strip()
    if brand == 'MICHAEL MICHAEL KORS': brand = 'MICHAEL KORS'
    if brand == 'BOGNER FIRE + ICE': brand = 'BOGNER'
    if brand == 'CK PERFORMANCE': brand = 'CALVIN KLEIN PERFORMANCE'
    try:
        breadcrumbs = soup.find('nav', class_=re.compile('col-12 breadcrumbs')).find_all('a', class_='current')
    except:
        breadcrumbs = soup.find('nav', class_=re.compile('col-12 breadcrumbs')).find_all('a')
    category = 'Аксессуары'
    for bread in breadcrumbs:
        if bread.text == 'Одежда': category = 'Одежда'
        if bread.text == 'Обувь': category = 'Обувь'
    subcategory = breadcrumbs[-1].text
    if 'ые' in subcategory: subcategory = breadcrumbs[-2].text
    name = soup.find('h1').text
    return {
        'brand': brand,
        'name': name,
        'category': category,
        'subcategory': subcategory.replace(' ', '')
    }