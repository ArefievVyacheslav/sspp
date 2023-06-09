import re


def get_categories(soup):
    global category, subcategory
    brand = soup.find('a', class_=re.compile('product__card--accordion-item-text-link')).text.strip()
    if brand == 'MICHAEL MICHAEL KORS': brand = 'MICHAEL KORS'
    if brand == 'BOGNER FIRE + ICE': brand = 'BOGNER'
    if brand == 'CK PERFORMANCE': brand = 'CALVIN KLEIN PERFORMANCE'
    name = soup.find('div', class_=re.compile('product__card--title')).text.replace(brand, '').strip() + ' ' + brand
    breadcrumbs = soup.find('ul', class_=re.compile('product__top-list')).find_all('a')
    category = breadcrumbs[2].text
    subcategory = breadcrumbs[-1].text
    if 'ые' in subcategory or 'ие' in subcategory: subcategory = breadcrumbs[-2].text
    return {
        'brand': brand,
        'name': name,
        'category': category,
        'subcategory': subcategory
    }
