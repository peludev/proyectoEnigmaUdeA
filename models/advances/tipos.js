import { gql } from 'apollo-server-express';

const typesAdvances = gql`
    type Advance {
        _id: ID!
        project_id: Project!
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
            project_id: String!
            addDate: Date!
            description: String!
            observations: [String]!
        ): Advance
        advanceUpdateObservations(
            _id: String!
            observations: [String]!
        ): Advance
        advanceUpdateDescription(
            _id: String!
            description: String!
        ):Advance
    }
`;

export { typesAdvances };