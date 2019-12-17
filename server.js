const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolver");
const typeDefs = require("./typeDefs");

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`listening on http://localhost:4000/graphql`);
});
