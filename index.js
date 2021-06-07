const { Apolloserver, ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const { MONGODB } = require("./config.js");
const resolvers = require('./graphql/resolvers')


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongo connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server is running:  ${res.url} `);
  });
