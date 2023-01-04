import re


def get_categories(soup):
    global category, subcategory
    name = soup.find('span', id=re.compile('breadcrumbs-last-item')).text
    breadcrumbs = soup.find_all('a', class_=re.compile('breadcrumbs__item'))
    for idx, breadcrumb in enumerate(breadcrumbs):
        if idx == len(breadcrumbs) - 1: subcategory = breadcrumb.get('title')
        if idx == len(breadcrumbs) - 2: category = breadcrumb.get('title')
    if category == 'Нижнее белье':
        category = 'Одежда'
        subcategory = 'Нижнее белье'
    return {
        'name': name,
        'category': category,
        'subcategory': subcategory
    }