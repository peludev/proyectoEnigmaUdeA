import { gql } from 'apollo-server-express';

const typesAdvances = gql`
    type Advance {
        _id: ID!
        addDate: Date!
        description: String!
        observations: [String]!
    }
    type Query {
        Advances: [Advance]
        Advance(_id: String!): Advance
    }
    type Mutation {
        inputAdvance(
            addDate: Date!
            description: String!
            observations: [String]!
        ): Advance
    }
`;

export { typesAdvances };