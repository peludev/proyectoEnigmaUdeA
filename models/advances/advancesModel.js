import mongoose from 'mongoose';
import { ProjectModel } from '../projects/projectsModel.js'

const { Schema, model } = mongoose;

const advanceSchema = new Schema (
    {
        project_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: ProjectModel,
        },

        addDate: {
            type: Date,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        observations: {
            type: String,
            required: true,
        }
    }
);

const AdvanceModel = model('Advance', advanceSchema)
export { AdvanceModel };