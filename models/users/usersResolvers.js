import { UserModel } from '../users/usersModel.js';

const resolversUsers = {
  Query: {
    Users: async (parent, arg) =>{
      console.log('parent user', parent);
      const users = await UserModel.find();
      return users;
    }
  }

};

export { resolversUsers };