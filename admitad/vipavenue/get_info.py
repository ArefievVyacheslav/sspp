import re


def get_info(soup):
    description = soup.find('div', class_=re.compile('product-desc')).find('p').text.replace('. -', '. ').replace('-', '').strip()
    info_params = soup.find_all('span', class_=re.compile('dpd-l-bg'))
    info_values = soup.find_all('span', class_=re.compile('pdp-r'))
    info = {}
    color = False
    country = False
    structure = False
    for idx in range(len(info_params)):
        try: info[info_params[idx].text.strip().replace(':', '')] = info_values[idx].text.strip()
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