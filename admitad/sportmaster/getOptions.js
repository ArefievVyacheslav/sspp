// men https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299
// women https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_zhenschiny&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299
// product https://www.sportmaster.ru/product/27888390299/


module.exports = function getOptions (gender, productId) {

  const menOptions = [
    'https://www.sportmaster.ru/web-api/v1/catalog/',
    {
      'url': '/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299',
      'page': 2
    },
    {
      headers: {
        'authority': 'www.sportmaster.ru',
        'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'cookie': 'UDID=02772c3a-c504-4f1d-b024-8e380b49e073; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMzYzZmZhNi0zNmE0LTQyOTAtOWVmNS1lNGI3YTFlMTgyYzAiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjkyMjY4NjY5LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjAwZTliMzcwLTM3M2UtNGU4Mi04N2VhLWI2ZjUxMmE5Y2ZhMyIsImFuUCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsImFuVSI6IjEwMDAwMDAwNzUwMjYwMjQwNSIsImNhblAiOiJBSUFJa0ZORVRZWklGMjhWNjNnZTJBOXhONitIbEljZ1ZHWjIvaXZiUWROTUFrVk92aC9ZT1lIM0k3d3ZEYnFnaUpjdnhLRTlaNVpVQ1N3Rm9Fa3VPV3RudGdWSUxNYk5XOEY1YkFhbjd3ZVJBN1BLemkyekVCY3pJYVNDVVdQQzN1aHRpMlVvT3VVOWQ5THhnVXhxWUpsMitjUWZBQ0szaGFpMTlPdTVlaXlydVd1VSs2OW1KTis2cmhqTWFDdmFQTGduVEs0c2NCb1NXeWkvejY1QUxZWHZLK05wTzRMYlAwSEQ1bTczU2R4VXZtY3FxVnpvRDFUNjJoaStrZm84ejlvPSIsImNhblQiOiJBSUFBSzNmWWpDQUxJZzN1WUR6TnRzWjZvaDh0SWVIRGhLQ1pLUjRUUUdLclFWQlhnek95eGFpQkJiOHJRZ25uVmFOMUVNaUNjTHN2b0tra0pmNENtdzZCSis4RncvQTJtZ1FWNURWb0hDNTVkVUdpSUVwUEZkSE5zZi8zZUNsTk8rbzVQU1JWT3JoRzBYUlZRL05JRks4UTVJdEdqNFNaeldOMXBpZzNyenVQT2ZOc1dwMkQ5YmJRS3dldWs2WDRSaW5RdUdlUXpPb3M1cE5SZjZnQ1dJMjNhdWtpSXpmdmU3M1JvZnd2TVMybWpLcXlqM1Qvd1picm4xM3FNYzJtMGI4PSIsInYiOiJWMiJ9.W-rXX_3b1Tnsbgd29AuUQYXPgDhgAploVOx2ZbjvUd0JlErmIMh5zHhIRLxCp5IGyujC2ZAtIxI3ucwdVsE4lWZkUnnli0gNm9so5oD_4NtivMyjycgKOPS7gO7au72_F-vYe4rVW7r1l6jaPn7i6b5ZwDG1y5aE6rPp6bS4kGje1X-FE1_SHFC-m5pJN7rqJF3pjoA_RZnNHRJ_5FWwfs7RGstaYJDUjkU4hCHo9uBU4ru36eU08mGZKD0rwkFGAz_AYqM15wrEYc4hw23m_WUsJKZI2eLITVMdBQlMZ3oANvgVJnkVeOHe6OHMCmyRPwYe0kSRRDk5ZkpKCNpf5g; SMAUTH=eyJpZCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY5MjI5ODQ4MH0=; qrator_ssid=1692298533.207.01ZmjbXkuGKD9vsC-gvd6kqvsg9cueg47ru6pu7fon1nu5co8; qrator_jsid=1692298529.813.khB2qbq4updwhPa7-q7j22tt03m5bqgv0v1h1uc7ml42l1q0j',
        'dnt': '1',
        'origin': 'https://www.sportmaster.ru',
        'referer': 'https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'x-sm-accept-language': 'ru-RU',
        'x-sm-request-id': '56f42e50-1b13',
        'x-sm-tracing-id': 'd8d2f0cd-3825805'
      }
    }
  ]
  menOptions[1].page = 1

  const womenOptions = [
    'https://www.sportmaster.ru/web-api/v1/catalog/',
    {
      'url': '/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_zhenschiny&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299',
      'page': 2
    },
    {
      headers: {
        'authority': 'www.sportmaster.ru',
        'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'cookie': 'UDID=02772c3a-c504-4f1d-b024-8e380b49e073; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMzYzZmZhNi0zNmE0LTQyOTAtOWVmNS1lNGI3YTFlMTgyYzAiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjkyMjY4NjY5LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjAwZTliMzcwLTM3M2UtNGU4Mi04N2VhLWI2ZjUxMmE5Y2ZhMyIsImFuUCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsImFuVSI6IjEwMDAwMDAwNzUwMjYwMjQwNSIsImNhblAiOiJBSUFJa0ZORVRZWklGMjhWNjNnZTJBOXhONitIbEljZ1ZHWjIvaXZiUWROTUFrVk92aC9ZT1lIM0k3d3ZEYnFnaUpjdnhLRTlaNVpVQ1N3Rm9Fa3VPV3RudGdWSUxNYk5XOEY1YkFhbjd3ZVJBN1BLemkyekVCY3pJYVNDVVdQQzN1aHRpMlVvT3VVOWQ5THhnVXhxWUpsMitjUWZBQ0szaGFpMTlPdTVlaXlydVd1VSs2OW1KTis2cmhqTWFDdmFQTGduVEs0c2NCb1NXeWkvejY1QUxZWHZLK05wTzRMYlAwSEQ1bTczU2R4VXZtY3FxVnpvRDFUNjJoaStrZm84ejlvPSIsImNhblQiOiJBSUFBSzNmWWpDQUxJZzN1WUR6TnRzWjZvaDh0SWVIRGhLQ1pLUjRUUUdLclFWQlhnek95eGFpQkJiOHJRZ25uVmFOMUVNaUNjTHN2b0tra0pmNENtdzZCSis4RncvQTJtZ1FWNURWb0hDNTVkVUdpSUVwUEZkSE5zZi8zZUNsTk8rbzVQU1JWT3JoRzBYUlZRL05JRks4UTVJdEdqNFNaeldOMXBpZzNyenVQT2ZOc1dwMkQ5YmJRS3dldWs2WDRSaW5RdUdlUXpPb3M1cE5SZjZnQ1dJMjNhdWtpSXpmdmU3M1JvZnd2TVMybWpLcXlqM1Qvd1picm4xM3FNYzJtMGI4PSIsInYiOiJWMiJ9.W-rXX_3b1Tnsbgd29AuUQYXPgDhgAploVOx2ZbjvUd0JlErmIMh5zHhIRLxCp5IGyujC2ZAtIxI3ucwdVsE4lWZkUnnli0gNm9so5oD_4NtivMyjycgKOPS7gO7au72_F-vYe4rVW7r1l6jaPn7i6b5ZwDG1y5aE6rPp6bS4kGje1X-FE1_SHFC-m5pJN7rqJF3pjoA_RZnNHRJ_5FWwfs7RGstaYJDUjkU4hCHo9uBU4ru36eU08mGZKD0rwkFGAz_AYqM15wrEYc4hw23m_WUsJKZI2eLITVMdBQlMZ3oANvgVJnkVeOHe6OHMCmyRPwYe0kSRRDk5ZkpKCNpf5g; SMAUTH=eyJpZCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY5MjI5ODQ4MH0=; qrator_ssid=1692298533.207.01ZmjbXkuGKD9vsC-gvd6kqvsg9cueg47ru6pu7fon1nu5co8; qrator_jsid=1692298529.813.khB2qbq4updwhPa7-q7j22tt03m5bqgv0v1h1uc7ml42l1q0j',
        'dnt': '1',
        'origin': 'https://www.sportmaster.ru',
        'referer': 'https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_zhenschiny&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'x-sm-accept-language': 'ru-RU',
        'x-sm-request-id': 'e9a8b70b-9cf2',
        'x-sm-tracing-id': '95644ffe-3023776'
      }
    }
  ]
  womenOptions[1].page = 1

  const productOptions = ['https://www.sportmaster.ru/ga-api/v1/product-view/27888390299', {
    headers: {
      'authority': 'www.sportmaster.ru',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
      'cookie': 'UDID=02772c3a-c504-4f1d-b024-8e380b49e073; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMzYzZmZhNi0zNmE0LTQyOTAtOWVmNS1lNGI3YTFlMTgyYzAiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjkyMjY4NjY5LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjAwZTliMzcwLTM3M2UtNGU4Mi04N2VhLWI2ZjUxMmE5Y2ZhMyIsImFuUCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsImFuVSI6IjEwMDAwMDAwNzUwMjYwMjQwNSIsImNhblAiOiJBSUFJa0ZORVRZWklGMjhWNjNnZTJBOXhONitIbEljZ1ZHWjIvaXZiUWROTUFrVk92aC9ZT1lIM0k3d3ZEYnFnaUpjdnhLRTlaNVpVQ1N3Rm9Fa3VPV3RudGdWSUxNYk5XOEY1YkFhbjd3ZVJBN1BLemkyekVCY3pJYVNDVVdQQzN1aHRpMlVvT3VVOWQ5THhnVXhxWUpsMitjUWZBQ0szaGFpMTlPdTVlaXlydVd1VSs2OW1KTis2cmhqTWFDdmFQTGduVEs0c2NCb1NXeWkvejY1QUxZWHZLK05wTzRMYlAwSEQ1bTczU2R4VXZtY3FxVnpvRDFUNjJoaStrZm84ejlvPSIsImNhblQiOiJBSUFBSzNmWWpDQUxJZzN1WUR6TnRzWjZvaDh0SWVIRGhLQ1pLUjRUUUdLclFWQlhnek95eGFpQkJiOHJRZ25uVmFOMUVNaUNjTHN2b0tra0pmNENtdzZCSis4RncvQTJtZ1FWNURWb0hDNTVkVUdpSUVwUEZkSE5zZi8zZUNsTk8rbzVQU1JWT3JoRzBYUlZRL05JRks4UTVJdEdqNFNaeldOMXBpZzNyenVQT2ZOc1dwMkQ5YmJRS3dldWs2WDRSaW5RdUdlUXpPb3M1cE5SZjZnQ1dJMjNhdWtpSXpmdmU3M1JvZnd2TVMybWpLcXlqM1Qvd1picm4xM3FNYzJtMGI4PSIsInYiOiJWMiJ9.W-rXX_3b1Tnsbgd29AuUQYXPgDhgAploVOx2ZbjvUd0JlErmIMh5zHhIRLxCp5IGyujC2ZAtIxI3ucwdVsE4lWZkUnnli0gNm9so5oD_4NtivMyjycgKOPS7gO7au72_F-vYe4rVW7r1l6jaPn7i6b5ZwDG1y5aE6rPp6bS4kGje1X-FE1_SHFC-m5pJN7rqJF3pjoA_RZnNHRJ_5FWwfs7RGstaYJDUjkU4hCHo9uBU4ru36eU08mGZKD0rwkFGAz_AYqM15wrEYc4hw23m_WUsJKZI2eLITVMdBQlMZ3oANvgVJnkVeOHe6OHMCmyRPwYe0kSRRDk5ZkpKCNpf5g; SMAUTH=eyJpZCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY5MjI5ODQ4MH0=; qrator_ssid=1692298533.207.01ZmjbXkuGKD9vsC-gvd6kqvsg9cueg47ru6pu7fon1nu5co8; qrator_jsid=1692298529.813.khB2qbq4updwhPa7-q7j22tt03m5bqgv0v1h1uc7ml42l1q0j',
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
      'x-sm-request-id': '4d292d0e-0e04',
      'x-sm-tracing-id': '4c151b9b-3835633'
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
