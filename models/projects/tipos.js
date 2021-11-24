import { gql } from 'apollo-server-express';

const typesProjects = gql`
    type Project {
        _id: ID!
        name: String!
        generalObjective: String!
        specificObjectives: String!
        budget: Float!
        startDate: Date!
        endDate: Date!
        status: String
        phase: String
    }
    type Query {
        Projects: [Project]
        Project(_id: String!): Project
    }
    type Mutation {
        inputProject(
            name: String!
            generalObjetive: String!
            specificObjetives: String!
            budget: Float!
            startDate: Date!
            endDate: Date!
            status: String
            phase: String
        ): Project
    }
`;

export { typesProjects };