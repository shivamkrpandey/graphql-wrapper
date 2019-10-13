const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({urlencoded: true}));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', function(request, response){
    console.log("I have been hit...");

    response.json({"message": "API is working, let's start working further"});
});

router.get("/productDetails", function(request, response) {
    console.log("Serving request...");
    
    const productDetails = {
        "name": "Test name",
        "author": "Test Author",
        "icon": "https://iconurl",
        "category": "Transportation",
        "price": 0,
        "priceCurrency": "",
        "inAppBilling": false,
        "rating": {
          "count": 21,
          "display": "4.7",
          "value": 4.714285850524902,
          "five": 18,
          "four": 2,
          "three": 0,
          "two": 0,
          "one": 1
        },
        "topDeveloper": false,
        "screenshots": [
         "http://a.com",
         "http://b.com"
        ],
        "description": "test long description",
        "shortDescription": "test short description",
        "changelog": "Updated user interface colors",
        "datePublished": "October 11, 2019",
        "datePublishedIso": "2019-10-011T00:00:00+00:00",
        "fileSize": "2.9M",
        "numDownloads": "100 - 500",
        "versionName": "1.1.0",
        "operatingSystems": "2.3.3 and up",
        "storeCategory": "TRAVEL",
        "contentRating": "Everyone"
      
    };
    response.json(productDetails);
});

app.use('/api', router);

const port = 8081;

app.listen(port);

console.log("API server is running on port: " + port);