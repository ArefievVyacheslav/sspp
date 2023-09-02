// men https://elyts.ru/catalog/woman/sale/filter/brand-is-armani%20jeans-or-class%20cavalli-or-converse-or-diesel-or-dior-or-dolce%26gabbana-or-dr.%20martens-or-dsquared2-or-ea7-or-emporio%20armani-or-frankie%20morello-or-fred%20perry-or-furla-or-geox-or-gianfranco%20ferre-or-giorgio%20armani-or-gucci-or-jimmy%20choo-or-just%20cavalli-or-liu%20jo-or-mcq-or-moschino-or-moschino%20love-or-nina%20ricci-or-obey-or-off-white-or-p.a.r.o.s.h.-or-paco%20rabanne-or-palm%20angels-or-philippe%20model-or-replay-or-roberto%20cavalli-or-stella%20mccartney-or-the%20north%20face-or-tommy%20hilfiger-or-tommy%20jeans-or-valentino%20red-or-versace-or-versace%20collection-or-versace%20jeans%20couture/?PAGEN_1=2
// women https://elyts.ru/catalog/man/sale/filter/brand-is-alpha%20industries-or-armani%20jeans-or-billionaire-or-brioni-or-carhartt%20wip-or-clarks%20originals-or-converse-or-corneliani-or-diesel-or-dr.%20martens-or-dsquared2-or-ea7-or-emporio%20armani-or-emporio%20armani%20underwear-or-frankie%20morello-or-fred%20perry-or-geox-or-gianfranco%20ferre-or-giorgio%20armani-or-ice%20play-or-just%20cavalli-or-napapijri-or-off-white-or-palm%20angels-or-paul%20smith-or-philippe%20model-or-puma-or-ray%20ban-or-replay-or-roberto%20cavalli-or-saint%20laurent-or-stone%20island-or-strellson-or-the%20north%20face-or-tommy%20hilfiger-or-tommy%20jeans-or-versace-or-versace%20collection-or-versace%20jeans%20couture/?PAGEN_1=2
// product https://elyts.ru/product/pidjak-strellson-859279-pink/

module.exports = function getOptions (gender, page, productLink) {

    gender === 'men'
      ? gender = 2
      : gender = 3

  const genderOptions = [`https://www.brd.ru/discount?fgender=${gender}&fbrand=182,192,52,89`, {
    params: {
      'fgender': gender,
      'fbrand': '182,192,52,89',
      'page': '1',
      'ajax': '3'
    },
    headers: {
      'authority': 'www.brd.ru',
      'accept': 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      'cookie': 'newbie=1; cookie_test=please_accept_for_session; osCsid=5svvlpn70gqvuqp5ibr45kmma6; tracking_id=1230353938; _gcl_au=1.1.1875979608.1693144093; _gid=GA1.2.1041979825.1693144093; _ym_uid=1693144093642840943; _ym_d=1693144093; _ym_isad=1; _ga_cid=1628122596.1693144093; tmr_lvid=7c339347b7de643caf0a9a04c97a1585; tmr_lvidTS=1693144093109; mindboxDeviceUUID=ef80e7c5-7315-4e64-b0fb-98179722a6c9; directCrm-session=%7B%22deviceGuid%22%3A%22ef80e7c5-7315-4e64-b0fb-98179722a6c9%22%7D; _userGUID=0:llti9zlp:5hPLEP2CGAsAjnrvzGWCZMKXpdni25pz; admitad_uid=1e16e08df6e4352abef675a6724f2001; popup_500_5day=1; tagtag_aid=1e16e08df6e4352abef675a6724f2001; tagtag_aid=1e16e08df6e4352abef675a6724f2001; tagtag_aid=1e16e08df6e4352abef675a6724f2001; tt_deduplication_cookie=adm; tt_deduplication_cookie=adm; tt_deduplication_cookie=adm; proskater_cookie=manFlag%3A2%2C; product_id_viewed=1337124; digi_uc=W1sidiIsIjEzMzcxMjQiLDE2OTMxNTM3OTI5NTJdXQ==; session_timer_104054=1; _ym_visorc=w; was_called_in_current_session_104054=1; session_time=1882.1450000000002; seconds_on_page_104054=24; pages_cnt=2; _ga=GA1.1.1628122596.1693144093; _ga_WE2P5J4ML1=GS1.2.1693188063.3.1.1693188087.36.0.0; tmr_detect=0%7C1693188090609; _ga_DLMCXM7FWH=GS1.1.1693188062.3.1.1693188971.0.0.0; _ga_J7RT114606=GS1.1.1693188062.3.1.1693188971.0.0.0',
      'referer': 'https://www.brd.ru/discount?fgender=3&fbrand=182%2C192%2C52%2C89&page=2',
      'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
      'x-requested-with': 'XMLHttpRequest'
    }
  },
  {responseType: "arraybuffer"}
    ]
//   genderOptions[1]['page'] = 1

  const productOptions = ['https://www.brd.ru/product/eqytj03272-kvj0-muzhskaya-snoubordicheskaya-kurtka-in-the-hood', {
    headers: {
        'authority': 'www.brd.ru',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': 'newbie=1; cookie_test=please_accept_for_session; osCsid=5svvlpn70gqvuqp5ibr45kmma6; tracking_id=1230353938; _gcl_au=1.1.1875979608.1693144093; _gid=GA1.2.1041979825.1693144093; _ym_uid=1693144093642840943; _ym_d=1693144093; _ym_isad=1; _ga_cid=1628122596.1693144093; tmr_lvid=7c339347b7de643caf0a9a04c97a1585; tmr_lvidTS=1693144093109; mindboxDeviceUUID=ef80e7c5-7315-4e64-b0fb-98179722a6c9; directCrm-session=%7B%22deviceGuid%22%3A%22ef80e7c5-7315-4e64-b0fb-98179722a6c9%22%7D; _userGUID=0:llti9zlp:5hPLEP2CGAsAjnrvzGWCZMKXpdni25pz; admitad_uid=1e16e08df6e4352abef675a6724f2001; popup_500_5day=1; tagtag_aid=1e16e08df6e4352abef675a6724f2001; tagtag_aid=1e16e08df6e4352abef675a6724f2001; tagtag_aid=1e16e08df6e4352abef675a6724f2001; tt_deduplication_cookie=adm; tt_deduplication_cookie=adm; tt_deduplication_cookie=adm; proskater_cookie=manFlag%3A2%2C; product_id_viewed=1337124; digi_uc=W1sidiIsIjEzMzcxMjQiLDE2OTMxNTM3OTI5NTJdXQ==; session_timer_104054=1; _ym_visorc=w; was_called_in_current_session_104054=1; session_time=1882.1450000000002; seconds_on_page_104054=24; pages_cnt=2; _ga=GA1.1.1628122596.1693144093; _ga_WE2P5J4ML1=GS1.2.1693188063.3.1.1693188087.36.0.0; tmr_detect=0%7C1693188090609; _ga_DLMCXM7FWH=GS1.1.1693188062.3.1.1693188971.0.0.0; _ga_J7RT114606=GS1.1.1693188062.3.1.1693188971.0.0.0',
        'referer': 'https://www.brd.ru/discount?fgender=3&fbrand=182%2C192%2C52%2C89&page=2',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest'
    }
  },
  {responseType: "arraybuffer"}
    ]
  productOptions[0] = productLink

  return productLink
    ? productOptions
    : genderOptions

}
