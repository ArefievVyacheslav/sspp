import re

def get_sizes(soup):
    sizes_proto = soup.find_all('script')
    # sizes_arr_proto = sizes_proto[-2].text.split('\n')
    sizes_arr_proto = sizes_proto[-2].text.split('texelSizes.push(')
    sizes_arr_proto = [part for part in sizes_arr_proto if 'name' in part]
    sizes_arr_proto = [part for part in sizes_arr_proto if "available': false" not in part]
    sizes_arr_proto_prew = []
    for size_proto in sizes_arr_proto:
        size_proto = size_proto.split('\n')
        size_proto = [part for part in size_proto if "name" in part]
        for size_proto_2 in size_proto:
            sizes_arr_proto_prew.append(size_proto_2)
    sizes_arr = []
    for el in sizes_arr_proto_prew:
        if 'INT' in el:
            sizes_arr.append(el.split(' |')[0].split(' ')[-1].replace('XXXL', '3XL').replace('XXL', '2XL'))
    if len(sizes_arr) == 0:
        for el in sizes_arr_proto_prew:
            if 'name' in el: sizes_arr.append(el.replace("'name': '", '').replace("',", '').strip().replace('XXXL', '3XL').replace('XXL', '2XL'))

    return sizes_arr

