// Nos traemos la funciónn que utilizaremos de la dependencia de graphql
const { buildSchema } = require("graphql")

// Utilizamos este método para crear nuestros esquemas de la siguiente forma
module.exports = buildSchema(`

  type User {
    _id: ID!
    email: String!
    documentId: Int!
    name: String!
    lastName: String!
    fullName: String
    role: String!
    status: String!
    password: String!  
  }

  input UserInput {
    email: String!
    documentId: Int!
    name: String!
    lastName: String!
    fullName: String
    role: String!
    status: String!
    password: String! 
  }

  type Query {
    users:[User!]
  }

  type Mutation {
    createUser(user:UserInput): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)

