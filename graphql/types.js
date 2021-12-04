import { gql } from 'apollo-server-express';
import { typesUsers } from '../models/users/tipos.js';
import { typesProjects } from '../models/projects/tipos.js';
import { typesEnrollments } from '../models/enrollments/tipos.js';
import { typesAdvances } from '../models/advances/tipos.js';
import { typesEnums } from '../models/enums/tiposEnums.js'

const typesGlobals = gql`
    scalar Date
`;

export const types = [
    typesGlobals,
    typesUsers,
    typesProjects,
    typesEnrollments,
    typesAdvances,
    typesEnums,
];