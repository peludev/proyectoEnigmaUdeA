import { gql } from 'apollo-server-express';

const typesUsers = gql`
  type User {
    _id: ID!
    email: String!
    documentId: String!
    name: String!
    lastName: String!
    fullName: String
    role: Enum_Role!
    status: Enum_statusUser
    password: String!
  }
  type Query {
    Users: [User]
    User(_id: String!): User
  }
  type Mutation {
    inputUser(
        email: String!
        documentId: String!
        name: String!
        lastName: String!
        fullName: String
        role: Enum_Role!
        status: Enum_statusUser
        password: String!
    ): User

    userUpdate(
        _id: String!
        email: String!
        name: String!
        lastName: String!
        status: Enum_statusUser!
        password: String!
    ): User 
  }
`;

export { typesUsers };