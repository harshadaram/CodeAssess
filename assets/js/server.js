const express = require('express');
const hbs = require('hbs');
const ourapp = require('./app');
var path = require('path')

var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    ourapp.productData((response) => {
        prodListStr = JSON.stringify(response.productList);
        prodList = JSON.parse('{"productList":' + prodListStr + '}');
        res.render('myTemplate.hbs', prodList);
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});