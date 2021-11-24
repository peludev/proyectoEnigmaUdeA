import { gql } from 'apollo-server-express';

const typesEnrollments = gql`
    type Enrollment {
        _id: ID!
        project_id: Project!
        user_id: User!
        status: String
        enrollmentDate: Date
        egressDate: Date
    }
    type Query {
        Enrollments: [Enrollment]
        Enrollments(_id: String!): Enrollment
    }
    type Mutation {
        inputEnrollment(
            project_id: Project!
            user_id: User!
            status: String
            enrollmentDate: Date
            egressDate: Date
        ): Enrollment
    }
`;

export { typesEnrollments };