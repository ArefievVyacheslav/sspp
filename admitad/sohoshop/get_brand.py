import re
def get_brand(soup):
    name = soup.find('div', re.compile('title_name__')).text
    brand = soup.find('a', re.compile('title_link__')).text.strip().upper()
    name = name + ' ' + brand
    name = name.replace('Фуфайка (Футболка)', 'Футболка')
    # if brand == '': brand = soup.find('h1', class_='product-card-main__title').find('a').text.strip().upper()
    if brand == 'MICHAEL MICHAEL KORS': brand = 'MICHAEL KORS'
    if brand == 'LAUREN RALPH LAUREN': brand = 'RALPH LAUREN'
    return { 'brand': brand, 'name': name }
