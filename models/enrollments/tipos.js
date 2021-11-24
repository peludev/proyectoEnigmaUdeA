import { gql } from 'apollo-server-express';

const typesEnrollments = gql`
    type Enrollment {
        _id: ID!
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
            status: String
            enrollmentDate: Date
            egressDate: Date
        ): Enrollment
    }
`;

export { typesEnrollments };