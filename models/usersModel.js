// Traemos el objeto mongoose desde la dependencia
const mongoose = require("mongoose")

// Creamos una constante llamada Schema con un objeto de mongoose
const Schema = mongoose.Schema

// Instanciamos el objeto Schema enviando como propiedad la estructura 
const userSchema = new Schema(
  {
    email: {
        type: String,
        required: true,
    },

    documentId: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    fullName: {
        type: String,
    },

    role: {
        type: String,
        required: true,
        enum: ['admin', 'leader', 'student'],
    },

    status: {
        type: String,
        required: true,
        enum: ['pending', 'authorized', 'unauthorized'],
    },

    password: {
        type: String,
        required: true,
    }
  }
)

// Exportamos el modelo del esquema
module.exports = mongoose.model("User", userSchema)