import re


def get_info_color_structure_country(soup):
    info_params = soup.find_all('span', class_=re.compile('params_name__'))
    info_values = soup.find_all('span', class_=re.compile('params_value__'))
    info = {}
    color = False
    structure = False
    country = False
    for idx in range(len(info_params)):
        try:
            info[info_params[idx].text.strip()] = info_values[idx].text.strip()
            if (info_params[idx].text.strip() == 'Цвет'): color = info_values[idx].text.strip().split(', ')[0]
        except: info = False
    if 'Цвет' in info: country = info['Цвет'].split(', ')[0]
    if 'Страна' in info: country = info['Страна'].title()
    if 'Состав' in info:
        if ' - ' in info['Состав']: structure = info['Состав'].split(' - ')
        elif ', ' in info['Состав']: structure = info['Состав'].split(', ')
        elif ',' in info['Состав']: structure = info['Состав'].split(',')
        elif '; ' in info['Состав']: structure = info['Состав'].split('; ')
        elif ';' in info['Состав']: structure = info['Состав'].split(';')
        elif '|' in info['Состав']: structure = info['Состав'].split('|')
        else: structure = [info['Состав']]
        del info['Состав']
    return {
        'info': info,
        'color': color,
        'country': country,
        'structure': structure
    }