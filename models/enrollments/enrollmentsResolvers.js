import { EnrollmentsModel } from '../enrollments/enrollmentsModel.js'

const resolversEnrollments = {
  Query: {
    Enrollments: async (parent, arg) =>{
      console.log('parent user', parent);
      const enrollments = await EnrollmentsModel.find();
      return enrollments;
    }
  }

};

export { resolversEnrollments }