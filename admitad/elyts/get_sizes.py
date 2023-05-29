import re

def get_sizes(soup):
    sizes_arr = []
    try:
        sizes_proto = soup.find('div', class_=re.compile('full-size')).find_all('div', class_=re.compile('size-set'))
        for size_proto in sizes_proto:
            size = size_proto.find_all('div', 'size-row')[1].find_all('div', 'size-col')[0].text
            if size in sizes_arr: continue
            else: sizes_arr.append(size)

    except:
        sizes_proto = soup.find('div', class_=re.compile('b-size-select__pane')).find_all('option')
        for size_proto in sizes_proto:
            sizes_arr.append(size_proto.text.split(' / ')[1])

    return sizes_arr

