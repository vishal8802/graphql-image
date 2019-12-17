const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    hello: String
  }
  type File {
    name: String
    mimetype: String
    encoding: String
  }
  type Mutation {
    uploadFiletoServer: String
  }
`;

module.exports = typeDefs;
