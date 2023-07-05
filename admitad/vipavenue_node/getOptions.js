// men https://vipavenue.ru/sale/mens/?brands=632397,37,68,69,1174146,90,118,122,133,594271,608081,151,156,1194532,221,250,261,267,275,291,328,356,247491,1036095,388,2022,448,489,497,501,507,619,631,641,2028,247493,696,709,720,723,737,755,782,908,934,951,956,986,991,730
// women https://vipavenue.ru/sale/womens/?brands=632397,37,68,69,90,118,122,133,594271,608081,151,156,250,261,267,275,291,356,247491,1036095,388,2022,448,489,497,501,507,619,631,641,2028,247493,696,709,720,723,737,755,782,908,934,951,991,632400,901997,87,265,481,1036101,618,947744,1184125,730,896204,632395,40075,1105191,869,870,891,892,931,40061,963
// product https://vipavenue.ru/product/1350598-pulover-kashemirovyy-brunello-cucinelli/

module.exports = function getOptions(gender, productCode) {
  const menGender = [36360, 52366];
  const menBrands = [
    632397, 37, 68, 69, 1174146, 90, 118, 122, 133, 594271, 608081, 151, 156,
    1194532, 221, 250, 261, 267, 275, 291, 328, 356, 247491, 1036095, 388, 2022,
    448, 489, 497, 501, 507, 619, 631, 641, 2028, 247493, 696, 709, 720, 723,
    737, 755, 782, 908, 934, 951, 956, 986, 991, 730,
  ];
  const womenGender = [36361, 52366];
  const womenBrands = [
    632397, 37, 68, 69, 90, 118, 122, 133, 594271, 608081, 151, 156, 250, 261,
    267, 275, 291, 356, 247491, 1036095, 388, 2022, 448, 489, 497, 501, 507,
    619, 631, 641, 2028, 247493, 696, 709, 720, 723, 737, 755, 782, 908, 934,
    951, 991, 632400, 901997, 87, 265, 481, 1036101, 618, 947744, 1184125, 730,
    896204, 632395, 40075, 1105191, 869, 870, 891, 892, 931, 40061, 963,
  ];

  const genderOptions = [
    "https://catalog.vipavenue.ru/api/products/get-list",
    {
      where: {
        sections: [],
        section_path: "",
        genders: gender === "men" 
          ? menGender 
          : womenGender,
        brands: gender === "men" 
          ? menBrands 
          : womenBrands,
        colors: [],
        sizes: [],
        is_new_collection: false,
        is_sale: true,
        is_new: false,
        is_red: false,
        selection_id: null,
        prevent_dynamic: ["is_sale"],
      },
      relations: [
        "media_files_small",
        "offers.size",
        "offers.available_rests",
        "brand",
        "contractor",
      ],
      page: "2",
      order_by: "merchandising",
      cache_tll: 600,
      platform_type: "desktop_site",
      site_gender_id: 36360,
      site_location_id: 36810,
    },
    {
      headers: {
        "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
        Connection: "keep-alive",
        Cookie:
          "session=h8Pih2RKQn9t8wvlt9vKyfnFC6Z5HUwMP7As8zIH; tmr_lvid=5a8eb2858de90dc7834f00cd1ee1d314; tmr_lvidTS=1687832933041; _gid=GA1.2.612671979.1687832933; _ym_uid=1687832933757338503; _ym_d=1687832933; adspire_uid=AS.771645120.1687832933; _ym_isad=1; _ym_visorc=w; _ga=GA1.2.1941672101.1687832933; _dc_gtm_UA-18568873-9=1; _ga_KXB8Z0CNHS=GS1.1.1687832932.1.1.1687832997.56.0.0",
        Origin: "https://vipavenue.ru",
        Referer: "https://vipavenue.ru/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
      },
    },
  ];
  genderOptions[1].page = 1;

  const productOptions = [
    "https://catalog.vipavenue.ru/api/products/get",
    {
      where: {
        code: productCode,
      },
      relations: [
        "offers.size",
        "media_files",
        "size_chart_for_user",
        "colors",
        "country",
        "gender",
        "offers.available_rests",
        "brand",
      ],
      platform_type: "desktop_site",
      site_gender_id: 36360,
      site_location_id: 36810,
    },
    {
      headers: {
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          'Connection': 'keep-alive',
          'Cookie': 'session=h8Pih2RKQn9t8wvlt9vKyfnFC6Z5HUwMP7As8zIH; tmr_lvid=5a8eb2858de90dc7834f00cd1ee1d314; tmr_lvidTS=1687832933041; _ym_uid=1687832933757338503; _ym_d=1687832933; adspire_uid=AS.771645120.1687832933; _gid=GA1.2.976563269.1688206428; _ym_isad=1; _ym_visorc=b; _dc_gtm_UA-18568873-9=1; _ga=GA1.2.1941672101.1687832933; _ga_KXB8Z0CNHS=GS1.1.1688206427.12.1.1688207015.51.0.0',
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
    },
  ];

  return productCode
  ? productOptions
  : genderOptions

};
