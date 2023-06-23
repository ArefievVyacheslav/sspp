// men https://vipavenue.ru/sale/mens/?brands=632397,37,68,69,1174146,90,118,122,133,594271,608081,151,156,1194532,221,250,261,267,275,291,328,356,247491,1036095,388,2022,448,489,497,501,507,619,631,641,2028,247493,696,709,720,723,737,755,782,908,934,951,956,986,991,730
// women https://vipavenue.ru/sale/womens/?brands=632397,37,68,69,90,118,122,133,594271,608081,151,156,250,261,267,275,291,356,247491,1036095,388,2022,448,489,497,501,507,619,631,641,2028,247493,696,709,720,723,737,755,782,908,934,951,991,632400,901997,87,265,481,1036101,618,947744,1184125,730,896204,632395,40075,1105191,869,870,891,892,931,40061,963
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
        'cookie': 'UDID=3a5ba8db-2639-456f-a358-e9e7dd516168; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMDVhZjI3OC1hMWVhLTQ2ZWEtYTEzNS0zMWJjZmFhYzk0ZmUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjgyODYwNTE4LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjU0ZTI5YjI2LTJkYTMtNGJkNi1hNGI3LTYwMzFmMDAzYzlmNiIsImFuUCI6ImVmN2ZkNDZjLWQwZTctNDRlOC04MzU5LTkwNzgwNTJhODQwZiIsImFuVSI6IjEwMDAwMDAwNjAzMTM3Nzc4MyIsImNhblAiOiJBSUFXaWdQeGNrMGh6WU9LWXNxY2hTRHZIeTE2eWtPcFV6RTlzOXVaV0h1elRlRWViWGJLeEpmS01QREtKa1hac2paa3FXUTdIOFlqdmRNNnBrT0VoT3lMK3o3Q3Y4QWZlNHVhZG04eHNsUDQ3RnRMVjJCaGoxS0EvbER5QTlDVkJrV0FldjJjbjl0WTRndkRsNWhPbmxNall1Njg0ek9wUVNGRW9GT1ZvQU84bUtWQkw5T0RCUVova0xOcGpiejVINjFxdmFiS3BmSjEvcHpnUmlSRGtnTlBpcEtJRG5CcTdrYzQ5UzRHeSsyWTQraXVGbEhFNWZjMGJ0anBHZk1zVVAwPSIsImNhblQiOiJBSUNXUTNGaGI2em81bmlmbHJ2OHY0VmVNT0Qva1pFcjFicG9wQlpHTjJmWUVOSkRvZlVVN3NiSFNXY3J5R1lLVXZ3dW5obFdrR05zWFA5cE0yWThVUFFNR2Q1NDRtaTRyQnduUUFWRDNmeDN6cHJ3NmptUkVucXR3SXhPdmttc0M5dHVMTWpDNHZ4M1hmOXlwQ0RlU2o2NzJjNmhtdFFCZUxaWkFQbS9VR3JYVE5qRDV5ZXYxU1AxenBQK2RxVS95R2JTbjR4T2NlNHNoa1ZoY1FtTU9COUwvQWV5VzNNUEZFN3FKQnZ0RmNaa3VZV1gyZ2RVRHlvU3FvZUd4YVJKMk1FPSIsInYiOiJWMiJ9.BwW0N_Ze3OgHZk7ny5tCJR-EUyX7yHgWYNNmKH03qNN92Tq8pUWMne80Q2s3dTB1mX-jPPHAc_HbgMyRB0NB6XKLj91pwtSxGmpyVKKfHZ895ckbEEqo4TOvDA24c6-FJ1E1GtHhbKWYJzTiakGkG5A5bM_DSkatHH82Mw5ScS2PQG6AIONr7gNEtoKtu3t8ReEUO6eiOaCAyLioAReKFTyOefld_rqIjHSbtgRGr6SkGN8sdbS2iWS5_4EEOVOpnBtYHw72jn5yohNKBV6CHtj7SWozg-6ikn68kRcK_fZaEIyLaqQpC3rh0LkWhv_CTAqxKJATYWal1PCyGH5jgw; SMAUTH=eyJpZCI6IjE5ZTMxYTc5LWMwYTMtNGM2MC05MzYzLTFlNDkyNWE3ODA0OCIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Mjg2MDUxOH0=; qrator_jsr=1687088695.872.BOylQIQLlMiPmNHC-c7dqt0ije12sif4meq6oqjra6hn2shnn-00; qrator_jsid=1687088695.872.BOylQIQLlMiPmNHC-02l1dtpe0ci0tj0dbg1h2hg04n4r08vo',
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
        'x-sm-request-id': '01a8473b-4931',
        'x-sm-tracing-id': '0e7ebf76-11670166'
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
        'cookie': 'UDID=3a5ba8db-2639-456f-a358-e9e7dd516168; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMDVhZjI3OC1hMWVhLTQ2ZWEtYTEzNS0zMWJjZmFhYzk0ZmUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjgyODYwNTE4LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjU0ZTI5YjI2LTJkYTMtNGJkNi1hNGI3LTYwMzFmMDAzYzlmNiIsImFuUCI6ImVmN2ZkNDZjLWQwZTctNDRlOC04MzU5LTkwNzgwNTJhODQwZiIsImFuVSI6IjEwMDAwMDAwNjAzMTM3Nzc4MyIsImNhblAiOiJBSUFXaWdQeGNrMGh6WU9LWXNxY2hTRHZIeTE2eWtPcFV6RTlzOXVaV0h1elRlRWViWGJLeEpmS01QREtKa1hac2paa3FXUTdIOFlqdmRNNnBrT0VoT3lMK3o3Q3Y4QWZlNHVhZG04eHNsUDQ3RnRMVjJCaGoxS0EvbER5QTlDVkJrV0FldjJjbjl0WTRndkRsNWhPbmxNall1Njg0ek9wUVNGRW9GT1ZvQU84bUtWQkw5T0RCUVova0xOcGpiejVINjFxdmFiS3BmSjEvcHpnUmlSRGtnTlBpcEtJRG5CcTdrYzQ5UzRHeSsyWTQraXVGbEhFNWZjMGJ0anBHZk1zVVAwPSIsImNhblQiOiJBSUNXUTNGaGI2em81bmlmbHJ2OHY0VmVNT0Qva1pFcjFicG9wQlpHTjJmWUVOSkRvZlVVN3NiSFNXY3J5R1lLVXZ3dW5obFdrR05zWFA5cE0yWThVUFFNR2Q1NDRtaTRyQnduUUFWRDNmeDN6cHJ3NmptUkVucXR3SXhPdmttc0M5dHVMTWpDNHZ4M1hmOXlwQ0RlU2o2NzJjNmhtdFFCZUxaWkFQbS9VR3JYVE5qRDV5ZXYxU1AxenBQK2RxVS95R2JTbjR4T2NlNHNoa1ZoY1FtTU9COUwvQWV5VzNNUEZFN3FKQnZ0RmNaa3VZV1gyZ2RVRHlvU3FvZUd4YVJKMk1FPSIsInYiOiJWMiJ9.BwW0N_Ze3OgHZk7ny5tCJR-EUyX7yHgWYNNmKH03qNN92Tq8pUWMne80Q2s3dTB1mX-jPPHAc_HbgMyRB0NB6XKLj91pwtSxGmpyVKKfHZ895ckbEEqo4TOvDA24c6-FJ1E1GtHhbKWYJzTiakGkG5A5bM_DSkatHH82Mw5ScS2PQG6AIONr7gNEtoKtu3t8ReEUO6eiOaCAyLioAReKFTyOefld_rqIjHSbtgRGr6SkGN8sdbS2iWS5_4EEOVOpnBtYHw72jn5yohNKBV6CHtj7SWozg-6ikn68kRcK_fZaEIyLaqQpC3rh0LkWhv_CTAqxKJATYWal1PCyGH5jgw; SMAUTH=eyJpZCI6IjE5ZTMxYTc5LWMwYTMtNGM2MC05MzYzLTFlNDkyNWE3ODA0OCIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Mjg2MDUxOH0=; qrator_jsr=1687088695.872.BOylQIQLlMiPmNHC-c7dqt0ije12sif4meq6oqjra6hn2shnn-00; qrator_jsid=1687088695.872.BOylQIQLlMiPmNHC-02l1dtpe0ci0tj0dbg1h2hg04n4r08vo',
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
        'x-sm-request-id': '6d2c7064-c670',
        'x-sm-tracing-id': '0b013da3-13335629'
      }
    }
  ]
  womenOptions[1].page = 1

  const productOptions = ['https://www.sportmaster.ru/ga-api/v1/product-view/27888390299', {
    headers: {
      'authority': 'www.sportmaster.ru',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
      'cookie': 'UDID=3a5ba8db-2639-456f-a358-e9e7dd516168; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMDVhZjI3OC1hMWVhLTQ2ZWEtYTEzNS0zMWJjZmFhYzk0ZmUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjgyODYwNTE4LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjU0ZTI5YjI2LTJkYTMtNGJkNi1hNGI3LTYwMzFmMDAzYzlmNiIsImFuUCI6ImVmN2ZkNDZjLWQwZTctNDRlOC04MzU5LTkwNzgwNTJhODQwZiIsImFuVSI6IjEwMDAwMDAwNjAzMTM3Nzc4MyIsImNhblAiOiJBSUFXaWdQeGNrMGh6WU9LWXNxY2hTRHZIeTE2eWtPcFV6RTlzOXVaV0h1elRlRWViWGJLeEpmS01QREtKa1hac2paa3FXUTdIOFlqdmRNNnBrT0VoT3lMK3o3Q3Y4QWZlNHVhZG04eHNsUDQ3RnRMVjJCaGoxS0EvbER5QTlDVkJrV0FldjJjbjl0WTRndkRsNWhPbmxNall1Njg0ek9wUVNGRW9GT1ZvQU84bUtWQkw5T0RCUVova0xOcGpiejVINjFxdmFiS3BmSjEvcHpnUmlSRGtnTlBpcEtJRG5CcTdrYzQ5UzRHeSsyWTQraXVGbEhFNWZjMGJ0anBHZk1zVVAwPSIsImNhblQiOiJBSUNXUTNGaGI2em81bmlmbHJ2OHY0VmVNT0Qva1pFcjFicG9wQlpHTjJmWUVOSkRvZlVVN3NiSFNXY3J5R1lLVXZ3dW5obFdrR05zWFA5cE0yWThVUFFNR2Q1NDRtaTRyQnduUUFWRDNmeDN6cHJ3NmptUkVucXR3SXhPdmttc0M5dHVMTWpDNHZ4M1hmOXlwQ0RlU2o2NzJjNmhtdFFCZUxaWkFQbS9VR3JYVE5qRDV5ZXYxU1AxenBQK2RxVS95R2JTbjR4T2NlNHNoa1ZoY1FtTU9COUwvQWV5VzNNUEZFN3FKQnZ0RmNaa3VZV1gyZ2RVRHlvU3FvZUd4YVJKMk1FPSIsInYiOiJWMiJ9.BwW0N_Ze3OgHZk7ny5tCJR-EUyX7yHgWYNNmKH03qNN92Tq8pUWMne80Q2s3dTB1mX-jPPHAc_HbgMyRB0NB6XKLj91pwtSxGmpyVKKfHZ895ckbEEqo4TOvDA24c6-FJ1E1GtHhbKWYJzTiakGkG5A5bM_DSkatHH82Mw5ScS2PQG6AIONr7gNEtoKtu3t8ReEUO6eiOaCAyLioAReKFTyOefld_rqIjHSbtgRGr6SkGN8sdbS2iWS5_4EEOVOpnBtYHw72jn5yohNKBV6CHtj7SWozg-6ikn68kRcK_fZaEIyLaqQpC3rh0LkWhv_CTAqxKJATYWal1PCyGH5jgw; SMAUTH=eyJpZCI6IjE5ZTMxYTc5LWMwYTMtNGM2MC05MzYzLTFlNDkyNWE3ODA0OCIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Mjg2MDUxOH0=; qrator_jsr=1687088695.872.BOylQIQLlMiPmNHC-c7dqt0ije12sif4meq6oqjra6hn2shnn-00; qrator_jsid=1687088695.872.BOylQIQLlMiPmNHC-02l1dtpe0ci0tj0dbg1h2hg04n4r08vo',
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
      'x-sm-request-id': 'f2b790a4-0656',
      'x-sm-tracing-id': '1606bbdd-11684469'
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