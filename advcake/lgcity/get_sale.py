import re


def get_sale(soup):
    return soup.find('span', class_=re.compile('product-card-main__price-bagde')).find('span').text.strip()\
        .replace('-', '').replace('%', '')