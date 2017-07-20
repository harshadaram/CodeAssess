var myTemplate = require("./myTemplate.hbs");

var ourRequest = new XMLHttpRequest();


ourRequest.open('GET', 'http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1');
ourRequest.onload = function() {
    if(ourRequest.status >= 200 && ourRequest.status <400){
        var data = JSON.parse(ourRequest.responseText);
        createHTML(data);
    } else {
        console.log("We connected to the server but we got some error");
    }
};

ourRequest.onerror = function(){
    console.log("connection error");
};

ourRequest.send();

function createHTML(data){
   var productsContainer = document.getElementById("productsContainer");
   productsContainer.innerHTML = myTemplate(data);
}