const { GraphQLServer } = require('graphql-yoga')
const request = require('request');

const resolvers = {
  Query: {
    productDetails: () => {
        request('http://localhost:8081/api/productDetails', { json: true }, (err, res, body) => {
          if (err) { return console.log(err); }
          console.log(body.url);
          console.log(body.explanation);
        });
	  }
  },
};

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