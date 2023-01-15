import re

def get_sizes(soup):
    sizes_proto = soup.find_all('script')
    sizes_arr_proto = sizes_proto[-2].text.split('\n')
    sizes_arr = []
    for el in sizes_arr_proto:
        if 'INT' in el:
            sizes_arr.append(el.split(' |')[0].split(' ')[-1])
    if len(sizes_arr) == 0:
        for el in sizes_arr_proto:
            if 'name' in el: sizes_arr.append(el.replace("'name': '", '').replace("',", '').strip())

    return sizes_arr

