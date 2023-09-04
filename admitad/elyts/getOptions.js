// men https://elyts.ru/catalog/man/sale/filter/brand-is-alpha%20industries-or-armani%20jeans-or-billionaire-or-brioni-or-carhartt%20wip-or-clarks%20originals-or-converse-or-corneliani-or-diesel-or-dr.%20martens-or-dsquared2-or-ea7-or-emporio%20armani-or-emporio%20armani%20underwear-or-frankie%20morello-or-fred%20perry-or-geox-or-gianfranco%20ferre-or-giorgio%20armani-or-ice%20play-or-just%20cavalli-or-napapijri-or-off-white-or-palm%20angels-or-paul%20smith-or-philippe%20model-or-puma-or-ray%20ban-or-replay-or-roberto%20cavalli-or-saint%20laurent-or-stone%20island-or-strellson-or-the%20north%20face-or-tommy%20hilfiger-or-tommy%20jeans-or-versace-or-versace%20collection-or-versace%20jeans%20couture-or-patrizia%20pepe/?PAGEN_1=2
// women https://elyts.ru/catalog/woman/sale/filter/brand-is-armani%20jeans-or-class%20cavalli-or-converse-or-diesel-or-dior-or-dolce%26gabbana-or-dr.%20martens-or-dsquared2-or-ea7-or-emporio%20armani-or-frankie%20morello-or-fred%20perry-or-furla-or-geox-or-gianfranco%20ferre-or-giorgio%20armani-or-gucci-or-jimmy%20choo-or-just%20cavalli-or-liu%20jo-or-mcq-or-moschino-or-moschino%20love-or-nina%20ricci-or-obey-or-off-white-or-p.a.r.o.s.h.-or-paco%20rabanne-or-palm%20angels-or-philippe%20model-or-replay-or-roberto%20cavalli-or-stella%20mccartney-or-the%20north%20face-or-tommy%20hilfiger-or-tommy%20jeans-or-valentino%20red-or-versace-or-versace%20collection-or-versace%20jeans%20couture-or-patrizia%20pepe/?PAGEN_1=2
// product https://elyts.ru/product/pidjak-strellson-859279-pink/

module.exports = function getOptions (gender, productLink) {

  const menOptions = ['https://elyts.ru/catalog/man/sale/filter/brand-is-alpha%20industries-or-armani%20jeans-or-billionaire-or-brioni-or-carhartt%20wip-or-clarks%20originals-or-converse-or-corneliani-or-diesel-or-dr.%20martens-or-dsquared2-or-ea7-or-emporio%20armani-or-emporio%20armani%20underwear-or-frankie%20morello-or-fred%20perry-or-geox-or-gianfranco%20ferre-or-giorgio%20armani-or-ice%20play-or-just%20cavalli-or-napapijri-or-off-white-or-palm%20angels-or-paul%20smith-or-philippe%20model-or-puma-or-ray%20ban-or-replay-or-roberto%20cavalli-or-saint%20laurent-or-stone%20island-or-strellson-or-the%20north%20face-or-tommy%20hilfiger-or-tommy%20jeans-or-versace-or-versace%20collection-or-versace%20jeans%20couture-or-patrizia%20pepe/', {
    headers: {
      'authority': 'elyts.ru',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
      'cookie': 'IS_AUTH=N; BITRIX_SM_SALE_UID=180282210; _ea_uid=16927811854194699; _ea_udi=-1293063220; rr-VisitorSegment=3%3A2; cookieControl=true; PHPSESSID=rnoQgitjR33LhrK1RLfSUT3F3Z7JSwiJ',
      'dnt': '1',
      'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
  }]
  menOptions[0] += '?PAGEN_1=1'

  const womenOptions = ['https://elyts.ru/catalog/woman/sale/filter/brand-is-armani%20jeans-or-class%20cavalli-or-converse-or-diesel-or-dior-or-dolce%26gabbana-or-dr.%20martens-or-dsquared2-or-ea7-or-emporio%20armani-or-frankie%20morello-or-fred%20perry-or-furla-or-geox-or-gianfranco%20ferre-or-giorgio%20armani-or-gucci-or-jimmy%20choo-or-just%20cavalli-or-liu%20jo-or-mcq-or-moschino-or-moschino%20love-or-nina%20ricci-or-obey-or-off-white-or-p.a.r.o.s.h.-or-paco%20rabanne-or-palm%20angels-or-philippe%20model-or-replay-or-roberto%20cavalli-or-stella%20mccartney-or-the%20north%20face-or-tommy%20hilfiger-or-tommy%20jeans-or-valentino%20red-or-versace-or-versace%20collection-or-versace%20jeans%20couture-or-patrizia%20pepe/', {
    headers: {
      'authority': 'elyts.ru',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
      'cookie': 'IS_AUTH=N; BITRIX_SM_SALE_UID=180282210; _ea_uid=16927811854194699; _ea_udi=-1293063220; rr-VisitorSegment=3%3A2; cookieControl=true; PHPSESSID=rnoQgitjR33LhrK1RLfSUT3F3Z7JSwiJ',
      'dnt': '1',
      'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
  }]
  womenOptions[0] += '?PAGEN_1=1'

  const productOptions = ['https://elyts.ru/product/pidjak-strellson-859279-pink/', {
    headers: {
      'authority': 'elyts.ru',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
      'cookie': 'IS_AUTH=N; BITRIX_SM_SALE_UID=180282210; _ea_uid=16927811854194699; _ea_udi=-1293063220; rr-VisitorSegment=3%3A2; cookieControl=true; PHPSESSID=rnoQgitjR33LhrK1RLfSUT3F3Z7JSwiJ',
      'dnt': '1',
      'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
  }]
  productOptions[0] = productLink

  return productLink
      ? productOptions
      : gender === 'men'
        ? menOptions
        : womenOptions
}
