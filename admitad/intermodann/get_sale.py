import re


def get_sale(soup):
    return soup.find('span', class_=re.compile('discount_block__')).text.strip()\
        .replace('-', '').replace('%', '')