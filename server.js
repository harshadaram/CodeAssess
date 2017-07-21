const express = require('express');
const hbs = require('hbs');
const ourapp = require('./assets/js/app');
var path = require('path')

var app = express();

//app.use('/css',express.static(path.join(__dirname,'public/css')));
app.use('/css',express.static(path.join(__dirname,'public/css')));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    ourapp.productData((response) => {
        prodListStr = JSON.stringify(response.productList);
        prodList = JSON.parse('{"productList":' + prodListStr + '}');
        res.render('myTemplate.hbs', prodList);
    });
});

app.get('/css/reset.css', function(req, res){
  res.sendFile(__dirname + '/reset.css');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});