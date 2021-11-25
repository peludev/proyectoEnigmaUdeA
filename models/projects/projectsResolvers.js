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
  }

};

export { resolversProjects }