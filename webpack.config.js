var path = require("path");

module.exports = {
    entry: __dirname+"/assets/js/main.js",
    output: {
        path: __dirname+"/",
        filename: "main-bundled.js"
    },
    module: {
        loaders: [
            {test: /\.hbs$/, loader: "handlebars-loader"}
        ]
    }
};