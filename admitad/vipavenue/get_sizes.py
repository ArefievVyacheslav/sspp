import re

def get_sizes(soup):
    sizes_proto = soup.find_all('script')
    script_arr = str(sizes_proto).split(',')
    sizes_arr = []
    for idx, test in enumerate(script_arr):
        if 'name_in_list:"' in test and 'нет в наличии' not in script_arr[idx - 1]:
            if ' | ' in script_arr[idx - 1]: sizes_arr.append(script_arr[idx - 1].split(' | ')[0].replace('name:"INT ', '').replace('name:"JNS ', '').replace('name:"IT ', '').replace('name:"GR ', '').replace('name:"NUM ', '').replace('name:"NSS ', '').replace('name:"TRS ', '').replace('name:"US ', '').replace('name:"FR ', '').replace('\u002F', '/').replace('name:"UK ', '').replace('name:"BS0 ', ''))
            else: sizes_arr.append(
                    test.replace('name_in_list:"', '').replace('"', '').replace('XXXL', '3XL').replace('XXL', '2XL').replace('name:"JNS ', '').replace('name:"IT ', '').replace('name:"GR ', '').replace('name:"NUM ', '').replace('name:"NSS ', '').replace('name:"TRS ', '').replace('name:"US ', '').replace('name:"FR ', '').replace('\u002F', '/').replace('name:"UK ', '').replace('name:"BS0 ', '')
                )

    return sizes_arr

