import mongoose from 'mongoose';

// Creamos una constante llamada Schema con un objeto de mongoose
const { Schema, model } = mongoose;

// Instanciamos el objeto Schema enviando como propiedad la estructura 
const userSchema = new Schema(
  {
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            // (email) => {
            //   if (email.includes('@') && email.includes('.')) {
            //     return true;
            //   } else {
            //     return false;
            //   }
            // },
            message: 'El formato del correo electrónico está malo.',
          }, 
    },

    documentId: {
        type: String,
        required: true,
        unique: true,
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
        enum: ['pending', 'authorized', 'unauthorized'],
        default: 'pending',
    },

    password: {
        type: String,
        required: true,
    }
  },

  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }

);


userSchema.virtual('projectsLeader', {

    ref: 'Project',
    localField: '_id',
    foreignField: 'leader_id',
});

const UsersModel = model('User', userSchema)

// Exportamos el modelo del esquema
export { UsersModel };