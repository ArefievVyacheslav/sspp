import re


def get_categories(soup):
    global category, subcategory
    brand = soup.find('a', class_=re.compile('product__title_brand')).text.strip()
    if brand == 'MICHAEL MICHAEL KORS': brand = 'MICHAEL KORS'
    if brand == 'BOGNER FIRE + ICE': brand = 'BOGNER'
    if brand == 'CK PERFORMANCE': brand = 'CALVIN KLEIN PERFORMANCE'
    name = soup.find('h1', class_=re.compile('product__title')).text.replace(brand, '').strip() + ' ' + brand
    breadcrumbs = soup.find('ol', class_=re.compile('breadcrumb')).find_all('a')
    category = breadcrumbs[2].text
    subcategory = breadcrumbs[-1].text
    if 'ые' in subcategory or 'ие' in subcategory: subcategory = breadcrumbs[-2].text
    return {
        'brand': brand,
        'name': name,
        'category': category,
        'subcategory': subcategory
    }