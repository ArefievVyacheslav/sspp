// men https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299
// women https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_zhenschiny&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299
// product https://www.sportmaster.ru/product/27888390299/


module.exports = function getOptions (gender, productId) {

  const menOptions = [
    'https://www.sportmaster.ru/web-api/v1/catalog/',
    {
      'url': '/catalog/sale_/?f-age_gender=age_gender_muzhchiny&f-availability=delivery_wo_exp,exp_delivery&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299&f-cat=cat_aksessuary,cat_obuv,cat_odezhda',
      'page': 2
    },
    {
      headers: {
        'authority': 'www.sportmaster.ru',
        'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'cookie': 'UDID=02772c3a-c504-4f1d-b024-8e380b49e073; SMAUTH=eyJpZCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY5MjI5ODQ4MH0=; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2ODJiMDJkNy1kOTI5LTQ4NzAtOWI5Ni01ZmQ2YjlmMWY2MDciLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjk3NTY3ODUxLCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjMzYjQ3MDQ2LTU2NTItNDVmNC1hNjVhLTJhYjNmM2ZiMWE2OSIsImFuUCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsImFuVSI6IjEwMDAwMDAwNzUwMjYwMjQwNSIsImNhblAiOiJBSUE1d3JGd0kvYjNEZ2c5ZWFXQTZsTnJGakFwdzdBVnFhUHprdEs0T1lZSktCRzJISG15RFM1aFBzTjkza0RIQ1RuVmFlTURPRGJCbHNQZzZlVEpyUGNzbS9nVHZOb1ZUekQrUGZBTGpUSlhvandyMWRxdDhlTkEvRGZ1bjFHcUFaZ0poQ3J0QUdwUGx4WjRUUEVQdTdUYnM4bk9QM2J0Y3huVHFUN0ZBdllTQjhUanBwRjJzejlCOTI3MTV1U3lUQ3EySW5RZ0dZekhYR2x5bjhEa0RERWY5aGluU21LdzAzemNQcnVxUkRZS0dZRjhKSFFCdVNoMXZzL2JrdFZtQ2Q0PSIsImNhblQiOiJBSUF0Nzh2THpUd2FSQU9MRzBXZnJTSUtzeG53c25HM1NURVF2V3pSNnVUb215ZmlmMGxjQU9kVmNvZGI5WC9YSFF6KzNmM2plR3dScFVhb1E1YXpLdm5LN3lmVHprajNJQ0pzL2ozcW1CUkxtR2QxaTAwbVYvVVREK3BHS2tISll5V3dGNTN4LzIwczJWQ0VYS3pncDBmYmlTYU41dTY2cUZmcDBuSEFLTENpWW5yNllnZjA2Z0pmVHh0SEJaN2U2Nk9NS0hGQUxjdUpFVDhheWFqbWx3b2JvcU96Y3hjYnBWTjJNcDNWSGVyUFpPdEc1VXdCbHRxVjVyVUZwQXlxQzBnPSIsInYiOiJWMiJ9.WQerajuUs1KUXRS1266KSC6g4yZ80DAvIgzYpXByhVst8YgWMdLFAH2DJGcBzzEIzW7fm8SfAcoLrVXXZelcegIFtQ7uwpgEN0lGvLXMbVnzpJkHTCexcdsKDPulAQSkDVp2N7KImuO6ATRefaEssBPFrYsa2TLsb_CjwtxgiEBel8yeBfIUQp68I7jqSSXyNDc2rg6x9HyVLPXIhRB6HDemOEKX9qgRx7kyQ_-zzsO7OD-CcHMOIpNRSmmIrCzkr3lbs7PgairoCXHf3FbqmJ4aNzG2_QqZ_OZeY0VO4Ba5fANofhvPMX_TgOKL_uRze4rAtQ3bW_bTyeoEGJ189w; SMAID=9b84464c-7c49-49c7-8099-83a22156f486; qrator_jsr=1699137542.117.Et0WFKKSVlfy7kg6-dvuqoi2uko7gp58gvc96guv3of2t6t1l-00; qrator_ssid=1699137546.309.U2VXNHzYqSlBha0W-dsh7lab4sv25hk6cdbenoid1riir35bk; qrator_jsid=1699137542.117.Et0WFKKSVlfy7kg6-27gejnkac0pstpeo0kstmi3a5s35btf3; userAuth=0; uxs_uid=fc4f4910-7b62-11ee-aa02-492991056ade; spcount=3',
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
        'x-sm-request-id': 'd15511db-c341',
        'x-sm-tracing-id': 'bc91f927-7629637'
      }
    }
  ]
  menOptions[1].page = 1

  const womenOptions = [
    'https://www.sportmaster.ru/web-api/v1/catalog/',
    {
      'url': '/catalog/sale_/?f-age_gender=age_gender_zhenschiny&f-availability=delivery_wo_exp,exp_delivery&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4931900002,4932590002,60052010299&f-cat=cat_aksessuary,cat_obuv,cat_odezhda',
      'page': 2
    },
    {
      headers: {
        'authority': 'www.sportmaster.ru',
        'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
        'cookie': 'UDID=02772c3a-c504-4f1d-b024-8e380b49e073; SMAUTH=eyJpZCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY5MjI5ODQ4MH0=; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2ODJiMDJkNy1kOTI5LTQ4NzAtOWI5Ni01ZmQ2YjlmMWY2MDciLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjk3NTY3ODUxLCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjMzYjQ3MDQ2LTU2NTItNDVmNC1hNjVhLTJhYjNmM2ZiMWE2OSIsImFuUCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsImFuVSI6IjEwMDAwMDAwNzUwMjYwMjQwNSIsImNhblAiOiJBSUE1d3JGd0kvYjNEZ2c5ZWFXQTZsTnJGakFwdzdBVnFhUHprdEs0T1lZSktCRzJISG15RFM1aFBzTjkza0RIQ1RuVmFlTURPRGJCbHNQZzZlVEpyUGNzbS9nVHZOb1ZUekQrUGZBTGpUSlhvandyMWRxdDhlTkEvRGZ1bjFHcUFaZ0poQ3J0QUdwUGx4WjRUUEVQdTdUYnM4bk9QM2J0Y3huVHFUN0ZBdllTQjhUanBwRjJzejlCOTI3MTV1U3lUQ3EySW5RZ0dZekhYR2x5bjhEa0RERWY5aGluU21LdzAzemNQcnVxUkRZS0dZRjhKSFFCdVNoMXZzL2JrdFZtQ2Q0PSIsImNhblQiOiJBSUF0Nzh2THpUd2FSQU9MRzBXZnJTSUtzeG53c25HM1NURVF2V3pSNnVUb215ZmlmMGxjQU9kVmNvZGI5WC9YSFF6KzNmM2plR3dScFVhb1E1YXpLdm5LN3lmVHprajNJQ0pzL2ozcW1CUkxtR2QxaTAwbVYvVVREK3BHS2tISll5V3dGNTN4LzIwczJWQ0VYS3pncDBmYmlTYU41dTY2cUZmcDBuSEFLTENpWW5yNllnZjA2Z0pmVHh0SEJaN2U2Nk9NS0hGQUxjdUpFVDhheWFqbWx3b2JvcU96Y3hjYnBWTjJNcDNWSGVyUFpPdEc1VXdCbHRxVjVyVUZwQXlxQzBnPSIsInYiOiJWMiJ9.WQerajuUs1KUXRS1266KSC6g4yZ80DAvIgzYpXByhVst8YgWMdLFAH2DJGcBzzEIzW7fm8SfAcoLrVXXZelcegIFtQ7uwpgEN0lGvLXMbVnzpJkHTCexcdsKDPulAQSkDVp2N7KImuO6ATRefaEssBPFrYsa2TLsb_CjwtxgiEBel8yeBfIUQp68I7jqSSXyNDc2rg6x9HyVLPXIhRB6HDemOEKX9qgRx7kyQ_-zzsO7OD-CcHMOIpNRSmmIrCzkr3lbs7PgairoCXHf3FbqmJ4aNzG2_QqZ_OZeY0VO4Ba5fANofhvPMX_TgOKL_uRze4rAtQ3bW_bTyeoEGJ189w; SMAID=9b84464c-7c49-49c7-8099-83a22156f486; qrator_jsr=1699137542.117.Et0WFKKSVlfy7kg6-dvuqoi2uko7gp58gvc96guv3of2t6t1l-00; qrator_ssid=1699137546.309.U2VXNHzYqSlBha0W-dsh7lab4sv25hk6cdbenoid1riir35bk; qrator_jsid=1699137542.117.Et0WFKKSVlfy7kg6-27gejnkac0pstpeo0kstmi3a5s35btf3; userAuth=0; uxs_uid=fc4f4910-7b62-11ee-aa02-492991056ade; spcount=3',
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
        'x-sm-request-id': 'de760f7e-403a',
        'x-sm-tracing-id': 'bc91f927-7629302'
      }
    }
  ]
  womenOptions[1].page = 1

  const productOptions = ['https://www.sportmaster.ru/ga-api/v1/products/27888390299', {
    headers: {
      'authority': 'www.sportmaster.ru',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
      'cookie': 'UDID=02772c3a-c504-4f1d-b024-8e380b49e073; SMAUTH=eyJpZCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY5MjI5ODQ4MH0=; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2ODJiMDJkNy1kOTI5LTQ4NzAtOWI5Ni01ZmQ2YjlmMWY2MDciLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjk3NTY3ODUxLCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjMzYjQ3MDQ2LTU2NTItNDVmNC1hNjVhLTJhYjNmM2ZiMWE2OSIsImFuUCI6IjliODQ0NjRjLTdjNDktNDljNy04MDk5LTgzYTIyMTU2ZjQ4NiIsImFuVSI6IjEwMDAwMDAwNzUwMjYwMjQwNSIsImNhblAiOiJBSUE1d3JGd0kvYjNEZ2c5ZWFXQTZsTnJGakFwdzdBVnFhUHprdEs0T1lZSktCRzJISG15RFM1aFBzTjkza0RIQ1RuVmFlTURPRGJCbHNQZzZlVEpyUGNzbS9nVHZOb1ZUekQrUGZBTGpUSlhvandyMWRxdDhlTkEvRGZ1bjFHcUFaZ0poQ3J0QUdwUGx4WjRUUEVQdTdUYnM4bk9QM2J0Y3huVHFUN0ZBdllTQjhUanBwRjJzejlCOTI3MTV1U3lUQ3EySW5RZ0dZekhYR2x5bjhEa0RERWY5aGluU21LdzAzemNQcnVxUkRZS0dZRjhKSFFCdVNoMXZzL2JrdFZtQ2Q0PSIsImNhblQiOiJBSUF0Nzh2THpUd2FSQU9MRzBXZnJTSUtzeG53c25HM1NURVF2V3pSNnVUb215ZmlmMGxjQU9kVmNvZGI5WC9YSFF6KzNmM2plR3dScFVhb1E1YXpLdm5LN3lmVHprajNJQ0pzL2ozcW1CUkxtR2QxaTAwbVYvVVREK3BHS2tISll5V3dGNTN4LzIwczJWQ0VYS3pncDBmYmlTYU41dTY2cUZmcDBuSEFLTENpWW5yNllnZjA2Z0pmVHh0SEJaN2U2Nk9NS0hGQUxjdUpFVDhheWFqbWx3b2JvcU96Y3hjYnBWTjJNcDNWSGVyUFpPdEc1VXdCbHRxVjVyVUZwQXlxQzBnPSIsInYiOiJWMiJ9.WQerajuUs1KUXRS1266KSC6g4yZ80DAvIgzYpXByhVst8YgWMdLFAH2DJGcBzzEIzW7fm8SfAcoLrVXXZelcegIFtQ7uwpgEN0lGvLXMbVnzpJkHTCexcdsKDPulAQSkDVp2N7KImuO6ATRefaEssBPFrYsa2TLsb_CjwtxgiEBel8yeBfIUQp68I7jqSSXyNDc2rg6x9HyVLPXIhRB6HDemOEKX9qgRx7kyQ_-zzsO7OD-CcHMOIpNRSmmIrCzkr3lbs7PgairoCXHf3FbqmJ4aNzG2_QqZ_OZeY0VO4Ba5fANofhvPMX_TgOKL_uRze4rAtQ3bW_bTyeoEGJ189w; SMAID=9b84464c-7c49-49c7-8099-83a22156f486; qrator_jsr=1699137542.117.Et0WFKKSVlfy7kg6-dvuqoi2uko7gp58gvc96guv3of2t6t1l-00; qrator_ssid=1699137546.309.U2VXNHzYqSlBha0W-dsh7lab4sv25hk6cdbenoid1riir35bk; qrator_jsid=1699137542.117.Et0WFKKSVlfy7kg6-27gejnkac0pstpeo0kstmi3a5s35btf3; userAuth=0; uxs_uid=fc4f4910-7b62-11ee-aa02-492991056ade; spcount=3',
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
      'x-sm-request-id': 'f342132b-4099',
      'x-sm-tracing-id': '2364a922-11085305'
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
