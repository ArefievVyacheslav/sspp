import re


def get_info(soup):
    try: description = soup.find('div', class_=re.compile('product__card--accordion-content-text')).text.replace('. -', '. ').replace('-', '').strip()
    except: description = False
    info_params = soup.find('ul', class_="product__card--accordion-content-list").find_all('span', class_=re.compile('product__card--accordion-content-list-left'))
    info_values = soup.find('ul', class_="product__card--accordion-content-list").find_all('span', class_=re.compile('product__card--accordion-content-list-right'))
    info = {}
    color = False
    country = False
    structure = False
    for idx in range(len(info_params)):
        try:
            if idx != 0 and info_values[idx].find('span').text.strip() != '':
                info[info_params[idx].find('span').text.strip()] = info_values[idx].find('span').text.strip()
        except: info = False
    if 'Цвет' in info: color = info['Цвет'].split(', ')[0].replace('Деним, ', '').replace('ё', 'е').lower()
    if 'Страна производства' in info: country = info['Страна производства'].upper()
    if 'Состав' in info:
        if ', ' in info['Состав']: structure = info['Состав'].replace('. Состав 2: ', ', ').split(', ')
        else: structure = [info['Состав']]
        del info['Состав']
    return {
        'info': info,
        'color': color,
        'country': country,
        'description': description,
        'structure': structure
    }