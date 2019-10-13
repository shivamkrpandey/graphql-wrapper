var request = require("request");
const { GraphQLServer } = require('graphql-yoga')

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
        
      }
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