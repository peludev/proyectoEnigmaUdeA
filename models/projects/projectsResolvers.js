import { ProjectModel } from '../projects/projectsModel.js'

const resolversProjects = {
  Query: {
    Projects: async (parent, arg) =>{
      console.log('parent user', parent);
      const projects = await ProjectModel.find();
      return projects;
    },

    Project: async (parent, args) => {
      const project = await ProjectModel.findById(args._id);
      return project;
    },
  },

  Mutation: {
    createProject: async (parent, args, context) => {
      const proyectCreated = await ProjectModel.create({
        name: args.name,
        startDate: args.startDate,
        endDate: args.endDate,
        budget: args.budget,
        generalObjective: args.generalObjective,
        specificObjectives: args.specificObjectives,
      });
      return proyectCreated;
    },
 

    projectUpdate: async (prent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(
        args._id,
        {
          status: args.status,
          phase: args.phase
        },
      );
      return proyectoEditado;
    },
  },

};

export { resolversProjects }