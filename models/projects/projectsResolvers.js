import { ProjectModel } from '../projects/projectsModel.js'

const resolversProjects = {
  Query: {
    Projects: async (parent, arg) =>{
      console.log('parent user', parent);
      const projects = await ProjectModel.find();
      return projects;
    }
  }

};

export { resolversProjects }