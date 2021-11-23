// Comenzamos traendo el modelo de datos
const User = require("../../models/usersModel")

// Exportamos las funciones que resolverá las peticiones
module.exports = {
  // Esta función es para los querys
  users: async () => {
    try {
      // creamos una constante que mediante find me trae todo el arreglo de registros
      const usersFetched = await User.find()
      // Hacemos un map al arreglo y creamos otro arreglo pero con los datos que queremos mostrar
      return usersFetched.map(user => {
        return {
          ...user._doc,
          _id: user.id
        }
      })
    } catch (error) {
      throw error
    }
  },

  // Esta otra función es para el mutation
  createUser: async args => {
    try {
      // Creamos un objeto a partir de los args que son los que mandamos
      const { email, name } = args.user
      // Creamos el objeto article con el objeto anterior
      const user = new User({
        email,
        name,
      })
      // Hacemos un await guardando el articulo creado con save
      const newUser = await user.save()
      // Retornamos un objeto con el resultado del await y el id
      return { ...newUser._doc, _id: newUser.id }
    } catch (error) {
      throw error
    }
  },
}