import { gql } from 'apollo-server-express';

const typesProjects = gql`
    type Project {
        _id: ID!
        name: String!
        generalObjetive: String!
        specificObjetives: String!
        budget: Float!
        leader_id: User!
        startDate: Date!
        endDate: Date!
        status: String
        phase: String
    }
    type Query {
        Projects: [User]
        Project(_id: String!): Project
    }
    type Mutation {
        inputProject(
            name: String!
            generalObjetive: String!
            specificObjetives: String!
            budget: Float!
            leader_id: User!
            startDate: Date!
            endDate: Date!
            status: String
            phase: String
        ): Project
    }
`;

export { typesProjects };