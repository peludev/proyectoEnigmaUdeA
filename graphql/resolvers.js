import { resolversUsers } from '../models/users/usersResolvers.js';
import { resolversProjects } from '../models/projects/projectsResolvers.js';
import { resolversEnrollments } from '../models/enrollments/enrollmentsResolvers.js';
import { resolversAdvances } from '../models/advances/advancesResolvers.js';

export const resolvers = [
  resolversUsers,
  resolversProjects,
  resolversEnrollments,
  resolversAdvances
]