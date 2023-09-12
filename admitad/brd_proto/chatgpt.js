const fs = require('fs');
const convertSizes = require('../../utils/getSizesBrd');

let menData = fs.readFileSync('men.json');
let menPproducts = JSON.parse(menData);
let womenData = fs.readFileSync('women.json');
let womenPproducts = JSON.parse(womenData);

const menCategoriesSet = new Set();
const womenCategoriesSet = new Set();
const CategoriesSet = new Set();
menPproducts.forEach(element => {
    console.log(element.images)
    console.log(element.link)
    menCategoriesSet.add( ...element.sizes);
    CategoriesSet.add( ...element.sizes)
    })
womenPproducts.forEach(element => {
    // console.log(element.link)
    // console.log(element.sizes)
    womenCategoriesSet.add( ...element.sizes);
    CategoriesSet.add( ...element.sizes);
    })
console.log('men', menCategoriesSet);
console.log('women', womenCategoriesSet);
console.log('men + women', CategoriesSet);
// console.log(menPproducts.length)
// console.log(parseInt('rtr 10'.match(/\d+/)))

// how to take content from meta html by jsdom