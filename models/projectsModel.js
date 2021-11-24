// Traemos el objeto mongoose desde la dependencia
const mongoose = require("mongoose")

// Creamos una constante llamada Schema con un objeto de mongoose
const Schema = mongoose.Schema

// Instanciamos el objeto Schema enviando como propiedad la estructura 
const ProjectsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    generalObjective:{
      type: String,
      required: true,
    },

    specificObjectives: {
      type: Array,
      required: true,
    },

    budget: {
      type: Float64Array,
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    leader_id: {
        type: String,
        required: true,            
    },

    status: {
      type: String,
      enum: ['active', 'inactive'],
    },

    phase: {
        type: String,
        enum: ['astarted', 'in progress', 'ended'],
      }
  },
)

// Exportamos el modelo del esquema
module.exports = mongoose.model("Project", ProjectsSchema)
