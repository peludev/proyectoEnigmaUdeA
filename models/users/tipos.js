import { gql } from 'apollo-server-express';

const typesUsers = gql`
  type User {
    _id: ID!
    documentId: Int!
    name: String!
    lastName: String!
    fullName: String
    role: String!
    status: String!
    password: String!
  }
  type Query {
    Users: [User]
    User(_id: String!): User
  }
  type Mutation {
    inputUser(
        documentId: Int!
        name: String!
        lastName: String!
        fullName: String
        role: String!
        status: String!
        password: String!
    ): User
  }
`;

export { typesUsers };