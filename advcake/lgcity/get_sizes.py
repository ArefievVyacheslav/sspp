import re

def get_sizes(soup, category):
    sizes = []
    sizes_proto = soup.find_all('div', class_=re.compile('card__popup-size-input-text'))
    sizes_proto_td = soup.find_all('td', class_='card__popup-td')
    if len(sizes_proto) == 1 and category != 'Нижнее белье'\
            and sizes_proto_td[0].text == 'Международный (INT):':
        sizes.append(sizes_proto_td[1].text)
    else:
        for size in sizes_proto:
            m = re.search(r"\(([A-Za-z0-9_]+)\)", size.text)
            sizes.append(m.group(1))
    return sizes