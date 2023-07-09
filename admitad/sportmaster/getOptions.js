// men https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299
// women https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_zhenschiny&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299
// product https://www.sportmaster.ru/product/27888390299/


module.exports = function getOptions (gender, productId) {

  const menOptions = [
    'https://www.sportmaster.ru/web-api/v1/catalog/',
    {
      'url': '/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299',
      'page': 2
    },
    {
      headers: {
        'authority': 'www.sportmaster.ru',
        'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'cookie': 'UDID=9867a9be-5772-4cc1-91e5-1c7040180c45; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI0N2Q1YjlkNy1hMzAxLTQ2NzktOGY2ZC1iNzRjMTE0OTY1MzUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjg3NDI4MjYwLCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6Ijc2NDA4MzhlLTRkYWEtNGE4OS04NTc4LThmNWM4MWRiOTRhMyIsImFuUCI6IjM1NmY0YjM0LWZmYTYtNDI3Ny1iMWM2LTYyN2Q3ODZhMTcwOSIsImFuVSI6IjEwMDAwMDAwNjUxNDk3ODUwMCIsImNhblAiOiJBSUE5TnUvU2xWL1pxNVV6cnRqRDZjRmR2cXVnNms5ZmkzYzNmSVFwc011VEJVRFhucjJWVkdIQ1ZxQTdrYWpqTmxkTkxKNy9XbThUVFp1RVczb0FPaWpVZTdzdWdHaVY0U3ZabXM2Wk94aU9KVjBMeUIrVU5EZ1lZVlE1ZHQzRGlsUmF2N01ZQzJYUnpLSXVuNEdZODFmcTMyOWo5S0pHR25vc3ZUak5PWWVManU5ZzcramNhUTMvenVpWE9iZCsxUWZuNE5pNnhoWDAxblJmcnFOZmFUd3UxRHFaQk9RbEFCVE03NHA2bkpZT1Z5MEZESHN3MlJUSW8zOHR5SVlSUm04PSIsImNhblQiOiJBSUFNSGlYTUNJZmxPUFo4NjJiOERDMUNFQmNVKy95azJKa3NpZDdhdURjVmJXbWNsWi9PU1VQN0hRTG4xMndiRGtIV21JR3NrakxzR1hDTVRLc091QjlqZHdNRXFpVUlNTnZHSnA2NFhYN2ttTXV3R2JlYzJYbG5FOXRBME1nLzVaUFo0Smo3WVFBZUdvemU5NDR5TkFDYXZIT0U1bDJ6MXhzSUdMT2tuUm0yOHNnVnNVczYwTWlhVEdyVXNDYUlOVk1MMTRGTCt3a1lzL0YzaVdTNTFrUkh4bTlvclhSbVpxLzVqbFZ2WTk2bCt4SnNHN1R0cGNibW1LREl1TUdVd2V3PSIsInYiOiJWMiJ9.SpHh6wVcRUeQQlzMOLipJ1XG6Uu57RYTRDJ5BsVtlWD5h9Nc3ZvVjB8uYksojMqLTBSiTHd9n9wNfYHU-uFxHddSlRvA8IQzw1QJ580caPNIxYgYyNkuNIU0A4aCRJdk02KqyvaK0izzMtK26-MFzVHVDnkWkiTEM3JbjjWiFMiMyXbY8STeHgH5Ql8eJLQyE44KBq_FD36MvrDM7cv2XGnb2DF_ameTr2d2pB-HqgY-hXBhKbGAKMPIYJUb16UOmM2eGHXSPg5HuNnmtRTdanu6aab1MaUx8b76Q8BvnFeZ71qYjAs_N6OjpVzAMT4gXg6skP0EA_IcqOLp8d3XUw; SMAUTH=eyJpZCI6IjM1NmY0YjM0LWZmYTYtNDI3Ny1iMWM2LTYyN2Q3ODZhMTcwOSIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Nzc1ODQyM30=; qrator_jsr=1687786368.368.7ZnHe4p82cgvJqj0-on3tbc845s7q4st189c8lth5ru041hoj-00; qrator_ssid=1687786370.081.6XB1Ue3rHbIuz63Z-263km4s1sfq63f27pco6p8b28ufl4r4s; qrator_jsid=1687786368.368.7ZnHe4p82cgvJqj0-if8ajme424kb7h7umvi68qpkdna35okk',
        'dnt': '1',
        'origin': 'https://www.sportmaster.ru',
        'referer': 'https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'x-sm-accept-language': 'ru-RU',
        'x-sm-request-id': '21f2e228-030b',
        'x-sm-tracing-id': '05dd5367-43459'
      }
    }
  ]
  menOptions[1].page = 1

  const womenOptions = [
    'https://www.sportmaster.ru/web-api/v1/catalog/',
    {
      'url': '/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_zhenschiny&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299',
      'page': 2
    },
    {
      headers: {
        'authority': 'www.sportmaster.ru',
        'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'cookie': 'UDID=9867a9be-5772-4cc1-91e5-1c7040180c45; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI0N2Q1YjlkNy1hMzAxLTQ2NzktOGY2ZC1iNzRjMTE0OTY1MzUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjg3NDI4MjYwLCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6Ijc2NDA4MzhlLTRkYWEtNGE4OS04NTc4LThmNWM4MWRiOTRhMyIsImFuUCI6IjM1NmY0YjM0LWZmYTYtNDI3Ny1iMWM2LTYyN2Q3ODZhMTcwOSIsImFuVSI6IjEwMDAwMDAwNjUxNDk3ODUwMCIsImNhblAiOiJBSUE5TnUvU2xWL1pxNVV6cnRqRDZjRmR2cXVnNms5ZmkzYzNmSVFwc011VEJVRFhucjJWVkdIQ1ZxQTdrYWpqTmxkTkxKNy9XbThUVFp1RVczb0FPaWpVZTdzdWdHaVY0U3ZabXM2Wk94aU9KVjBMeUIrVU5EZ1lZVlE1ZHQzRGlsUmF2N01ZQzJYUnpLSXVuNEdZODFmcTMyOWo5S0pHR25vc3ZUak5PWWVManU5ZzcramNhUTMvenVpWE9iZCsxUWZuNE5pNnhoWDAxblJmcnFOZmFUd3UxRHFaQk9RbEFCVE03NHA2bkpZT1Z5MEZESHN3MlJUSW8zOHR5SVlSUm04PSIsImNhblQiOiJBSUFNSGlYTUNJZmxPUFo4NjJiOERDMUNFQmNVKy95azJKa3NpZDdhdURjVmJXbWNsWi9PU1VQN0hRTG4xMndiRGtIV21JR3NrakxzR1hDTVRLc091QjlqZHdNRXFpVUlNTnZHSnA2NFhYN2ttTXV3R2JlYzJYbG5FOXRBME1nLzVaUFo0Smo3WVFBZUdvemU5NDR5TkFDYXZIT0U1bDJ6MXhzSUdMT2tuUm0yOHNnVnNVczYwTWlhVEdyVXNDYUlOVk1MMTRGTCt3a1lzL0YzaVdTNTFrUkh4bTlvclhSbVpxLzVqbFZ2WTk2bCt4SnNHN1R0cGNibW1LREl1TUdVd2V3PSIsInYiOiJWMiJ9.SpHh6wVcRUeQQlzMOLipJ1XG6Uu57RYTRDJ5BsVtlWD5h9Nc3ZvVjB8uYksojMqLTBSiTHd9n9wNfYHU-uFxHddSlRvA8IQzw1QJ580caPNIxYgYyNkuNIU0A4aCRJdk02KqyvaK0izzMtK26-MFzVHVDnkWkiTEM3JbjjWiFMiMyXbY8STeHgH5Ql8eJLQyE44KBq_FD36MvrDM7cv2XGnb2DF_ameTr2d2pB-HqgY-hXBhKbGAKMPIYJUb16UOmM2eGHXSPg5HuNnmtRTdanu6aab1MaUx8b76Q8BvnFeZ71qYjAs_N6OjpVzAMT4gXg6skP0EA_IcqOLp8d3XUw; SMAUTH=eyJpZCI6IjM1NmY0YjM0LWZmYTYtNDI3Ny1iMWM2LTYyN2Q3ODZhMTcwOSIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Nzc1ODQyM30=; qrator_jsr=1687786368.368.7ZnHe4p82cgvJqj0-on3tbc845s7q4st189c8lth5ru041hoj-00; qrator_ssid=1687786370.081.6XB1Ue3rHbIuz63Z-263km4s1sfq63f27pco6p8b28ufl4r4s; qrator_jsid=1687786368.368.7ZnHe4p82cgvJqj0-if8ajme424kb7h7umvi68qpkdna35okk',
        'dnt': '1',
        'origin': 'https://www.sportmaster.ru',
        'referer': 'https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_zhenschiny&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'x-sm-accept-language': 'ru-RU',
        'x-sm-request-id': '8378e880-9448',
        'x-sm-tracing-id': '9d985db1-46976'
      }
    }
  ]
  womenOptions[1].page = 1

  const productOptions = ['https://www.sportmaster.ru/ga-api/v1/product-view/27888390299', {
    headers: {
      'authority': 'www.sportmaster.ru',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
      'cookie': 'UDID=9867a9be-5772-4cc1-91e5-1c7040180c45; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI0N2Q1YjlkNy1hMzAxLTQ2NzktOGY2ZC1iNzRjMTE0OTY1MzUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjg3NDI4MjYwLCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6Ijc2NDA4MzhlLTRkYWEtNGE4OS04NTc4LThmNWM4MWRiOTRhMyIsImFuUCI6IjM1NmY0YjM0LWZmYTYtNDI3Ny1iMWM2LTYyN2Q3ODZhMTcwOSIsImFuVSI6IjEwMDAwMDAwNjUxNDk3ODUwMCIsImNhblAiOiJBSUE5TnUvU2xWL1pxNVV6cnRqRDZjRmR2cXVnNms5ZmkzYzNmSVFwc011VEJVRFhucjJWVkdIQ1ZxQTdrYWpqTmxkTkxKNy9XbThUVFp1RVczb0FPaWpVZTdzdWdHaVY0U3ZabXM2Wk94aU9KVjBMeUIrVU5EZ1lZVlE1ZHQzRGlsUmF2N01ZQzJYUnpLSXVuNEdZODFmcTMyOWo5S0pHR25vc3ZUak5PWWVManU5ZzcramNhUTMvenVpWE9iZCsxUWZuNE5pNnhoWDAxblJmcnFOZmFUd3UxRHFaQk9RbEFCVE03NHA2bkpZT1Z5MEZESHN3MlJUSW8zOHR5SVlSUm04PSIsImNhblQiOiJBSUFNSGlYTUNJZmxPUFo4NjJiOERDMUNFQmNVKy95azJKa3NpZDdhdURjVmJXbWNsWi9PU1VQN0hRTG4xMndiRGtIV21JR3NrakxzR1hDTVRLc091QjlqZHdNRXFpVUlNTnZHSnA2NFhYN2ttTXV3R2JlYzJYbG5FOXRBME1nLzVaUFo0Smo3WVFBZUdvemU5NDR5TkFDYXZIT0U1bDJ6MXhzSUdMT2tuUm0yOHNnVnNVczYwTWlhVEdyVXNDYUlOVk1MMTRGTCt3a1lzL0YzaVdTNTFrUkh4bTlvclhSbVpxLzVqbFZ2WTk2bCt4SnNHN1R0cGNibW1LREl1TUdVd2V3PSIsInYiOiJWMiJ9.SpHh6wVcRUeQQlzMOLipJ1XG6Uu57RYTRDJ5BsVtlWD5h9Nc3ZvVjB8uYksojMqLTBSiTHd9n9wNfYHU-uFxHddSlRvA8IQzw1QJ580caPNIxYgYyNkuNIU0A4aCRJdk02KqyvaK0izzMtK26-MFzVHVDnkWkiTEM3JbjjWiFMiMyXbY8STeHgH5Ql8eJLQyE44KBq_FD36MvrDM7cv2XGnb2DF_ameTr2d2pB-HqgY-hXBhKbGAKMPIYJUb16UOmM2eGHXSPg5HuNnmtRTdanu6aab1MaUx8b76Q8BvnFeZ71qYjAs_N6OjpVzAMT4gXg6skP0EA_IcqOLp8d3XUw; SMAUTH=eyJpZCI6IjM1NmY0YjM0LWZmYTYtNDI3Ny1iMWM2LTYyN2Q3ODZhMTcwOSIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Nzc1ODQyM30=; qrator_jsr=1687786368.368.7ZnHe4p82cgvJqj0-on3tbc845s7q4st189c8lth5ru041hoj-00; qrator_ssid=1687786370.081.6XB1Ue3rHbIuz63Z-263km4s1sfq63f27pco6p8b28ufl4r4s; qrator_jsid=1687786368.368.7ZnHe4p82cgvJqj0-if8ajme424kb7h7umvi68qpkdna35okk',
      'dnt': '1',
      'referer': 'https://www.sportmaster.ru/product/27888390299/',
      'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      'x-sm-accept-language': 'ru-RU',
      'x-sm-request-id': '342423be-cbfc',
      'x-sm-tracing-id': '2cc32140-51859'
    }
  }]
  const productOptionsLinkArr = productOptions[0].split('/')
  productOptionsLinkArr[productOptionsLinkArr.length - 1] = productId || ''
  productOptions[0] = productOptionsLinkArr.join('/')
  const productOptionsRefererArr = productOptions[1]['headers']['referer'].split('/')
  productOptionsRefererArr[productOptionsRefererArr.length - 2] = productId || '' + '/'
  productOptions[1]['headers']['referer'] = productOptionsRefererArr.join('/')

  return productId
    ? productOptions
    : gender === 'men'
      ? menOptions
      : womenOptions

}
