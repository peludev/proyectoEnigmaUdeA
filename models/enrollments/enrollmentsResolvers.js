import { EnrollmentsModel } from '../enrollments/enrollmentsModel.js'

const resolversEnrollments = {
  Query: {
    Enrollments: async (parent, arg) =>{
      console.log('parent user', parent);
      const enrollments = await EnrollmentsModel.find();
      return enrollments;
    },

    Enrollment: async (parent, args) => {
      const enrollment = await EnrollmentsModel.findById(args._id);
      return enrollment;
    },
  }

};

export { resolversEnrollments }