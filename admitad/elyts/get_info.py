import re


def get_info(soup):
    description = soup.find('div', class_=re.compile('bx_item_description')).text.strip()
    info_params = soup.find_all('div', class_=re.compile('b-title'))
    info_values = soup.find_all('div', class_=re.compile('b-value'))
    info = {}
    color = False
    country = False
    structure = False
    for idx in range(len(info_params)):
        try: info[info_params[idx].text.strip().replace(':', '')] = info_values[idx].text.strip()
        except: info = False
    if 'Цвет' in info: color = info['Цвет'].split(', ')[0].replace('ё', 'е').lower()
    if 'Страна производитель' in info: country = info['Страна производитель']
    if 'Состав' in info:
        if ', ' in info['Состав']: structure = info['Состав'].split(', ')
        else: structure = [info['Состав']]
        del info['Состав']
    return {
        'info': info,
        'color': color,
        'country': country,
        'description': description,
        'structure': structure
    }