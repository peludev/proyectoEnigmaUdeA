import { gql } from 'apollo-server-express';
import { typesUsers } from '../models/users/tipos.js';

const typesGlobals = gql`
    scalar Date
`;

export const types = [
    typesGlobals,
    typesUsers
];