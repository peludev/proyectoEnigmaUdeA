import { gql } from 'apollo-server-express';

const typesEnums = gql`
  enum Enum_statusUser {
    pending
    authorized
    unauthorized
  }
 
  enum Enum_Role {
    admin
    leader
    student
  }
  
  enum Enum_statusProject {
    active
    inactive
  }
 
  enum Enum_phaseProject {
    started
    inProgress
    ended
    nulo
  }
  
  enum Enum_statusEnrollments {
    accepted
    rejected
  }
`;

export { typesEnums };
