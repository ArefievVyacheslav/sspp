// men https://stockmann.ru/category/59-muzhchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-diesel-or-dr_martens-or-emporio_armani-or-ea7-or-ecco-or-guess-or-geox-or-hugo-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lacoste-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-puma-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-ugg-or-versace_jeans_couture/available_online-online/has_discount-y/
// women https://stockmann.ru/sale/56-zhenshchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-coccinelle-or-diesel-or-dkny-or-dr_martens-or-dirk_bikkembergs-or-emporio_armani-or-ea7-or-ecco-or-furla-or-fila-or-guess-or-geox-or-gerry_weber-or-gerry_weber_edition-or-gerry_weber_casual-or-hugo-or-incanto-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lauren_ralph_lauren-or-liu_jo-or-lacoste-or-love_moschino-or-liujo_milano-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-moschino-or-michael_michael_kors-or-moschino_boutique-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-puma-or-roxy-or-stella_mccartney-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-tamaris-or-urban_tiger-or-ugg-or-versace_jeans_couture-or-vogue/available_online-online/has_discount-y/
// product https://stockmann.ru/product/5185937-mokasiny-iz-zamshi-boss/


module.exports = function getOptions (gender, productLink) {

    const menOptions = ['https://stockmann.ru/catalog-api/category/59-muzhchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-diesel-or-emporio_armani-or-ea7-or-ecco-or-guess-or-geox-or-hugo-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lacoste-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-ugg-or-versace_jeans_couture/available_online-online/has_discount-y/', {
      params: {
        'page': '2'
      },
      headers: {
        'authority': 'stockmann.ru',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'cookie': 'spid=1691565472602_b22392f78c72b1b2047ff6d0a5f6c418_btkob2w36r5kdjtt; anonymous_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ZDUzMGE4ODM1MGEyZjAzNzBkYjgwOSIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjkxNjkzMjI0fQ.qtW2BOoRePqde36VwOqTEz6U_7tp25fqMMKRK_KQw2BGlcOqKpsk9NaYztZhvevx0lhqSY3WWoG-CNU-KWVroKE57gIAxHkGXwJtgqeuYI9Q4WLJgSLoBw2EZkz4tnYlI1dVhuxapvVdD9yFChlX6iiYg8irgMUhor6k2x5cACuZaIpzLQwu29AoTwivs5uOffy2Xx11kR4_5nD4E2b5yG5QeQRKj_VEOjClxHqYdx7771x7Cf3JZ3WoTFgh5D0Yrm5GtdGktFBcZ05kw5H74XkSjySTKCmcZNpSIpOvSX4mWMP2Pj3g5p1gd5OaDBoo9R2Hy08HYZs4Ncd_ey1SO-PXHJg2O8YJwxoHC4xKp2Fo90ONt_2OQ1wjqlevQdH59S3zhAKwVlFiINM4jbETpoq0AiEXDzZOJ2Q_89giVJOyonLLAR7kOJMF_cEqo529XsJT36dwuUXz46UTi93ZZsUCyVxC5u4hJOAUaJARpPLFIAVko4uUgNGULHrRbU0f1obNxsd-XSMBpsys3d9iguioxnN1Fe6X1hs5DebBVtnQbY4UsbjTEvI9mXm46msP8S9njgjWqvGNnizEyM1OSZk0pqyk_1KHA8CfniWtw60dvjDR6HUz5e41HR0gWo-SQtDDOhmpaO8fS3eOHLm52MSHy7jxdXKF7RfRVOj3S5M; BITRIX_SM_CITY_NAME=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0; BITRIX_SM_CITY_SALE_LOCATION_ID=129; BITRIX_SM_LOCATION_GUID=0c5b2444-70a0-4932-980c-b4dc0d3f02b5; BITRIX_SM_DOMAIN_ID=1',
        'dnt': '1',
        'referer': 'https://stockmann.ru/category/59-muzhchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-diesel-or-emporio_armani-or-ea7-or-ecco-or-guess-or-geox-or-hugo-or-john_richmond-or-karl_lagerfeld-or-levi_s-or-lacoste-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-napapijri-or-pepe_jeans-or-paul_shark-or-polaroid-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-ugg-or-versace_jeans_couture/available_online-online/has_discount-y/',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'x-api-version': '1.0.1',
        'x-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ZDUzMGE4ODM1MGEyZjAzNzBkYjgwOSIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjkxNjkzMjI0fQ.qtW2BOoRePqde36VwOqTEz6U_7tp25fqMMKRK_KQw2BGlcOqKpsk9NaYztZhvevx0lhqSY3WWoG-CNU-KWVroKE57gIAxHkGXwJtgqeuYI9Q4WLJgSLoBw2EZkz4tnYlI1dVhuxapvVdD9yFChlX6iiYg8irgMUhor6k2x5cACuZaIpzLQwu29AoTwivs5uOffy2Xx11kR4_5nD4E2b5yG5QeQRKj_VEOjClxHqYdx7771x7Cf3JZ3WoTFgh5D0Yrm5GtdGktFBcZ05kw5H74XkSjySTKCmcZNpSIpOvSX4mWMP2Pj3g5p1gd5OaDBoo9R2Hy08HYZs4Ncd_ey1SO-PXHJg2O8YJwxoHC4xKp2Fo90ONt_2OQ1wjqlevQdH59S3zhAKwVlFiINM4jbETpoq0AiEXDzZOJ2Q_89giVJOyonLLAR7kOJMF_cEqo529XsJT36dwuUXz46UTi93ZZsUCyVxC5u4hJOAUaJARpPLFIAVko4uUgNGULHrRbU0f1obNxsd-XSMBpsys3d9iguioxnN1Fe6X1hs5DebBVtnQbY4UsbjTEvI9mXm46msP8S9njgjWqvGNnizEyM1OSZk0pqyk_1KHA8CfniWtw60dvjDR6HUz5e41HR0gWo-SQtDDOhmpaO8fS3eOHLm52MSHy7jxdXKF7RfRVOj3S5M'
      }
    }]
    menOptions[1].params.page = 1

    const womenOptions = ['https://stockmann.ru/catalog-api/sale/56-zhenshchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-coccinelle-or-diesel-or-dkny-or-dr_martens-or-emporio_armani-or-ea7-or-ecco-or-furla-or-fila-or-guess-or-geox-or-gerry_weber-or-gerry_weber_edition-or-gerry_weber_casual-or-hugo-or-incanto-or-karl_lagerfeld-or-levi_s-or-lauren_ralph_lauren-or-liu_jo-or-lacoste-or-love_moschino-or-liujo_milano-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-moschino-or-michael_michael_kors-or-moschino_boutique-or-napapijri-or-pepe_jeans-or-polaroid-or-puma-or-roxy-or-stella_mccartney-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-tamaris-or-urban_tiger-or-ugg-or-versace_jeans_couture-or-vogue/available_online-online/has_discount-y/', {
      params: {
        'page': '2'
      },
      headers: {
        'authority': 'stockmann.ru',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'cookie': 'spid=1691565472602_b22392f78c72b1b2047ff6d0a5f6c418_btkob2w36r5kdjtt; anonymous_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ZDUzMGE4ODM1MGEyZjAzNzBkYjgwOSIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjkxNjkzMjI0fQ.qtW2BOoRePqde36VwOqTEz6U_7tp25fqMMKRK_KQw2BGlcOqKpsk9NaYztZhvevx0lhqSY3WWoG-CNU-KWVroKE57gIAxHkGXwJtgqeuYI9Q4WLJgSLoBw2EZkz4tnYlI1dVhuxapvVdD9yFChlX6iiYg8irgMUhor6k2x5cACuZaIpzLQwu29AoTwivs5uOffy2Xx11kR4_5nD4E2b5yG5QeQRKj_VEOjClxHqYdx7771x7Cf3JZ3WoTFgh5D0Yrm5GtdGktFBcZ05kw5H74XkSjySTKCmcZNpSIpOvSX4mWMP2Pj3g5p1gd5OaDBoo9R2Hy08HYZs4Ncd_ey1SO-PXHJg2O8YJwxoHC4xKp2Fo90ONt_2OQ1wjqlevQdH59S3zhAKwVlFiINM4jbETpoq0AiEXDzZOJ2Q_89giVJOyonLLAR7kOJMF_cEqo529XsJT36dwuUXz46UTi93ZZsUCyVxC5u4hJOAUaJARpPLFIAVko4uUgNGULHrRbU0f1obNxsd-XSMBpsys3d9iguioxnN1Fe6X1hs5DebBVtnQbY4UsbjTEvI9mXm46msP8S9njgjWqvGNnizEyM1OSZk0pqyk_1KHA8CfniWtw60dvjDR6HUz5e41HR0gWo-SQtDDOhmpaO8fS3eOHLm52MSHy7jxdXKF7RfRVOj3S5M; BITRIX_SM_CITY_NAME=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0; BITRIX_SM_CITY_SALE_LOCATION_ID=129; BITRIX_SM_LOCATION_GUID=0c5b2444-70a0-4932-980c-b4dc0d3f02b5; BITRIX_SM_DOMAIN_ID=1',
        'dnt': '1',
        'referer': 'https://stockmann.ru/sale/56-zhenshchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-coccinelle-or-diesel-or-dkny-or-dr_martens-or-emporio_armani-or-ea7-or-ecco-or-furla-or-fila-or-guess-or-geox-or-gerry_weber-or-gerry_weber_edition-or-gerry_weber_casual-or-hugo-or-incanto-or-karl_lagerfeld-or-levi_s-or-lauren_ralph_lauren-or-liu_jo-or-lacoste-or-love_moschino-or-liujo_milano-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-moschino-or-michael_michael_kors-or-moschino_boutique-or-napapijri-or-pepe_jeans-or-polaroid-or-puma-or-roxy-or-stella_mccartney-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-tamaris-or-urban_tiger-or-ugg-or-versace_jeans_couture-or-vogue/available_online-online/has_discount-y/',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'x-api-version': '1.0.1',
        'x-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ZDUzMGE4ODM1MGEyZjAzNzBkYjgwOSIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjkxNjkzMjI0fQ.qtW2BOoRePqde36VwOqTEz6U_7tp25fqMMKRK_KQw2BGlcOqKpsk9NaYztZhvevx0lhqSY3WWoG-CNU-KWVroKE57gIAxHkGXwJtgqeuYI9Q4WLJgSLoBw2EZkz4tnYlI1dVhuxapvVdD9yFChlX6iiYg8irgMUhor6k2x5cACuZaIpzLQwu29AoTwivs5uOffy2Xx11kR4_5nD4E2b5yG5QeQRKj_VEOjClxHqYdx7771x7Cf3JZ3WoTFgh5D0Yrm5GtdGktFBcZ05kw5H74XkSjySTKCmcZNpSIpOvSX4mWMP2Pj3g5p1gd5OaDBoo9R2Hy08HYZs4Ncd_ey1SO-PXHJg2O8YJwxoHC4xKp2Fo90ONt_2OQ1wjqlevQdH59S3zhAKwVlFiINM4jbETpoq0AiEXDzZOJ2Q_89giVJOyonLLAR7kOJMF_cEqo529XsJT36dwuUXz46UTi93ZZsUCyVxC5u4hJOAUaJARpPLFIAVko4uUgNGULHrRbU0f1obNxsd-XSMBpsys3d9iguioxnN1Fe6X1hs5DebBVtnQbY4UsbjTEvI9mXm46msP8S9njgjWqvGNnizEyM1OSZk0pqyk_1KHA8CfniWtw60dvjDR6HUz5e41HR0gWo-SQtDDOhmpaO8fS3eOHLm52MSHy7jxdXKF7RfRVOj3S5M'
      }
    }]
    womenOptions[1].params.page = 1

    const productOptions = ['https://stockmann.ru/catalog-api/product/5218486-khlopkovoe-polo-s-lyureksom-geox/', {
      headers: {
        'authority': 'stockmann.ru',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'cookie': 'spid=1691565472602_b22392f78c72b1b2047ff6d0a5f6c418_btkob2w36r5kdjtt; anonymous_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ZDUzMGE4ODM1MGEyZjAzNzBkYjgwOSIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjkxNjkzMjI0fQ.qtW2BOoRePqde36VwOqTEz6U_7tp25fqMMKRK_KQw2BGlcOqKpsk9NaYztZhvevx0lhqSY3WWoG-CNU-KWVroKE57gIAxHkGXwJtgqeuYI9Q4WLJgSLoBw2EZkz4tnYlI1dVhuxapvVdD9yFChlX6iiYg8irgMUhor6k2x5cACuZaIpzLQwu29AoTwivs5uOffy2Xx11kR4_5nD4E2b5yG5QeQRKj_VEOjClxHqYdx7771x7Cf3JZ3WoTFgh5D0Yrm5GtdGktFBcZ05kw5H74XkSjySTKCmcZNpSIpOvSX4mWMP2Pj3g5p1gd5OaDBoo9R2Hy08HYZs4Ncd_ey1SO-PXHJg2O8YJwxoHC4xKp2Fo90ONt_2OQ1wjqlevQdH59S3zhAKwVlFiINM4jbETpoq0AiEXDzZOJ2Q_89giVJOyonLLAR7kOJMF_cEqo529XsJT36dwuUXz46UTi93ZZsUCyVxC5u4hJOAUaJARpPLFIAVko4uUgNGULHrRbU0f1obNxsd-XSMBpsys3d9iguioxnN1Fe6X1hs5DebBVtnQbY4UsbjTEvI9mXm46msP8S9njgjWqvGNnizEyM1OSZk0pqyk_1KHA8CfniWtw60dvjDR6HUz5e41HR0gWo-SQtDDOhmpaO8fS3eOHLm52MSHy7jxdXKF7RfRVOj3S5M; BITRIX_SM_CITY_NAME=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0; BITRIX_SM_CITY_SALE_LOCATION_ID=129; BITRIX_SM_LOCATION_GUID=0c5b2444-70a0-4932-980c-b4dc0d3f02b5; BITRIX_SM_DOMAIN_ID=1',
        'dnt': '1',
        'referer': 'https://stockmann.ru/sale/56-zhenshchinam/filter/brand-adidas-or-boss-or-calvin_klein-or-ck_jeans-or-crocs-or-coccinelle-or-diesel-or-dkny-or-dr_martens-or-emporio_armani-or-ea7-or-ecco-or-furla-or-fila-or-guess-or-geox-or-gerry_weber-or-gerry_weber_edition-or-gerry_weber_casual-or-hugo-or-incanto-or-karl_lagerfeld-or-levi_s-or-lauren_ralph_lauren-or-liu_jo-or-lacoste-or-love_moschino-or-liujo_milano-or-marc_o_polo-or-marc_o_polo_denim-or-mavi-or-moschino-or-michael_michael_kors-or-moschino_boutique-or-napapijri-or-pepe_jeans-or-polaroid-or-puma-or-roxy-or-stella_mccartney-or-tommy_hilfiger-or-tommy_jeans-or-tom_tailor-or-trussardi-or-tamaris-or-urban_tiger-or-ugg-or-versace_jeans_couture-or-vogue/available_online-online/has_discount-y/?page=2',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'x-api-version': '1.0.1',
        'x-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ2YWx1ZSI6IjY0ZDUzMGE4ODM1MGEyZjAzNzBkYjgwOSIsInR5cGUiOiJBQ0NFU1M6QU5PTllNT1VTIiwiaWF0IjoxNjkxNjkzMjI0fQ.qtW2BOoRePqde36VwOqTEz6U_7tp25fqMMKRK_KQw2BGlcOqKpsk9NaYztZhvevx0lhqSY3WWoG-CNU-KWVroKE57gIAxHkGXwJtgqeuYI9Q4WLJgSLoBw2EZkz4tnYlI1dVhuxapvVdD9yFChlX6iiYg8irgMUhor6k2x5cACuZaIpzLQwu29AoTwivs5uOffy2Xx11kR4_5nD4E2b5yG5QeQRKj_VEOjClxHqYdx7771x7Cf3JZ3WoTFgh5D0Yrm5GtdGktFBcZ05kw5H74XkSjySTKCmcZNpSIpOvSX4mWMP2Pj3g5p1gd5OaDBoo9R2Hy08HYZs4Ncd_ey1SO-PXHJg2O8YJwxoHC4xKp2Fo90ONt_2OQ1wjqlevQdH59S3zhAKwVlFiINM4jbETpoq0AiEXDzZOJ2Q_89giVJOyonLLAR7kOJMF_cEqo529XsJT36dwuUXz46UTi93ZZsUCyVxC5u4hJOAUaJARpPLFIAVko4uUgNGULHrRbU0f1obNxsd-XSMBpsys3d9iguioxnN1Fe6X1hs5DebBVtnQbY4UsbjTEvI9mXm46msP8S9njgjWqvGNnizEyM1OSZk0pqyk_1KHA8CfniWtw60dvjDR6HUz5e41HR0gWo-SQtDDOhmpaO8fS3eOHLm52MSHy7jxdXKF7RfRVOj3S5M'
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
