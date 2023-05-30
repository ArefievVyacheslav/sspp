import re


def get_sizes(soup, brand, category):
    sizes = []
    sizes_proto = soup.find_all('button', class_=re.compile('size_button__'))
    for size in sizes_proto:
        disabled = False
        for class_tag in size['class']:
            if  'size_button_disabled__' in class_tag: disabled = True
        if not disabled:
            sizes.append(size.find('div', re.compile('size_second__')).text)
        #     try:
        #         if category == 'Обувь' and (brand == 'ADIDAS' or brand == 'MICHAEL KORS'
        #                                     or brand == 'LACOSTE' or brand == 'RALPH LAUREN'
        #                                     or brand == 'EMPORIO ARMANI' or brand == 'KEDS' or brand == 'PUMA'):
        #             sizes.append(size.find('label').text.strip()[:2])
        #         else: sizes.append(size.find('label').find('span').text.strip())
        #     except: sizes.append(size.find('label').text.strip())
    return sizes