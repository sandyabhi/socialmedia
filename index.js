const { Apolloserver, ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const Post = require("./model/Post");
const User = require("./model/User");
const { MONGODB } = require("./config.js");

const resolvers = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

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
