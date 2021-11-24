import { UsersModel } from '../users/usersModel.js';

const resolversUsers = {
  Query: {
    Users: async (parent, arg) =>{
      console.log('parent user', parent);
      const users = await UsersModel.find();
      return users;
    }
  }

};

export { resolversUsers }