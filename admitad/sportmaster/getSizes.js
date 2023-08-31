module.exports = function convertSizes(params) {
  const sizeDict = {
    "Плавки": {
      "Мужской": [
        { "40": "2XS" },
        { "40-42": "2XS-XS" },
        { "42": "2XS-XS" },
        { "42-44": "XS" },
        { "44": "XS" },
        { "44-46": "XS-S" },
        { "46": "S" },
        { "46-48": "S-M" },
        { "48": "M" },
        { "48-50": "M-L" },
        { "50-52": "L" },
        { "52-54": "L-XL" },
        { "54": "XL" },
        { "54-56": "XL-2XL" },
        { "56": "2XL" },
        { "58": "3XL" }
      ]
    },
    "Шорты": {
      "Мужской": [
        { "40": "2XS" },
        { "42": "2XS-XS" },
        { "44": "XS" },
        { "46": "S" },
        { "48": "M" },
        { "50-52": "L" },
        { "54": "XL" },
        { "56": "2XL" },
        { "58": "3XL" }
      ],
      "Женский": [
        { "38": "2XS" },
        { "40": "XS" },
        { "42-44": "S" },
        { "46": "M" },
        { "48-50": "L" },
        { "52": "XL" },
        { "54": "2XL" },
        { "56": "3XL" },
        { "58": "4XL" }
      ]
    },
    "Брюки": {
      "Женский": [
        { "38": "2XS" },
        { "38-40": "2XS-XS" },
        { "40": "XS" },
        { "40-42": "XS-S" },
        { "42": "S" },
        { "42-44": "S-M" },
        { "44": "М" },
        { "44-46": "M" },
        { "46": "М" },
        { "46-48": "M-L" },
        { "48": "L" },
        { "48-50": "L" },
        { "50": "L" },
        { "50-52": "L-XL" },
        { "52": "XL" },
        { "52-54": "XL-2XL" },
        { "54": "2XL" },
        { "54-56": "2XL" },
        { "56": "2XL" },
        { "56-58": "2XL-3XL" },
        { "58": "3XL" },
        { "60": "4XL" }
      ],
      "Мужской": [
        { "44": "2XS" },
        { "44-46": "2XS-XS" },
        { "46": "XS" },
        { "46-48": "XS-S" },
        { "48": "S" },
        { "48-50": "S-M" },
        { "50": "M" },
        { "50-52": "M-L" },
        { "52": "L" },
        { "52-54": "L-XL" },
        { "54": "XL" },
        { "54-56": "XL-2XL" },
        { "56": "2XL" },
        { "56-58": "2XL-3XL" },
        { "58": "3XL" }
      ]
    }
    // Добавьте другие подкатегории и их размеры для разных гендеров аналогично
  };

  const { sizes, subcategory, gender } = params;

  if (
    sizeDict.hasOwnProperty(subcategory) &&
    sizeDict[subcategory].hasOwnProperty(gender)
  ) {
    const sizeMappings = sizeDict[subcategory][gender];
    const convertedSizes = [];

    for (const size of sizes) {
      for (const mapping of sizeMappings) {
        if (mapping.hasOwnProperty(size)) {
          convertedSizes.push(mapping[size]);
          break;
        }
      }
    }

    if (convertedSizes.length > 0) {
      return convertedSizes;
    }
  }

  return sizes;
}
