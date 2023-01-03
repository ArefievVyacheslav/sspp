import re


def get_sizes(soup, brand, category):
    sizes = []
    sizes_proto = soup.find_all('div', class_=re.compile('product-card-main__size-item'))
    for size in sizes_proto:
        if not size.find('input').has_attr('disabled'):
            try:
                if category == 'Обувь' and (brand == 'ADIDAS' or brand == 'MICHAEL KORS'
                                            or brand == 'LACOSTE' or brand == 'RALPH LAUREN'
                                            or brand == 'EMPORIO ARMANI' or brand == 'KEDS' or brand == 'PUMA'):
                    sizes.append(size.find('label').text.strip()[:2])
                else: sizes.append(size.find('label').find('span').text.strip())
            except: sizes.append(size.find('label').text.strip())
    return sizes