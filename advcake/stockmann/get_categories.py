import re


def get_categories(soup):
    breadcrumbs = soup.find_all('a', class_=re.compile('breadcrumb_link__'))
    if breadcrumbs[1].text.strip() != 'Детям':
        if len(breadcrumbs) >= 4:
            age = 'Взрослый'
            gender = breadcrumbs[1].text.strip()
            if gender == 'Женщинам': gender = 'Женский'
            if gender == 'Мужчинам': gender = 'Мужской'
            category = breadcrumbs[2].text.strip()
            subcategory = breadcrumbs[3].text.strip()
            if len(breadcrumbs) >= 5:
                if subcategory == 'Верхняя одежда' or subcategory == 'Домашняя одежда':
                    subcategory = breadcrumbs[4].text.strip()
                if ' и ' in subcategory and subcategory != 'Сорочки и рубашки':
                    subcategory = breadcrumbs[4].text.strip()
            if ' и ' in subcategory and len(breadcrumbs) >= 6:
                subcategory = breadcrumbs[5].text.strip()
            return {
                'age': age,
                'category': category,
                'gender': gender,
                'subcategory': subcategory
            }
        else: return False
    else:
        if len(breadcrumbs) >= 5:
            age = 'Детский'
            gender = breadcrumbs[2].text.strip()
            if gender == 'Девочкам': gender = 'Женский'
            if gender == 'Мальчикам': gender = 'Мужской'
            category = breadcrumbs[3].text.strip()
            subcategory = breadcrumbs[4].text.strip()
            if ' и ' in subcategory and len(breadcrumbs) >= 6:
                subcategory = breadcrumbs[5].text.strip()
            if ' и ' in subcategory and len(breadcrumbs) >= 7:
                subcategory = breadcrumbs[6].text.strip()
            return {
                'age': age,
                'category': category,
                'gender': gender,
                'subcategory': subcategory
            }
        else: return False