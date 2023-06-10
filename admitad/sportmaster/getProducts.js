const axios = require('axios')
const sleep = require('await-sleep')
const getTransliterate = require('./getTransliterate')
const getDeeplinks = require('./getDeeplinks')
const dbWrite = require('./dbWrite')

// опшнсы в запрос в зависимости от пола
const menOptions = [
  'https://www.sportmaster.ru/web-api/v1/catalog/',
  {
    'url': '/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,46255830299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299&page=2',
    'page': 1
  },
  {
    headers: {
      'authority': 'www.sportmaster.ru',
      'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
      'cookie': 'UDID=3a5ba8db-2639-456f-a358-e9e7dd516168; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMDVhZjI3OC1hMWVhLTQ2ZWEtYTEzNS0zMWJjZmFhYzk0ZmUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjgyODYwNTE4LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjU0ZTI5YjI2LTJkYTMtNGJkNi1hNGI3LTYwMzFmMDAzYzlmNiIsImFuUCI6ImVmN2ZkNDZjLWQwZTctNDRlOC04MzU5LTkwNzgwNTJhODQwZiIsImFuVSI6IjEwMDAwMDAwNjAzMTM3Nzc4MyIsImNhblAiOiJBSUFXaWdQeGNrMGh6WU9LWXNxY2hTRHZIeTE2eWtPcFV6RTlzOXVaV0h1elRlRWViWGJLeEpmS01QREtKa1hac2paa3FXUTdIOFlqdmRNNnBrT0VoT3lMK3o3Q3Y4QWZlNHVhZG04eHNsUDQ3RnRMVjJCaGoxS0EvbER5QTlDVkJrV0FldjJjbjl0WTRndkRsNWhPbmxNall1Njg0ek9wUVNGRW9GT1ZvQU84bUtWQkw5T0RCUVova0xOcGpiejVINjFxdmFiS3BmSjEvcHpnUmlSRGtnTlBpcEtJRG5CcTdrYzQ5UzRHeSsyWTQraXVGbEhFNWZjMGJ0anBHZk1zVVAwPSIsImNhblQiOiJBSUNXUTNGaGI2em81bmlmbHJ2OHY0VmVNT0Qva1pFcjFicG9wQlpHTjJmWUVOSkRvZlVVN3NiSFNXY3J5R1lLVXZ3dW5obFdrR05zWFA5cE0yWThVUFFNR2Q1NDRtaTRyQnduUUFWRDNmeDN6cHJ3NmptUkVucXR3SXhPdmttc0M5dHVMTWpDNHZ4M1hmOXlwQ0RlU2o2NzJjNmhtdFFCZUxaWkFQbS9VR3JYVE5qRDV5ZXYxU1AxenBQK2RxVS95R2JTbjR4T2NlNHNoa1ZoY1FtTU9COUwvQWV5VzNNUEZFN3FKQnZ0RmNaa3VZV1gyZ2RVRHlvU3FvZUd4YVJKMk1FPSIsInYiOiJWMiJ9.BwW0N_Ze3OgHZk7ny5tCJR-EUyX7yHgWYNNmKH03qNN92Tq8pUWMne80Q2s3dTB1mX-jPPHAc_HbgMyRB0NB6XKLj91pwtSxGmpyVKKfHZ895ckbEEqo4TOvDA24c6-FJ1E1GtHhbKWYJzTiakGkG5A5bM_DSkatHH82Mw5ScS2PQG6AIONr7gNEtoKtu3t8ReEUO6eiOaCAyLioAReKFTyOefld_rqIjHSbtgRGr6SkGN8sdbS2iWS5_4EEOVOpnBtYHw72jn5yohNKBV6CHtj7SWozg-6ikn68kRcK_fZaEIyLaqQpC3rh0LkWhv_CTAqxKJATYWal1PCyGH5jgw; SMAUTH=eyJpZCI6IjE5ZTMxYTc5LWMwYTMtNGM2MC05MzYzLTFlNDkyNWE3ODA0OCIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Mjg2MDUxOH0=; srv_id=9c935903a1a5983603abc5cf9e24b037; qrator_jsid=1686408584.930.AHhfZrw3zYIjnP6l-up8l3vaja0e44ea90m1oeiqmbcpajnto',
      'dnt': '1',
      'origin': 'https://www.sportmaster.ru',
      'referer': 'https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,46255830299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299&page=2',
      'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      'x-sm-accept-language': 'ru-RU',
      'x-sm-request-id': 'f6f50632-4729',
      'x-sm-tracing-id': 'baea722f-9171885'
    }
  }
]
const womenOptions = [
  'https://www.sportmaster.ru/web-api/v1/catalog/',
  {
    'url': '/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_zhenschiny&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,46255830299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299&watched=1&page=2',
    'page': 1
  },
  {
    headers: {
      'authority': 'www.sportmaster.ru',
      'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
      'cookie': 'UDID=3a5ba8db-2639-456f-a358-e9e7dd516168; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMDVhZjI3OC1hMWVhLTQ2ZWEtYTEzNS0zMWJjZmFhYzk0ZmUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjgyODYwNTE4LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjU0ZTI5YjI2LTJkYTMtNGJkNi1hNGI3LTYwMzFmMDAzYzlmNiIsImFuUCI6ImVmN2ZkNDZjLWQwZTctNDRlOC04MzU5LTkwNzgwNTJhODQwZiIsImFuVSI6IjEwMDAwMDAwNjAzMTM3Nzc4MyIsImNhblAiOiJBSUFXaWdQeGNrMGh6WU9LWXNxY2hTRHZIeTE2eWtPcFV6RTlzOXVaV0h1elRlRWViWGJLeEpmS01QREtKa1hac2paa3FXUTdIOFlqdmRNNnBrT0VoT3lMK3o3Q3Y4QWZlNHVhZG04eHNsUDQ3RnRMVjJCaGoxS0EvbER5QTlDVkJrV0FldjJjbjl0WTRndkRsNWhPbmxNall1Njg0ek9wUVNGRW9GT1ZvQU84bUtWQkw5T0RCUVova0xOcGpiejVINjFxdmFiS3BmSjEvcHpnUmlSRGtnTlBpcEtJRG5CcTdrYzQ5UzRHeSsyWTQraXVGbEhFNWZjMGJ0anBHZk1zVVAwPSIsImNhblQiOiJBSUNXUTNGaGI2em81bmlmbHJ2OHY0VmVNT0Qva1pFcjFicG9wQlpHTjJmWUVOSkRvZlVVN3NiSFNXY3J5R1lLVXZ3dW5obFdrR05zWFA5cE0yWThVUFFNR2Q1NDRtaTRyQnduUUFWRDNmeDN6cHJ3NmptUkVucXR3SXhPdmttc0M5dHVMTWpDNHZ4M1hmOXlwQ0RlU2o2NzJjNmhtdFFCZUxaWkFQbS9VR3JYVE5qRDV5ZXYxU1AxenBQK2RxVS95R2JTbjR4T2NlNHNoa1ZoY1FtTU9COUwvQWV5VzNNUEZFN3FKQnZ0RmNaa3VZV1gyZ2RVRHlvU3FvZUd4YVJKMk1FPSIsInYiOiJWMiJ9.BwW0N_Ze3OgHZk7ny5tCJR-EUyX7yHgWYNNmKH03qNN92Tq8pUWMne80Q2s3dTB1mX-jPPHAc_HbgMyRB0NB6XKLj91pwtSxGmpyVKKfHZ895ckbEEqo4TOvDA24c6-FJ1E1GtHhbKWYJzTiakGkG5A5bM_DSkatHH82Mw5ScS2PQG6AIONr7gNEtoKtu3t8ReEUO6eiOaCAyLioAReKFTyOefld_rqIjHSbtgRGr6SkGN8sdbS2iWS5_4EEOVOpnBtYHw72jn5yohNKBV6CHtj7SWozg-6ikn68kRcK_fZaEIyLaqQpC3rh0LkWhv_CTAqxKJATYWal1PCyGH5jgw; SMAUTH=eyJpZCI6IjE5ZTMxYTc5LWMwYTMtNGM2MC05MzYzLTFlNDkyNWE3ODA0OCIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Mjg2MDUxOH0=; srv_id=9c935903a1a5983603abc5cf9e24b037; qrator_jsid=1686408584.930.AHhfZrw3zYIjnP6l-up8l3vaja0e44ea90m1oeiqmbcpajnto',
      'dnt': '1',
      'origin': 'https://www.sportmaster.ru',
      'referer': 'https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_zhenschiny&f-brand=134913850299,134921380299,134922180299,134923980299,134934380299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,46255830299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299&page=2&watched=1',
      'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      'x-sm-accept-language': 'ru-RU',
      'x-sm-request-id': '632188df-2770',
      'x-sm-tracing-id': 'b8e86394-11546289'
    }
  }
]


