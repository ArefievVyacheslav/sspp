// men https://vipavenue.ru/sale/mens/?brands=632397,37,68,69,1174146,90,97,122,142,1194532,221,267,85,118,133,594271,608081,151,250,252,261,263,271,275,501,497,489,2022,448,388,409,1036095,247491,356,328,335,291,619,631,641,2028,247493,696,709,720,723,737,896204,755,816,908,925,934,951,986,991
// women https://vipavenue.ru/sale/womens/?brands=632397,37,68,69,90,118,122,133,594271,608081,151,156,250,261,267,275,291,356,247491,1036095,388,2022,448,489,497,501,507,619,631,641,2028,247493,696,709,720,723,737,755,782,908,934,951,991,632400,901997,87,265,481,1036101,618,947744,1184125,730,896204,632395,40075,1105191,869,870,891,892,931,40061,963,97,162,252,328,335,1194499,816,925
// product https://vipavenue.ru/product/1350598-pulover-kashemirovyy-brunello-cucinelli/

module.exports = function getOptions (gender, productCode) {

  const menOptions = [
    'https://catalog.vipavenue.ru/api/products/get-list',
    {
      'where': {
        'sections': [],
        'section_path': '',
        'genders': [
          36360,
          52366
        ],
        'brands': [
          632397,
          37,
          68,
          69,
          1174146,
          90,
          97,
          122,
          142,
          1194532,
          221,
          267,
          85,
          118,
          133,
          594271,
          608081,
          151,
          250,
          252,
          261,
          263,
          271,
          275,
          501,
          497,
          489,
          2022,
          448,
          388,
          409,
          1036095,
          247491,
          356,
          328,
          335,
          291,
          619,
          631,
          641,
          2028,
          247493,
          696,
          709,
          720,
          723,
          737,
          896204,
          755,
          816,
          908,
          925,
          934,
          951,
          986,
          991
        ],
        'colors': [],
        'sizes': [],
        'is_new_collection': false,
        'is_sale': true,
        'is_new': false,
        'is_red': false,
        'selection_id': null,
        'prevent_dynamic': [
          'is_sale'
        ],
        'products_query': null
      },
      'relations': [
        'media_files_small',
        'offers.size',
        'offers.available_rests',
        'brand',
        'contractor'
      ],
      'page': '2',
      'order_by': 'merchandising',
      'cache_tll': 600,
      'platform_type': 'desktop_site',
      'site_gender_id': 36360,
      'site_location_id': 37570
    },
    {
      headers: {
        'Accept-Language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'Connection': 'keep-alive',
        'Cookie': 'session=oMY9KpH8aWlWGDIXxac0maqRAljKRKfdKKTvlSRt',
        'DNT': '1',
        'Origin': 'https://vipavenue.ru',
        'Referer': 'https://vipavenue.ru/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"'
      }
    }
  ]
  menOptions[1].page = 1

  const womenOptions = [
    'https://catalog.vipavenue.ru/api/products/get-list',
    {
      'where': {
        'sections': [],
        'section_path': '',
        'genders': [
          36361,
          52366
        ],
        'brands': [
          632397,
          37,
          68,
          69,
          90,
          118,
          122,
          133,
          594271,
          608081,
          151,
          156,
          250,
          261,
          267,
          275,
          291,
          356,
          247491,
          1036095,
          388,
          2022,
          448,
          489,
          497,
          501,
          507,
          619,
          631,
          641,
          2028,
          247493,
          696,
          709,
          720,
          723,
          737,
          755,
          782,
          908,
          934,
          951,
          991,
          632400,
          901997,
          87,
          265,
          481,
          1036101,
          618,
          947744,
          1184125,
          730,
          896204,
          632395,
          40075,
          1105191,
          869,
          870,
          891,
          892,
          931,
          40061,
          963,
          97,
          162,
          252,
          328,
          335,
          1194499,
          816,
          925
        ],
        'colors': [],
        'sizes': [],
        'is_new_collection': false,
        'is_sale': true,
        'is_new': false,
        'is_red': false,
        'selection_id': null,
        'prevent_dynamic': [
          'is_sale'
        ],
        'products_query': null
      },
      'relations': [
        'media_files_small',
        'offers.size',
        'offers.available_rests',
        'brand',
        'contractor'
      ],
      'page': '2',
      'order_by': 'merchandising',
      'cache_tll': 600,
      'platform_type': 'desktop_site',
      'site_gender_id': 36361,
      'site_location_id': 37570
    },
    {
      headers: {
        'Accept-Language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'Connection': 'keep-alive',
        'Cookie': 'session=oMY9KpH8aWlWGDIXxac0maqRAljKRKfdKKTvlSRt',
        'DNT': '1',
        'Origin': 'https://vipavenue.ru',
        'Referer': 'https://vipavenue.ru/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"'
      }
    }
  ]
  womenOptions[1].page = 1

  const productOptions = [
    'https://catalog.vipavenue.ru/api/products/get-size-table/',
    {
      'where': {
        'product_code': productCode
      },
      'platform_type': 'desktop_site'
    },
    {
      headers: {
        'Accept-Language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'Connection': 'keep-alive',
        'Cookie': 'session=oMY9KpH8aWlWGDIXxac0maqRAljKRKfdKKTvlSRt',
        'DNT': '1',
        'Origin': 'https://vipavenue.ru',
        'Referer': 'https://vipavenue.ru/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"'
      }
    }
  ]

  return productCode
    ? productOptions
    : gender === 'men'
      ? menOptions
      : womenOptions

}
