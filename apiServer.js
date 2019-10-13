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

// router.get("/productDetails", function(request, response) {
//     response.json();
// });

app.use('/api', router);

const port = 8081;

app.listen(port);

console.log("API server is running on port: " + port);