// men https://www.brd.ru/discount?fgender=2&fcategory=625,695,641,425,500,466,191,91,69,287,533,1043,565,299,303,718,51,450,105,524,711,547,546,181,824,6,211,559,901,621,541,150,39,498,668,423,68,1040,1041,306,889,610,686,60,828,511,513,1285,536,1037,40,1060,635,623,629,56,38,83,20,475,545,149,518,315,313,463,634,1405,636,637,421,426,158,141,164,50,703,514,560,644,846,640,632,427,543,727,1287,865,537,915,1286,424,309,429,614,3,584,581,428,551,1167,347,844,845,460,46,471&fbrand=182,192,52,89&page=1
// women https://www.brd.ru/discount?fgender=3&fcategory=625,695,641,425,500,466,191,91,69,287,533,1043,565,299,303,718,51,450,105,524,711,547,546,181,824,6,211,559,901,621,541,150,39,498,668,423,68,1040,1041,306,889,610,686,60,828,511,513,1285,536,1037,40,1060,635,623,629,56,38,83,20,475,545,149,518,315,313,463,634,1405,636,637,421,426,158,141,164,50,703,514,560,644,846,640,632,427,543,727,1287,865,537,915,1286,424,309,429,614,3,584,581,428,551,1167,347,844,845,460,46,471&fbrand=182,192,52,89&page=1
// product https://www.brd.ru/product/eqytj03272-kvj0-muzhskaya-snoubordicheskaya-kurtka-in-the-hood

module.exports = function getOptions (gender, page, productLink) {

  gender === 'men'
    ? gender = 2
    : gender = 3

  const genderOptions = [`https://www.brd.ru/discount?fgender=${gender}&fcategory=625,695,641,425,500,466,191,91,69,287,533,1043,565,299,303,718,51,450,105,524,711,547,546,181,824,6,211,559,901,621,541,150,39,498,668,423,68,1040,1041,306,889,610,686,60,828,511,513,1285,536,1037,40,1060,635,623,629,56,38,83,20,475,545,149,518,315,313,463,634,1405,636,637,421,426,158,141,164,50,703,514,560,644,846,640,632,427,543,727,1287,865,537,915,1286,424,309,429,614,3,584,581,428,551,1167,347,844,845,460,46,471&fbrand=182,192,52,89&page=${page}`, 
    {
    headers: {
        'authority': 'www.brd.ru',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': 'newbie=1; cookie_test=please_accept_for_session; osCsid=5svvlpn70gqvuqp5ibr45kmma6; tracking_id=1230353938; _gcl_au=1.1.1875979608.1693144093; _gid=GA1.2.1041979825.1693144093; _ym_uid=1693144093642840943; _ym_d=1693144093; _ga_cid=1628122596.1693144093; tmr_lvid=7c339347b7de643caf0a9a04c97a1585; tmr_lvidTS=1693144093109; mindboxDeviceUUID=ef80e7c5-7315-4e64-b0fb-98179722a6c9; directCrm-session=%7B%22deviceGuid%22%3A%22ef80e7c5-7315-4e64-b0fb-98179722a6c9%22%7D; _userGUID=0:llti9zlp:5hPLEP2CGAsAjnrvzGWCZMKXpdni25pz; tt_deduplication_cookie=adm; tt_deduplication_cookie=adm; tt_deduplication_cookie=adm; _ga_J7RT114606=deleted; proskater_cookie=manFlag%3A1%2CindexProductsShowPopup%3A2%2C; admitad_uid=c90d2fc8a0b4043ef4761937f2061c3b; popup_500_5day=1; tagtag_aid=c90d2fc8a0b4043ef4761937f2061c3b; tagtag_aid=c90d2fc8a0b4043ef4761937f2061c3b; tagtag_aid=c90d2fc8a0b4043ef4761937f2061c3b; metka_last=admitad%2F442763%2F04-09-23%2F16%3A45; metka_source=admitad%2Fcpa%2F442763%2F%2F04-09-23%2F16%3A45; digi_uc=W1sidiIsIjEzNjA1MTMiLDE2OTM4OTczMzE0NzddLFsidiIsIjEzNjA1MTIiLDE2OTM4OTczMjQ2OTRdLFsidiIsIjEzNjc2MzEiLDE2OTM4OTczMzc0MjVdLFsidiIsIjEyNDY1MjQiLDE2OTM4MzU4NDc1ODRdLFsidiIsIjEzMzEzNzEiLDE2OTM4MzU1OTI1ODBdLFsidiIsIjEzNjA1ODgiLDE2OTM4MzU1NzM3NDBdLFsidiIsIjEzMzA4OTAiLDE2OTM4MzU1Njc4NjddLFsidiIsIjEzMzU2OTgiLDE2OTM2MzAzMTE1MjddLFsidiIsIjEzMzU2NzkiLDE2OTM2MzAyODE1MjVdLFsidiIsIjEzMTAyNDEiLDE2OTM2MzAyNzgzNThdXQ==; product_id_viewed=1360513%2C1367631%2C1360512%2C1331371%2C1246524%2C1346093%2C1357509%2C1335679%2C1356071%2C1317205%2C1335698%2C1378581%2C1335766%2C1362664%2C1360585%2C1328705%2C1376879%2C1329548%2C1337124; _ym_isad=1; _ym_visorc=w; session_time=169944.36399999994; session_timer_104054=1; _gat=1; _gat_UA-223653080-1=1; _ga=GA1.1.1628122596.1693144093; tmr_detect=1%7C1693920654713; _ga_WE2P5J4ML1=GS1.2.1693918847.30.1.1693920654.60.0.0; _ga_DLMCXM7FWH=GS1.1.1693918846.37.1.1693920663.0.0.0; was_called_in_current_session_104054=1; _ga_J7RT114606=GS1.1.1693918847.36.1.1693920669.0.0.0',
        'referer': 'https://www.brd.ru/discount?fgender=2&fbrand=182%2C192%2C52%2C89&page=2',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest'
    }},
    {responseType: "arraybuffer"}
    ]

  const productOptions = ['https://www.brd.ru/product/eqytj03272-kvj0-muzhskaya-snoubordicheskaya-kurtka-in-the-hood', 
    {
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
    }},
    {responseType: "arraybuffer"}
    ]
  productOptions[0] = productLink

  return productLink
    ? productOptions
    : genderOptions
}