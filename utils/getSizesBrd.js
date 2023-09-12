module.exports = function convertSizes(params) {
  const sizeDict = {
    "QUIKSILVER":{
      "Брюки": {
        "Мужской": [
          { "26": 'XXS' },
          { "27": 'XS' },
          { "28": 'XS' },
          { "29": 'S' },
          { "30": 'S' },
          { "31": 'M' },
          { "32": 'M' },
          { "33": 'L' },
          { "34": 'L' },
          { "35": 'XL' },
          { "36": 'XL' },
          { "37": '2XL' },
          { "38": '2XL' },
          { "39": '3XL' },
          { "40": '3XL' },
          { "41": '4XL' },
          { "42": '4XL' },
          { "42": '5XL' }
        ],
        "Женский": [
          { "24": 'XS' },
          { "25": 'XS' },
          { "26": 'S' },
          { "27": 'S' },
          { "28": 'M' },
          { "29": 'M' },
          { "30": 'L' },
          { "31": 'L' },
          { "32": 'XL' },
          { "33": 'XL' },
          ]
      },
      "Бордшорты": {
        "Мужской": [
          { "26": 'XXS' },
          { "27": 'XS' },
          { "28": 'XS' },
          { "29": 'S' },
          { "30": 'S' },
          { "31": 'M' },
          { "32": 'M' },
          { "33": 'L' },
          { "34": 'L' },
          { "35": 'XL' },
          { "36": 'XL' },
          { "37": '2XL' },
          { "38": '2XL' },
          { "39": '3XL' },
          { "40": '3XL' },
          { "41": '4XL' },
          { "42": '4XL' },
          { "42": '5XL' }
        ]
      },
      "Плавки и шорты для плавания": {
        "Мужской": [
          { "26": 'XXS' },
          { "27": 'XS' },
          { "28": 'XS' },
          { "29": 'S' },
          { "30": 'S' },
          { "31": 'M' },
          { "32": 'M' },
          { "33": 'L' },
          { "34": 'L' },
          { "35": 'XL' },
          { "36": 'XL' },
          { "37": '2XL' },
          { "38": '2XL' },
          { "39": '3XL' },
          { "40": '3XL' },
          { "41": '4XL' },
          { "42": '4XL' },
          { "42": '5XL' }
        ]
      },
      "Шорты": {
        "Мужской": [
          { "26": 'XXS' },
          { "27": 'XS' },
          { "28": 'XS' },
          { "29": 'S' },
          { "30": 'S' },
          { "31": 'M' },
          { "32": 'M' },
          { "33": 'L' },
          { "34": 'L' },
          { "35": 'XL' },
          { "36": 'XL' },
          { "37": '2XL' },
          { "38": '2XL' },
          { "39": '3XL' },
          { "40": '3XL' },
          { "41": '4XL' },
          { "42": '4XL' },
          { "42": '5XL' }
        ],
        "Женский": [
          { "24": 'XS' },
          { "25": 'XS' },
          { "26": 'S' },
          { "27": 'S' },
          { "28": 'M' },
          { "29": 'M' },
          { "30": 'L' },
          { "31": 'L' },
          { "32": 'XL' },
          { "33": 'XL' },
          ]
      }
    },
    "DC SHOES":{
      "Шорты": {
        "Мужской": [
          { "26": 'XXS' },
          { "27": 'XS' },
          { "28": 'XS' },
          { "29": 'S' },
          { "30": 'S' },
          { "31": 'M' },
          { "32": 'M' },
          { "33": 'L' },
          { "34": 'L' },
          { "35": 'XL' },
          { "36": 'XL' },
          { "37": '2XL' },
          { "38": '2XL' },
          { "39": '3XL' },
          { "40": '3XL' },
          { "41": '4XL' },
          { "42": '4XL' },
          { "42": '5XL' }
        ]
      },
      "Бордшорты": {
        "Мужской": [
          { "26": 'XXS' },
          { "27": 'XS' },
          { "28": 'XS' },
          { "29": 'S' },
          { "30": 'S' },
          { "31": 'M' },
          { "32": 'M' },
          { "33": 'L' },
          { "34": 'L' },
          { "35": 'XL' },
          { "36": 'XL' },
          { "37": '2XL' },
          { "38": '2XL' },
          { "39": '3XL' },
          { "40": '3XL' },
          { "41": '4XL' },
          { "42": '4XL' },
          { "42": '5XL' }
        ]
      },
      "Брюки": {
        "Мужской": [
          { "26": 'XXS' },
          { "27": 'XS' },
          { "28": 'XS' },
          { "29": 'S' },
          { "30": 'S' },
          { "31": 'M' },
          { "32": 'M' },
          { "33": 'L' },
          { "34": 'L' },
          { "35": 'XL' },
          { "36": 'XL' },
          { "37": '2XL' },
          { "38": '2XL' },
          { "39": '3XL' },
          { "40": '3XL' },
          { "41": '4XL' },
          { "42": '4XL' },
          { "42": '5XL' },
        ]
      },
      "Кроссовки и кеды": {
        "Мужской": [
          { "4D": '35' },
          { "4.5D": '36' },
          { "5D": '37' },
          { "5.5D": '37,5' },
          { "6D": '38' },
          { "6.5D": '38,5' },
          { "7D": '39' },
          { "7.5D": '39,5' },
          { "8D": '40' },
          { "8.5D": '40,5' },
          { "9D": '41' },
          { "9.5D": '41,5' },
          { "10D": '42' },
          { "10.5D": '42,5' },
          { "11D": '43' },
          { "11.5D": '43,5' },
          { "12D": '44' },
          { "12.5D": '44,5' },
          { "13D": '45' },
          { "14D": '46' },
          { "15D": '47' },
          { "16D": '48' },
          { "17D": '49' },
          { "18D": '50' },
        ]
      }
    },
    "ELEMENT":{
      "Шорты": {
        "Мужской": [
          { "26": 'XS' },
          { "28": 'XS' },
          { "30": 'S' },
          { "31": 'M' },
          { "32": 'M' },
          { "33": 'L' },
          { "34": 'L' },
          { "36": 'XL' }
        ],
        "Женский": [
            { "25": 'XS' },
            { "26": 'S' },
            { "27": 'S' },
            { "28": 'M' },
            { "29": 'M' },
            { "30": 'L' },
            { "31": 'L' },
            { "32": 'XL' }
        ]
      },
      "Брюки": {
        "Женский": [
            { "25": 'XS' },
            { "26": 'S' },
            { "27": 'S' },
            { "28": 'M' },
            { "29": 'M' },
            { "30": 'L' },
            { "31": 'L' },
            { "32": 'XL' }
        ]
      },
      "Кроссовки и кеды": {
        "Мужской": [
          { "5": '36,5' },
          { "5.5": '37' },
          { "6": '38' },
          { "6.5": '38,5' },
          { "7": '39' },
          { "7.5": '40' },
          { "8": '40,5' },
          { "8.5": '41' },
          { "9": '42' },
          { "9.5": '42,5' },
          { "10": '43' },
          { "10.5": '44' },
          { "11": '44,5' },
          { "11.5": '45' },
          { "12": '46' },
          { "13": '47' }
        ]
      }
    },
    "ROXY":{
      "Шорты": {
        "Женский": [
          { "24": 'XS' },
          { "25": 'XS' },
          { "26": 'S' },
          { "27": 'S' },
          { "28": 'M' },
          { "29": 'M' },
          { "30": 'L' },
          { "31": 'L' },
          { "32": 'XL' },
          { "33": 'XL' }
        ]
      },
      "Джинсы": {
        "Женский": [
            { "24": 'XS' },
            { "25": 'XS' },
            { "26": 'S' },
            { "27": 'S' },
            { "28": 'M' },
            { "29": 'M' },
            { "30": 'L' },
            { "31": 'L' },
            { "32": 'XL' },
            { "33": 'XL' }
        ]
      },
      "Гидрообувь": {
        "Женский": [
          { "5": '35' },
          { "6": '36' },
          { "7": '37' },
          { "8": '38' },
          { "8,5": '39' },
          { "9": '39,5' },
          { "10": '41' },
          { "11": '42' },
        ]
      }
    }
  }

  const { sizes, brand, subcategory, gender } = params;

  if (
    sizeDict.hasOwnProperty(brand) && sizeDict[brand].hasOwnProperty(subcategory) &&
      sizeDict[brand][subcategory].hasOwnProperty(gender)
  ) {
    const sizeMappings = sizeDict[brand][subcategory][gender];
    const convertedSizes = [];

    for (const size of sizes) {
      for (const mapping of sizeMappings) {
        if (mapping.hasOwnProperty(size)) {
          convertedSizes.push(mapping[size]);
          break;
        }
      }
    }

    const result = []
    convertedSizes.map(size => {
      if (Array.isArray(size)) result.push(...size)
      else result.push(size.replaceAll('X', 'X').replaceAll('S', 'S'))
    })

    if (result.length > 0) {
      return [...new Set(result)]
    }
  }

  return sizes;
}