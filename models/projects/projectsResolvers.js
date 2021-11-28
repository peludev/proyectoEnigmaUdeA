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
    inputProject: async (parent, args) => {
      const projectCreado = await ProjectModel.create({
        name: args.name,
        generalObjective: args.generalObjective,
        specificObjectives: args.specificObjectives,
        budget: args.budget,
        startDate: args.startDate,
        endDate: args.endDate,
        leader_id: args.leader_id,
        status: args.status,
        phase: args.phase
      });

      return projectCreado;
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
    }
  }
};

export { resolversProjects }