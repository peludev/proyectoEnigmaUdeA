import { gql } from 'apollo-server-express';

const typesEnrollments = gql`
    type Enrollment {
        _id: ID!
        project_id: String!
        user_id: String!
        status: Enum_statusEnrollments
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
            status: Enum_statusEnrollments
            enrollmentDate: Date
            egressDate: Date
        ): Enrollment


        approveEnrollment(id: String!): Enrollment
    }
`;

export { typesEnrollments };