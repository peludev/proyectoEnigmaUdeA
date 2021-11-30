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
  },

  Mutation: {
    inputEnrollment: async (parent, args) => {
      const enrollmentCreated = await EnrollmentsModel.create({
        status: args.status,
        project_id: args.project_id,
        user_id: args.user_id,
      });
      return enrollmentCreated;      
    },
    approveEnrollment: async (parent, args) => {
      const enrollmentapproved = await EnrollmentsModel.findByIdAndUpdate(
        args.id,
        {
          status: 'accepted',
          enrollmentDate: Date.now(),
        },
        {new: true}
      );
      return enrollmentapproved;
    },
 



    enrollmentUpdate: async (parent, args) => {
      const inscripcionEditada = await EnrollmentsModel.findByIdAndUpdate(
        args._id,
        {
          status: args.status
        },
      );
      return inscripcionEditada;
    },
  },


};

export { resolversEnrollments }