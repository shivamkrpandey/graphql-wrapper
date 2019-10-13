var request = require("request");
const { GraphQLServer } = require('graphql-yoga')

const baseURL = `https://gplaystore.p.rapidapi.com/applicationDetails`

const resolvers = {
  Query: {
    productDetails:  () => {
      return {
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
          "description": "Who has not ever done a run at breakneck speed just to discover that the flight was an hour late ? Well it happened to me often, and it was not funny. So I decided to develop this app.I thought it would be useful for me and for all the fellow travelers of the airport of Lamezia Terme to have an app that would allow to easily view on your smartphone, and in real time, the status of the flights arriving and departing. Using Lamezia Airport you will have access to all the information you may need so you will be constantly informed and updated.Thanks to Lamezia Airport you can: See scheduled and actual time or eventual delays and cancellations of flights. Check the status of each flight (checkin, security, boarding, landed and departed). Filter the flights list using the search or viewing just your favorites. Know the weather conditions and the temperature of each city of arrival or departure. Search in the historic up to two years in the past. If you have suggestions or comments about the application, please write me",
          "shortDescription": "Your airport, always with you",
          "changelog": "Updated user interface colors",
          "datePublished": "April 9, 2014",
          "datePublishedIso": "2014-04-09T00:00:00+00:00",
          "fileSize": "2.9M",
          "numDownloads": "100 - 500",
          "versionName": "1.1.0",
          "operatingSystems": "2.3.3 and up",
          "storeCategory": "TRAVEL",
          "contentRating": "Everyone"
        
      }
      // var options = {
      //   method: 'POST',
      //   url: baseURL,
      //   headers: {
      //     'x-rapidapi-host': 'gplaystore.p.rapidapi.com',
      //     'x-rapidapi-key': '9c4f43e07fmsh69c1fd52b12e2e4p16f78fjsnac911a1ccd19',
      //     'content-type': 'application/json',
      //     accept: 'application/json'
      //   },
      //   body: {lang: 'it', ids: ['net.luxteam.sacal']},
      //   json: true
      // };
      
      // await request(options, function (error, response, body) {
      //   if (error) throw new Error(error);
        
      //   console.log(body);
      //   return body;
      // });
    },
  },
}

const options = {
  port: 8000,
  endpoint: '/graphql',
  playground: '/playground',
}

const server = new GraphQLServer({
  typeDefs: './graphql-schema/ratings.graphql',
  resolvers,
});

server.start(options, ({port}) => console.log(`Server is running on http://localhost:${port}`));