let products = []


module.exports = async function getProducts (gender) {

  // получаю опшнсы в зависимости от пола
  const options = gender === 'men' ? menOptions : womenOptions
  const res = await axios.post( ...options )

  // получаю количество страниц и товары первой страницы
  const pagesCount = res.data.pagination.pagesCount
  const productsOnePage = res.data.products

  // информирую что на первой странице
  console.log('1 page')

  // прохожусь по товарам первой страницы
  for (let productProto of productsOnePage.slice(0,1)) {

    // получаю данные по товару
    // + productProto.productId
    const { data } = await axios.get(
      'https://www.sportmaster.ru/ga-api/v1/product-view/' + productProto.productId, {
        headers: {
          'authority': 'www.sportmaster.ru',
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
          'cookie': 'UDID=3a5ba8db-2639-456f-a358-e9e7dd516168; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMDVhZjI3OC1hMWVhLTQ2ZWEtYTEzNS0zMWJjZmFhYzk0ZmUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjgyODYwNTE4LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjU0ZTI5YjI2LTJkYTMtNGJkNi1hNGI3LTYwMzFmMDAzYzlmNiIsImFuUCI6ImVmN2ZkNDZjLWQwZTctNDRlOC04MzU5LTkwNzgwNTJhODQwZiIsImFuVSI6IjEwMDAwMDAwNjAzMTM3Nzc4MyIsImNhblAiOiJBSUFXaWdQeGNrMGh6WU9LWXNxY2hTRHZIeTE2eWtPcFV6RTlzOXVaV0h1elRlRWViWGJLeEpmS01QREtKa1hac2paa3FXUTdIOFlqdmRNNnBrT0VoT3lMK3o3Q3Y4QWZlNHVhZG04eHNsUDQ3RnRMVjJCaGoxS0EvbER5QTlDVkJrV0FldjJjbjl0WTRndkRsNWhPbmxNall1Njg0ek9wUVNGRW9GT1ZvQU84bUtWQkw5T0RCUVova0xOcGpiejVINjFxdmFiS3BmSjEvcHpnUmlSRGtnTlBpcEtJRG5CcTdrYzQ5UzRHeSsyWTQraXVGbEhFNWZjMGJ0anBHZk1zVVAwPSIsImNhblQiOiJBSUNXUTNGaGI2em81bmlmbHJ2OHY0VmVNT0Qva1pFcjFicG9wQlpHTjJmWUVOSkRvZlVVN3NiSFNXY3J5R1lLVXZ3dW5obFdrR05zWFA5cE0yWThVUFFNR2Q1NDRtaTRyQnduUUFWRDNmeDN6cHJ3NmptUkVucXR3SXhPdmttc0M5dHVMTWpDNHZ4M1hmOXlwQ0RlU2o2NzJjNmhtdFFCZUxaWkFQbS9VR3JYVE5qRDV5ZXYxU1AxenBQK2RxVS95R2JTbjR4T2NlNHNoa1ZoY1FtTU9COUwvQWV5VzNNUEZFN3FKQnZ0RmNaa3VZV1gyZ2RVRHlvU3FvZUd4YVJKMk1FPSIsInYiOiJWMiJ9.BwW0N_Ze3OgHZk7ny5tCJR-EUyX7yHgWYNNmKH03qNN92Tq8pUWMne80Q2s3dTB1mX-jPPHAc_HbgMyRB0NB6XKLj91pwtSxGmpyVKKfHZ895ckbEEqo4TOvDA24c6-FJ1E1GtHhbKWYJzTiakGkG5A5bM_DSkatHH82Mw5ScS2PQG6AIONr7gNEtoKtu3t8ReEUO6eiOaCAyLioAReKFTyOefld_rqIjHSbtgRGr6SkGN8sdbS2iWS5_4EEOVOpnBtYHw72jn5yohNKBV6CHtj7SWozg-6ikn68kRcK_fZaEIyLaqQpC3rh0LkWhv_CTAqxKJATYWal1PCyGH5jgw; SMAUTH=eyJpZCI6IjE5ZTMxYTc5LWMwYTMtNGM2MC05MzYzLTFlNDkyNWE3ODA0OCIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Mjg2MDUxOH0=; srv_id=9c935903a1a5983603abc5cf9e24b037; qrator_jsid=1686408584.930.AHhfZrw3zYIjnP6l-up8l3vaja0e44ea90m1oeiqmbcpajnto',
          'dnt': '1',
          'referer': 'https://www.sportmaster.ru/product/' + productProto.productId + '/',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'x-sm-accept-language': 'ru-RU',
          'x-sm-request-id': 'fff045fd-ce57',
          'x-sm-tracing-id': '065c3fc9-5879289'
        }
      }
    )

    products.push({
      id: Math.floor(Math.random() * 9e9) + 1e9, age: 'Взрослый', benefit: productProto.price.discountAmount,
      name: productProto.name, shop: 'sportmaster', sizes: productProto.sizes.map(sizeObj => sizeObj?.sizeEur || sizeObj.sizeRus),
      oldprice: productProto.price.catalog, pp: 'admitad', price: productProto.price.retail, sale: productProto.price.discountRate,
      color: productProto.color, color_t: getTransliterate(productProto.color), installment: true, images: productProto.media.photoUrls,
      like: 0, link: 'https://www.sportmaster.ru/product/' + productProto.productId + '/', brand: data.productBrand, gender: data.productGender,
      brandCountry: false, brandCountry_t: false, category: data.productType, category_t: getTransliterate(data.productType), country: false,
      country_t: false, delivery: ['ru', 'rb', 'kz', 'am', 'kg'], deliveryPrice: false, description: false, info: false, season: false, season_t: false,
      style: 'Спортивный стиль', style_t: getTransliterate('Спортивный стиль'), structure: false, subcategory: data.productGroup,
      subcategory_t: getTransliterate(data.productGroup)
    })

    // информирую о кол-ве собранных товаров
    console.log(products.length, ' products')

    await sleep(1000)
  }

  // прохожусь по остальным страницам пагинации
  for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2).slice(0,1)) {

    // информирую на какой странице
    console.log(page + ' page')

    // получаю продукты на странице
    options[1].page = page
    const resSecond = await axios.post( ...options )
    const productsOtherPage = resSecond.data.products

    // прохожусь по товарам страницы
    for (let productProto of productsOtherPage.slice(0,1)) {

      // получаю данные по товару
      // + productProto.productId
      const { data } = await axios.get(
        'https://www.sportmaster.ru/ga-api/v1/product-view/' + productProto.productId, {
          headers: {
            'authority': 'www.sportmaster.ru',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
            'cookie': 'UDID=3a5ba8db-2639-456f-a358-e9e7dd516168; SMID=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlMDVhZjI3OC1hMWVhLTQ2ZWEtYTEzNS0zMWJjZmFhYzk0ZmUiLCJpc3MiOiJTTTMwIiwiaWF0IjoxNjgyODYwNTE4LCJhdWQiOiJzcG9ydG1hc3RlciIsImFuVCI6IjU0ZTI5YjI2LTJkYTMtNGJkNi1hNGI3LTYwMzFmMDAzYzlmNiIsImFuUCI6ImVmN2ZkNDZjLWQwZTctNDRlOC04MzU5LTkwNzgwNTJhODQwZiIsImFuVSI6IjEwMDAwMDAwNjAzMTM3Nzc4MyIsImNhblAiOiJBSUFXaWdQeGNrMGh6WU9LWXNxY2hTRHZIeTE2eWtPcFV6RTlzOXVaV0h1elRlRWViWGJLeEpmS01QREtKa1hac2paa3FXUTdIOFlqdmRNNnBrT0VoT3lMK3o3Q3Y4QWZlNHVhZG04eHNsUDQ3RnRMVjJCaGoxS0EvbER5QTlDVkJrV0FldjJjbjl0WTRndkRsNWhPbmxNall1Njg0ek9wUVNGRW9GT1ZvQU84bUtWQkw5T0RCUVova0xOcGpiejVINjFxdmFiS3BmSjEvcHpnUmlSRGtnTlBpcEtJRG5CcTdrYzQ5UzRHeSsyWTQraXVGbEhFNWZjMGJ0anBHZk1zVVAwPSIsImNhblQiOiJBSUNXUTNGaGI2em81bmlmbHJ2OHY0VmVNT0Qva1pFcjFicG9wQlpHTjJmWUVOSkRvZlVVN3NiSFNXY3J5R1lLVXZ3dW5obFdrR05zWFA5cE0yWThVUFFNR2Q1NDRtaTRyQnduUUFWRDNmeDN6cHJ3NmptUkVucXR3SXhPdmttc0M5dHVMTWpDNHZ4M1hmOXlwQ0RlU2o2NzJjNmhtdFFCZUxaWkFQbS9VR3JYVE5qRDV5ZXYxU1AxenBQK2RxVS95R2JTbjR4T2NlNHNoa1ZoY1FtTU9COUwvQWV5VzNNUEZFN3FKQnZ0RmNaa3VZV1gyZ2RVRHlvU3FvZUd4YVJKMk1FPSIsInYiOiJWMiJ9.BwW0N_Ze3OgHZk7ny5tCJR-EUyX7yHgWYNNmKH03qNN92Tq8pUWMne80Q2s3dTB1mX-jPPHAc_HbgMyRB0NB6XKLj91pwtSxGmpyVKKfHZ895ckbEEqo4TOvDA24c6-FJ1E1GtHhbKWYJzTiakGkG5A5bM_DSkatHH82Mw5ScS2PQG6AIONr7gNEtoKtu3t8ReEUO6eiOaCAyLioAReKFTyOefld_rqIjHSbtgRGr6SkGN8sdbS2iWS5_4EEOVOpnBtYHw72jn5yohNKBV6CHtj7SWozg-6ikn68kRcK_fZaEIyLaqQpC3rh0LkWhv_CTAqxKJATYWal1PCyGH5jgw; SMAUTH=eyJpZCI6IjE5ZTMxYTc5LWMwYTMtNGM2MC05MzYzLTFlNDkyNWE3ODA0OCIsInN0IjoiUkVUVVJORUQiLCJ0bSI6MTY4Mjg2MDUxOH0=; srv_id=9c935903a1a5983603abc5cf9e24b037; qrator_jsid=1686408584.930.AHhfZrw3zYIjnP6l-up8l3vaja0e44ea90m1oeiqmbcpajnto',
            'dnt': '1',
            'referer': 'https://www.sportmaster.ru/product/' + productProto.productId + '/',
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'x-sm-accept-language': 'ru-RU',
            'x-sm-request-id': 'fff045fd-ce57',
            'x-sm-tracing-id': '065c3fc9-5879289'
          }
        }
      )

      products.push({
        id: Math.floor(Math.random() * 9e9) + 1e9, age: 'Взрослый', benefit: productProto.price.discountAmount,
        name: productProto.name, shop: 'sportmaster', sizes: productProto.sizes.map(sizeObj => sizeObj?.sizeEur || sizeObj.sizeRus),
        oldprice: productProto.price.catalog, pp: 'admitad', price: productProto.price.retail, sale: productProto.price.discountRate,
        color: productProto.color, color_t: getTransliterate(productProto.color), installment: true, images: productProto.media.photoUrls,
        like: 0, link: 'https://www.sportmaster.ru/product/' + productProto.productId + '/', brand: data.productBrand, gender: data.productGender,
        brandCountry: false, brandCountry_t: false, category: data.productType, category_t: getTransliterate(data.productType), country: false,
        country_t: false, delivery: ['ru', 'rb', 'kz', 'am', 'kg'], deliveryPrice: false, description: false, info: false, season: false, season_t: false,
        style: 'Спортивный стиль', style_t: getTransliterate('Спортивный стиль'), structure: false, subcategory: data.productGroup,
        subcategory_t: getTransliterate(data.productGroup)
      })
      await sleep(1000)

      // информирую о кол-ве собранных товаров
      console.log(products.length, ' products')
    }
  }

  // записываю товары с партнёрскими ссылками в базу
  console.log('получаю диплинки для товаров')
  const productsTotal = await getDeeplinks(products)
  console.log('записываю в базу мужские товары')
  await dbWrite(productsTotal)
  products = []
}


