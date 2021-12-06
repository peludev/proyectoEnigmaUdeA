import { ProjectModel } from '../projects/projectsModel.js'
import { UsersModel } from '../users/usersModel.js';

const resolversProjects = {
  Query: {
    Projects: async (parent, arg) =>{
      console.log('parent user', parent);
      const projects = await ProjectModel.find().populate("leader_id").populate("advances");
      return projects;
    },

    Project: async (parent, args) => {
      const project = await ProjectModel.findById(args._id);
      return project;
    },
   
    myProjects: async (parent, args) => {
      const project = await ProjectModel.find({leader_id: args.leader_id}).populate("leader_id");
      return project;
    }
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
    projectUpdate: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(
        args._id,
        {
          name: args.name,
          generalObjective: args.generalObjective,
          specificObjectives: args.specificObjectives,
          budget: args.budget
        },
        {new: true}
      );
      return proyectoEditado;
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