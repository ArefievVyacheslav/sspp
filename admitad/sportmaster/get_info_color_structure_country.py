import re


def get_info_color_structure_country(soup):
    info_params = soup.find_all('div', class_=re.compile('card__info-list-item-key'))
    info_values = soup.find_all('div', class_=re.compile('card__info-list-item-val'))
    info = {}
    brand_country = False
    color = False
    country = False
    season = False
    structure = False
    style = False
    for idx in range(len(info_params)):
        try: info[info_params[idx].text.strip().replace(':', '')] = info_values[idx].text.strip()
        except: info = False
    if 'Страна бренда' in info:
        brand_country = info['Страна бренда'].split(', ')[0].upper()
        info['Страна бренда'] = info['Страна бренда'].upper()
    if 'Цвет' in info: color = info['Цвет'].split(', ')[0].lower()
    if 'Страна производства' in info: country = info['Страна производства'].upper()
    if 'Сезон' in info: season = info['Сезон']
    if 'Состав' in info:
        if ', ' in info['Состав']: structure = info['Состав'].split(', ')
        else: structure = [info['Состав']]
        del info['Состав']
    if 'Стиль' in info: style = info['Стиль']
    return {
        'info': info,
        'brand_country': brand_country,
        'color': color,
        'country': country,
        'season': season,
        'structure': structure,
        'style': style
    }