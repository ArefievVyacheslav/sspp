import re

def get_sizes(soup):
    sizes_arr = []
    sizes_proto = soup.find('div', class_=re.compile('full-size')).find_all('div', class_=re.compile('size-set'))
    for size_proto in sizes_proto:
        size = size_proto.find_all('div', 'size-row')[1].find_all('div', 'size-col')[0].text
        if size in sizes_arr: continue
        else: sizes_arr.append(size)
    return sizes_arr

