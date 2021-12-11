import { UsersModel } from '../users/usersModel.js';
import { ProjectModel } from '../projects/projectsModel.js'
const resolversUsers = {
  Query: {
    Users: async (parent, arg) =>{
      console.log('parent user', parent);
      const users = await UsersModel.find().populate([
        {
          path: 'projectsLeader',
        }
      ]

      );
      return users;
    },

    User: async (parent, args) => {
      const user = await UsersModel.findById(args._id);
      return user;
    },

    Students : async (parent, args) => {
      const students = await UsersModel.find({role:"student"});
      return students;
    },

    Pending: async (parent, args) =>{
      const pending = await UsersModel.find({status:"pending"});
      return pending;
    },
   
  },

  Mutation: {
    inputUser: async (parent, args) => {
      const userCreado = await UsersModel.create({
        email: args.email,
        documentId: args.documentId,
        name: args.name,
        lastName: args.lastName,
        fullName: args.fullName,
        role: args.role,
        password: args.password,
      });

      return userCreado;
    },
    userUpdate: async (parent, args) => {
      const usuarioEditado = await UsersModel.findByIdAndUpdate(
        args._id,
        {
          email: args.email,
          name: args.name,
          lastName: args.lastName,
          //status: args.status,
          password: args.password
        },
        
      );
      return usuarioEditado;
    },
    userUpdateStatus: async (parent, args) =>{
      const estadoActualizado = await UsersModel.findByIdAndUpdate(
        args._id,
        {
          status: args.status
        },
      );
      return estadoActualizado;
    }
  }

};

export { resolversUsers }