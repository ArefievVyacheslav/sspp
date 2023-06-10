import requests
import time

cookies = {
    'PHPSESSID': 'e9SZWhUVhjtppeXdAzPhOu5IqpRAHp3l',
    'BITRIX_SM_prm_no_new_site': '1',
    'BITRIX_SM_SALE_UID': '145520844',
    'BITRIX_SM_LOCATION_CONFIRMED': '1',
    'BITRIX_SM_prm_no_new_site_june': '1',
    'BITRIX_SM_GENDER': 'mens',
    'BITRIX_SM_catalog': '20',
    'BITRIX_SM_sorting': 'stylist',
    'modal_offer_authorisation_count_view_page': '1',
    'modal_ere_count_view_page': '1',
    'session': 'iwrsdPSqo7CowYDPd2DFSntURPaROO4XLi7szSt2',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    # 'Cookie': 'PHPSESSID=e9SZWhUVhjtppeXdAzPhOu5IqpRAHp3l; BITRIX_SM_prm_no_new_site=1; BITRIX_SM_SALE_UID=145520844; BITRIX_SM_LOCATION_CONFIRMED=1; BITRIX_SM_prm_no_new_site_june=1; BITRIX_SM_GENDER=mens; BITRIX_SM_catalog=20; BITRIX_SM_sorting=stylist; modal_offer_authorisation_count_view_page=1; modal_ere_count_view_page=1; session=iwrsdPSqo7CowYDPd2DFSntURPaROO4XLi7szSt2',
    'DNT': '1',
    'Origin': 'https://vipavenue.ru',
    'Referer': 'https://vipavenue.ru/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"',
}

brands = ["ADIDAS&PARLEY","ALEXANDER MCQUEEN","ARMANI","ARMANI  COLLEZIONI","BALDININI","BALMAIN","BARRACUDA","BIKKEMBERGS",
          "BILLIONAIRE","BOGNER","BOGNER FIRE + ICE","BOSS","BRIONI","BRUNELLO CUCINELLI","CALVIN KLEIN","CORNELIANI",
          "DEREK ROSE","DIRK BIKKEMBERGS","DOLCE & GABBANA","DSQUARED2","EMPORIO ARMANI","FALKE","FRANKIE MORELLO",
          "FURLA","GIANFRANCO FERRE","GIORGIO ARMANI","HUGO","ICEBERG","JOHN RICHMOND","JUST CAVALLI","KARL LAGERFELD","KENZO",
          "MICHAEL MICHAEL KORS","MONCLER","MOSCHINO","OFF-WHITE","PALM ANGELS","PAUL & SHARK","PHILIPP PLEIN","PLEIN SPORT",
          "POLO RALPH LAUREN","PREMIATA","RALPH LAUREN","ROBERTO CAVALLI","TOM FORD","VALENTINO","VERSACE","VIADESTE",
          "Y-3","YOHJI YAMAMOTO","ALEXANDER TEREKHOV","ALEXANDER WANG","BALENCIAGA","DKNY","JIMMY CHOO",
          "MCQ","MICHAEL KORS","P.A.R.O.S.H.","PAROSH","PRADA","RED VALENTINO","REEBOK VB","VASSA&CO","VASSA&CO PIN CODE"
          "STELLA MCCARTNEY","STELLA MCCARTNEY SPORT","TEREKHOV","TEREKHOV GIRL","UGG AUSTRALIA", "VERSACE JEANS COUTURE","VICTORIA BECKHAM"]

def get_product_links_2 (gender):
    if gender == 'men':
        json_data = {
            'where': {
                'sections': [],
                'section_path': '',
                'genders': [
                    36360,
                    52366,
                ],
                'brands': [],
                'colors': [],
                'sizes': [],
                'is_new_collection': False,
                'is_sale': True,
                'is_new': False,
                'is_red': False,
                'selection_id': None,
                'prevent_dynamic': [
                    'is_sale',
                ],
            },
            'relations': [
                'media_files_small',
                'offers.size',
                'offers.available_rests',
                'brand',
                'contractor',
            ],
            'page': '1',
            'order_by': 'merchandising',
            'cache_tll': 600,
            'platform_type': 'desktop_site',
            'site_gender_id': 36360,
            'site_location_id': 37570,
        }
    else:
        json_data = {
            'where': {
                'sections': [],
                'section_path': '',
                'genders': [
                    36361,
                    52366,
                ],
                'brands': [],
                'colors': [],
                'sizes': [],
                'is_new_collection': False,
                'is_sale': True,
                'is_new': False,
                'is_red': False,
                'selection_id': None,
                'prevent_dynamic': [
                    'is_sale',
                ],
            },
            'relations': [
                'media_files_small',
                'offers.size',
                'offers.available_rests',
                'brand',
                'contractor',
            ],
            'page': 1,
            'order_by': 'merchandising',
            'cache_tll': 600,
            'platform_type': 'desktop_site',
            'site_gender_id': 36361,
            'site_location_id': 37570,
        }
    res = requests.post('https://catalog.vipavenue.ru/api/products/get-list', cookies=cookies, headers=headers,
                        json=json_data)
    data = res.json().get('data')
    page_count = int(res.json().get('pagination').get('total_pages'))
    links = []
    for url in data:
        brand = url.get('brand').get('name')
        if brand in brands: links.append('https://vipavenue.ru' + url.get('url'))

    for page in range(1, page_count):
        time.sleep(2)
    # for page in range(1, 2):
        json_data['page'] = str(page + 1)
        res_other = requests.post('https://catalog.vipavenue.ru/api/products/get-list', cookies=cookies,
                                  headers=headers,
                                  json=json_data)
        data_other = res_other.json().get('data')
        for url in data_other:
            brand_other = url.get('brand').get('name')
            if brand_other in brands: links.append('https://vipavenue.ru' + url.get('url'))

        print('page', page, 'links', len(links))

    return links
