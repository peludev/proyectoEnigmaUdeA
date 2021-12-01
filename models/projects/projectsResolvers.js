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
    projectUpdateStatus: async (parent, args) => {
      const proyectoEstadoEditado = await ProjectModel.findByIdAndUpdate(
        args._id,
        {
          status: 'active',
        },
        {new: true}
      );
      return proyectoEstadoEditado;
    },
    projectUpdatePhase: async (parent, args) =>{
      const proyectoFaseEditado = await ProjectModel.findByIdAndUpdate(
        args._id,
        {
          phase: args.phase
        }
      );
      return proyectoFaseEditado;
    }
  },

};

export { resolversProjects }