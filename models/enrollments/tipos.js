import { gql } from 'apollo-server-express';

const typesEnrollments = gql`
    type Enrollment {
        _id: ID!
        project_id: String!
        user_id: String!
        status: String
        enrollmentDate: Date
        egressDate: Date
    }
    type Query {
        Enrollments: [Enrollment]
        Enrollment(_id: String!): Enrollment
    }
    type Mutation {
        inputEnrollment(
            project_id: String!
            user_id: String!
            status: String
            enrollmentDate: Date
            egressDate: Date
        ): Enrollment
    }
`;

export { typesEnrollments };