// Traemos el objeto mongoose desde la dependencia
import mongoose from 'mongoose';


// Creamos una constante llamada Schema con un objeto de mongoose
const { Schema, model } = mongoose;

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
);

const UserModel = model('User', userSchema)

// Exportamos el modelo del esquema
export { UserModel };