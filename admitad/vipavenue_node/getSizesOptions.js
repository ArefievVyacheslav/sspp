// Для любого товара найти запрос get-size-table/ и скопировать как курл

module.exports = function getSizes(product_code) {
  const sizesOptions = [
    'https://catalog.vipavenue.ru/api/products/get-size-table/',
    {
      'where': {
        'product_code': product_code
      },
      'platform_type': 'desktop_site',
      'site_gender_id': 36361,
      'site_location_id': 36810
    },
    {
      headers: {
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'Connection': 'keep-alive',
        'Cookie': 'session=h8Pih2RKQn9t8wvlt9vKyfnFC6Z5HUwMP7As8zIH; tmr_lvid=5a8eb2858de90dc7834f00cd1ee1d314; tmr_lvidTS=1687832933041; _ym_uid=1687832933757338503; _ym_d=1687832933; adspire_uid=AS.771645120.1687832933; _gid=GA1.2.908498889.1688565762; _ym_isad=1; _ym_visorc=b; _dc_gtm_UA-18568873-9=1; _ga=GA1.2.1941672101.1687832933; _ga_KXB8Z0CNHS=GS1.1.1688749955.20.1.1688750336.3.0.0',
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
  return sizesOptions
};