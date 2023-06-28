// men https://stockmann.ru/category/59-muzhchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-diesel-or-dr_martens-or-emporio_armani-or-ea7-or-ecco-or-guess-or-geox-or-hugo-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lacoste-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-puma-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-ugg-or-versace_jeans_couture/available_online-online/has_discount-y/
// women https://stockmann.ru/sale/56-zhenshchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-coccinelle-or-diesel-or-dkny-or-dr_martens-or-dirk_bikkembergs-or-emporio_armani-or-ea7-or-ecco-or-furla-or-fila-or-guess-or-geox-or-gerry_weber-or-gerry_weber_edition-or-gerry_weber_casual-or-hugo-or-incanto-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lauren_ralph_lauren-or-liu_jo-or-lacoste-or-love_moschino-or-liujo_milano-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-moschino-or-michael_michael_kors-or-moschino_boutique-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-puma-or-roxy-or-stella_mccartney-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-tamaris-or-urban_tiger-or-ugg-or-versace_jeans_couture-or-vogue/available_online-online/has_discount-y/
// product https://stockmann.ru/product/5185937-mokasiny-iz-zamshi-boss/


module.exports = function getOptions (gender, productLink) {

    const menOptions = [
        'https://stockmann.ru/catalog-api/category/59-muzhchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-diesel-or-dr_martens-or-emporio_armani-or-ea7-or-ecco-or-guess-or-geox-or-hugo-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lacoste-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-puma-or-tommy_hilfiger-or-tom_tailor-or-tommy_jeans-or-trussardi-or-ugg-or-versace_jeans_couture/available_online-online/has_discount-y/',
      {
        params: {
            'page': '2'
          },
      },
      {
        headers: {
            'authority': 'stockmann.ru',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': 'spid=1686377032026_9f714026818952fbd998e9e812de16b7_9vjhbd48cr5im6pd; rrpvid=388210974187317; anonymous_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ODQxNzAwZTZiMzczNjIxMzA1ZDY4NiIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjg2Mzc4MjQwfQ.DQJErX2WyG1-ZFBWgmUkpSp8wy3yVAhPt0QbH0SXqR-6vUZCIO9zfQ6d3MpWigpNuJQXgQXaJ6ix3UUyaqAgmsLeEhp7htpolxqMOU4umMrQp0U0uU18Uj-jTg4Afu-f_cnUCTHxfb5KH2R9Fw1nYDHcfQfSAFIBNKL5IWRW-sefUCw5weXUphC5OW5BZtoLBExN3G0A91-lNZnSnQzcEjSi-5RifcBCgbuXDq2EXAoE6b43BMM2mlilTy3AdZIf3nOruo_EyW-J9Dzsm-n5n0DmDF5HZUcCV_tH6yqf0nmpCs5mKJ5Mzf_Dbk0ZxOOY02pVGy07EjBy3cDoWtpVr2VlMZNJKT7dV3pXk53tnBsxCtBBJtSOm9wp-VxcHTU97UFK7sh69qnegmTDzsfWGm5qJJ5ZbhWfb3H4P2N7M8qzocKWT_Bx-V95jzkyry7QZIsgyqJJNmC8BB5PP6rd4a2v5n5r-TCV6nuUBbxbt0_sXfvpG-1f3e3OK35MmTZGjb_vdnBNY6BvVJ0jE_He1FXiDESdPD7cMQniTxfQTpSF2pUhd_e6gk6u02y9aMHjpGppTh_AIb25GMpTO3b5o8tnNfEbKL7OBKSzFNDjz2pVDUHLT3m-mwU__8ErPSm0vBKQ8lT9B97aiJ8gyXQRbMBZIKOgQ20JcSeKe7gQ260; BITRIX_SM_CITY_NAME=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0; BITRIX_SM_CITY_SALE_LOCATION_ID=129; BITRIX_SM_LOCATION_GUID=0c5b2444-70a0-4932-980c-b4dc0d3f02b5; BITRIX_SM_DOMAIN_ID=1; tmr_lvid=8dbe3187a7eb4ea1d17e12f470faac00; tmr_lvidTS=1686378240199; _ym_uid=1686378240559249150; _ym_d=1686378240; rcuid=62e131a1d642940b637cbcd0; _gcl_au=1.1.302776653.1686378240; iap.uid=0d624f80744c410f8e5931fea6216161; flocktory-uuid=949e1139-0f29-4802-89ae-a43a4156419e-6; cto_bundle=6hI6I19qMTVjSXQ2bVJiRFElMkZ2OGI3dVFLa3NnREZGSng1a3FIUFBDemVoYzNGZTFjVUFRJTJCdCUyQmdndVNtJTJCbHBMTTBFRzJ0MWE3R3NVb0pkekxLTXZEb0Vlb0gycEJYdmpDcWJqNFIxc2ZlJTJCcEo2THJJNDBCY2dKaTBYJTJGV3NSSiUyRmVrazNRUXNhTmV4R29JY3hzQldzYWJhVzI5QSUzRCUzRA; spsc=1687278564675_85ce1388b3d8daa70eb598d0096754c9_a5476469b72f558bb72e6aae99c6a060; _ym_isad=1; _ym_visorc=w; _gid=GA1.2.1666721336.1687314480; _gat_UA-75724517-1=1; rr-testCookie=testvalue; tmr_detect=1%7C1687314610709; _ga=GA1.2.259447028.1686378240; _ga_51M9YTC352=GS1.1.1687314479.27.1.1687314615.39.0.0',
            'referer': 'https://stockmann.ru/category/59-muzhchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-diesel-or-dr_martens-or-emporio_armani-or-ea7-or-ecco-or-guess-or-geox-or-hugo-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lacoste-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-ugg-or-versace_jeans_couture/available_online-online/has_discount-y/',
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'x-api-version': '1.0.1',
            'x-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ODQxNzAwZTZiMzczNjIxMzA1ZDY4NiIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjg2Mzc4MjQwfQ.DQJErX2WyG1-ZFBWgmUkpSp8wy3yVAhPt0QbH0SXqR-6vUZCIO9zfQ6d3MpWigpNuJQXgQXaJ6ix3UUyaqAgmsLeEhp7htpolxqMOU4umMrQp0U0uU18Uj-jTg4Afu-f_cnUCTHxfb5KH2R9Fw1nYDHcfQfSAFIBNKL5IWRW-sefUCw5weXUphC5OW5BZtoLBExN3G0A91-lNZnSnQzcEjSi-5RifcBCgbuXDq2EXAoE6b43BMM2mlilTy3AdZIf3nOruo_EyW-J9Dzsm-n5n0DmDF5HZUcCV_tH6yqf0nmpCs5mKJ5Mzf_Dbk0ZxOOY02pVGy07EjBy3cDoWtpVr2VlMZNJKT7dV3pXk53tnBsxCtBBJtSOm9wp-VxcHTU97UFK7sh69qnegmTDzsfWGm5qJJ5ZbhWfb3H4P2N7M8qzocKWT_Bx-V95jzkyry7QZIsgyqJJNmC8BB5PP6rd4a2v5n5r-TCV6nuUBbxbt0_sXfvpG-1f3e3OK35MmTZGjb_vdnBNY6BvVJ0jE_He1FXiDESdPD7cMQniTxfQTpSF2pUhd_e6gk6u02y9aMHjpGppTh_AIb25GMpTO3b5o8tnNfEbKL7OBKSzFNDjz2pVDUHLT3m-mwU__8ErPSm0vBKQ8lT9B97aiJ8gyXQRbMBZIKOgQ20JcSeKe7gQ260'
        }
      }
    ]
    menOptions[1].params.page = 1

    const womenOptions = [
        'https://stockmann.ru/catalog-api/sale/56-zhenshchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-coccinelle-or-diesel-or-dkny-or-dr_martens-or-dirk_bikkembergs-or-emporio_armani-or-ea7-or-ecco-or-furla-or-fila-or-guess-or-geox-or-gerry_weber-or-gerry_weber_edition-or-gerry_weber_casual-or-hugo-or-incanto-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lauren_ralph_lauren-or-liu_jo-or-lacoste-or-love_moschino-or-liujo_milano-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-moschino-or-michael_michael_kors-or-moschino_boutique-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-puma-or-roxy-or-stella_mccartney-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-tamaris-or-urban_tiger-or-ugg-or-versace_jeans_couture-or-vogue/available_online-online/has_discount-y/',
      {
        params: {
            'page': '2'
          },
      },
      {
        headers: {
            'authority': 'stockmann.ru',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': 'spid=1686377032026_9f714026818952fbd998e9e812de16b7_9vjhbd48cr5im6pd; rrpvid=388210974187317; anonymous_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ODQxNzAwZTZiMzczNjIxMzA1ZDY4NiIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjg2Mzc4MjQwfQ.DQJErX2WyG1-ZFBWgmUkpSp8wy3yVAhPt0QbH0SXqR-6vUZCIO9zfQ6d3MpWigpNuJQXgQXaJ6ix3UUyaqAgmsLeEhp7htpolxqMOU4umMrQp0U0uU18Uj-jTg4Afu-f_cnUCTHxfb5KH2R9Fw1nYDHcfQfSAFIBNKL5IWRW-sefUCw5weXUphC5OW5BZtoLBExN3G0A91-lNZnSnQzcEjSi-5RifcBCgbuXDq2EXAoE6b43BMM2mlilTy3AdZIf3nOruo_EyW-J9Dzsm-n5n0DmDF5HZUcCV_tH6yqf0nmpCs5mKJ5Mzf_Dbk0ZxOOY02pVGy07EjBy3cDoWtpVr2VlMZNJKT7dV3pXk53tnBsxCtBBJtSOm9wp-VxcHTU97UFK7sh69qnegmTDzsfWGm5qJJ5ZbhWfb3H4P2N7M8qzocKWT_Bx-V95jzkyry7QZIsgyqJJNmC8BB5PP6rd4a2v5n5r-TCV6nuUBbxbt0_sXfvpG-1f3e3OK35MmTZGjb_vdnBNY6BvVJ0jE_He1FXiDESdPD7cMQniTxfQTpSF2pUhd_e6gk6u02y9aMHjpGppTh_AIb25GMpTO3b5o8tnNfEbKL7OBKSzFNDjz2pVDUHLT3m-mwU__8ErPSm0vBKQ8lT9B97aiJ8gyXQRbMBZIKOgQ20JcSeKe7gQ260; BITRIX_SM_CITY_NAME=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0; BITRIX_SM_CITY_SALE_LOCATION_ID=129; BITRIX_SM_LOCATION_GUID=0c5b2444-70a0-4932-980c-b4dc0d3f02b5; BITRIX_SM_DOMAIN_ID=1; tmr_lvid=8dbe3187a7eb4ea1d17e12f470faac00; tmr_lvidTS=1686378240199; _ym_uid=1686378240559249150; _ym_d=1686378240; rcuid=62e131a1d642940b637cbcd0; _gcl_au=1.1.302776653.1686378240; iap.uid=0d624f80744c410f8e5931fea6216161; flocktory-uuid=949e1139-0f29-4802-89ae-a43a4156419e-6; cto_bundle=6hI6I19qMTVjSXQ2bVJiRFElMkZ2OGI3dVFLa3NnREZGSng1a3FIUFBDemVoYzNGZTFjVUFRJTJCdCUyQmdndVNtJTJCbHBMTTBFRzJ0MWE3R3NVb0pkekxLTXZEb0Vlb0gycEJYdmpDcWJqNFIxc2ZlJTJCcEo2THJJNDBCY2dKaTBYJTJGV3NSSiUyRmVrazNRUXNhTmV4R29JY3hzQldzYWJhVzI5QSUzRCUzRA; spsc=1687278564675_85ce1388b3d8daa70eb598d0096754c9_a5476469b72f558bb72e6aae99c6a060; _ym_isad=1; _ym_visorc=w; _gid=GA1.2.1666721336.1687314480; rr-testCookie=testvalue; tmr_detect=1%7C1687314661375; _ga=GA1.2.259447028.1686378240; _gat_UA-75724517-1=1; _ga_51M9YTC352=GS1.1.1687314479.27.1.1687314663.58.0.0',
            'referer': 'https://stockmann.ru/sale/56-zhenshchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-coccinelle-or-diesel-or-dkny-or-dr_martens-or-dirk_bikkembergs-or-emporio_armani-or-ea7-or-ecco-or-furla-or-fila-or-guess-or-geox-or-gerry_weber-or-gerry_weber_edition-or-gerry_weber_casual-or-hugo-or-incanto-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lauren_ralph_lauren-or-liu_jo-or-lacoste-or-love_moschino-or-liujo_milano-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-moschino-or-michael_michael_kors-or-moschino_boutique-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-puma-or-roxy-or-stella_mccartney-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-tamaris-or-urban_tiger-or-ugg-or-versace_jeans_couture-or-vogue/available_online-online/has_discount-y/',
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'x-api-version': '1.0.1',
            'x-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ODQxNzAwZTZiMzczNjIxMzA1ZDY4NiIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjg2Mzc4MjQwfQ.DQJErX2WyG1-ZFBWgmUkpSp8wy3yVAhPt0QbH0SXqR-6vUZCIO9zfQ6d3MpWigpNuJQXgQXaJ6ix3UUyaqAgmsLeEhp7htpolxqMOU4umMrQp0U0uU18Uj-jTg4Afu-f_cnUCTHxfb5KH2R9Fw1nYDHcfQfSAFIBNKL5IWRW-sefUCw5weXUphC5OW5BZtoLBExN3G0A91-lNZnSnQzcEjSi-5RifcBCgbuXDq2EXAoE6b43BMM2mlilTy3AdZIf3nOruo_EyW-J9Dzsm-n5n0DmDF5HZUcCV_tH6yqf0nmpCs5mKJ5Mzf_Dbk0ZxOOY02pVGy07EjBy3cDoWtpVr2VlMZNJKT7dV3pXk53tnBsxCtBBJtSOm9wp-VxcHTU97UFK7sh69qnegmTDzsfWGm5qJJ5ZbhWfb3H4P2N7M8qzocKWT_Bx-V95jzkyry7QZIsgyqJJNmC8BB5PP6rd4a2v5n5r-TCV6nuUBbxbt0_sXfvpG-1f3e3OK35MmTZGjb_vdnBNY6BvVJ0jE_He1FXiDESdPD7cMQniTxfQTpSF2pUhd_e6gk6u02y9aMHjpGppTh_AIb25GMpTO3b5o8tnNfEbKL7OBKSzFNDjz2pVDUHLT3m-mwU__8ErPSm0vBKQ8lT9B97aiJ8gyXQRbMBZIKOgQ20JcSeKe7gQ260'
        }
      }
    ]
    womenOptions[1].params.page = 1

    const productOptions = ['https://stockmann.ru/catalog-api/product/5185937-mokasiny-iz-zamshi-boss/', {
        headers: {
            'authority': 'stockmann.ru',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': 'spid=1686377032026_9f714026818952fbd998e9e812de16b7_9vjhbd48cr5im6pd; rrpvid=388210974187317; anonymous_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ODQxNzAwZTZiMzczNjIxMzA1ZDY4NiIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjg2Mzc4MjQwfQ.DQJErX2WyG1-ZFBWgmUkpSp8wy3yVAhPt0QbH0SXqR-6vUZCIO9zfQ6d3MpWigpNuJQXgQXaJ6ix3UUyaqAgmsLeEhp7htpolxqMOU4umMrQp0U0uU18Uj-jTg4Afu-f_cnUCTHxfb5KH2R9Fw1nYDHcfQfSAFIBNKL5IWRW-sefUCw5weXUphC5OW5BZtoLBExN3G0A91-lNZnSnQzcEjSi-5RifcBCgbuXDq2EXAoE6b43BMM2mlilTy3AdZIf3nOruo_EyW-J9Dzsm-n5n0DmDF5HZUcCV_tH6yqf0nmpCs5mKJ5Mzf_Dbk0ZxOOY02pVGy07EjBy3cDoWtpVr2VlMZNJKT7dV3pXk53tnBsxCtBBJtSOm9wp-VxcHTU97UFK7sh69qnegmTDzsfWGm5qJJ5ZbhWfb3H4P2N7M8qzocKWT_Bx-V95jzkyry7QZIsgyqJJNmC8BB5PP6rd4a2v5n5r-TCV6nuUBbxbt0_sXfvpG-1f3e3OK35MmTZGjb_vdnBNY6BvVJ0jE_He1FXiDESdPD7cMQniTxfQTpSF2pUhd_e6gk6u02y9aMHjpGppTh_AIb25GMpTO3b5o8tnNfEbKL7OBKSzFNDjz2pVDUHLT3m-mwU__8ErPSm0vBKQ8lT9B97aiJ8gyXQRbMBZIKOgQ20JcSeKe7gQ260; BITRIX_SM_CITY_NAME=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0; BITRIX_SM_CITY_SALE_LOCATION_ID=129; BITRIX_SM_LOCATION_GUID=0c5b2444-70a0-4932-980c-b4dc0d3f02b5; BITRIX_SM_DOMAIN_ID=1; tmr_lvid=8dbe3187a7eb4ea1d17e12f470faac00; tmr_lvidTS=1686378240199; _ym_uid=1686378240559249150; _ym_d=1686378240; rcuid=62e131a1d642940b637cbcd0; _gcl_au=1.1.302776653.1686378240; iap.uid=0d624f80744c410f8e5931fea6216161; flocktory-uuid=949e1139-0f29-4802-89ae-a43a4156419e-6; spsc=1687278564675_85ce1388b3d8daa70eb598d0096754c9_a5476469b72f558bb72e6aae99c6a060; _ym_isad=1; _ym_visorc=w; _gid=GA1.2.1666721336.1687314480; _gat_UA-75724517-1=1; tmr_detect=1%7C1687314698542; _ga=GA1.2.259447028.1686378240; cto_bundle=2EsNa19qMTVjSXQ2bVJiRFElMkZ2OGI3dVFLa2dPdDVUQVBMRG9XSmVPV0JYUTlqZ0hibWpsNlRmVHpVR0lJb1M3WUgxc2FtUjg1bGp5TjFSd3FQJTJCSGJmTzJRNkR6ZkZsRURDWGdINzM4VE10OWZudmJXR1J5VW5GVmhGaTl4ODZkd2V6QzkyUUh2WVVBSnJCcnRWdzNFJTJGOWxxUWclM0QlM0Q; _ga_51M9YTC352=GS1.1.1687314479.27.1.1687314708.13.0.0',
            'referer': 'https://stockmann.ru/product/5185937-mokasiny-iz-zamshi-boss/',
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'x-api-version': '1.0.1',
            'x-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ODQxNzAwZTZiMzczNjIxMzA1ZDY4NiIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjg2Mzc4MjQwfQ.DQJErX2WyG1-ZFBWgmUkpSp8wy3yVAhPt0QbH0SXqR-6vUZCIO9zfQ6d3MpWigpNuJQXgQXaJ6ix3UUyaqAgmsLeEhp7htpolxqMOU4umMrQp0U0uU18Uj-jTg4Afu-f_cnUCTHxfb5KH2R9Fw1nYDHcfQfSAFIBNKL5IWRW-sefUCw5weXUphC5OW5BZtoLBExN3G0A91-lNZnSnQzcEjSi-5RifcBCgbuXDq2EXAoE6b43BMM2mlilTy3AdZIf3nOruo_EyW-J9Dzsm-n5n0DmDF5HZUcCV_tH6yqf0nmpCs5mKJ5Mzf_Dbk0ZxOOY02pVGy07EjBy3cDoWtpVr2VlMZNJKT7dV3pXk53tnBsxCtBBJtSOm9wp-VxcHTU97UFK7sh69qnegmTDzsfWGm5qJJ5ZbhWfb3H4P2N7M8qzocKWT_Bx-V95jzkyry7QZIsgyqJJNmC8BB5PP6rd4a2v5n5r-TCV6nuUBbxbt0_sXfvpG-1f3e3OK35MmTZGjb_vdnBNY6BvVJ0jE_He1FXiDESdPD7cMQniTxfQTpSF2pUhd_e6gk6u02y9aMHjpGppTh_AIb25GMpTO3b5o8tnNfEbKL7OBKSzFNDjz2pVDUHLT3m-mwU__8ErPSm0vBKQ8lT9B97aiJ8gyXQRbMBZIKOgQ20JcSeKe7gQ260'
        }
    }]

    productOptions[0] = productOptions[0].split('/').slice(0, 4).join('/') + productLink
    productOptions[1]['headers']['referer'] = productOptions[1]['headers']['referer'].split('/').slice(0, 3).join('/') + productLink

    return productLink
      ? productOptions
      : gender === 'men'
        ? menOptions
        : womenOptions

  }