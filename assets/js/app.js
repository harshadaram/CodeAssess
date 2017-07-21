const request = require('request');

var productData = (callback) => {
   request({
    url: 'http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1',
    json: true
}, (error, response, body) => {
    callback(body);
})
}

module.exports.productData = productData;