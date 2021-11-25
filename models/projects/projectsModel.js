import mongoose from 'mongoose';
import { UsersModel } from '../users/usersModel.js';

const { Schema, model } = mongoose;

const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        generalObjective: {
            type: String,
            required: true,
        },

        specificObjectives: {
            type: Array,
            required: true,
        },

        budget: {
            type: Number,
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
            type: Schema.Types.ObjectId,
            required: true,
            ref: UsersModel,
        },

        status: {
            type: String,
            enum: ['active', 'inactive'],
        },

        phase: {
            type: String,
            enum: ['started', 'in progress', 'ended']
        }

    },
    {
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    }
);



const ProjectModel = model('Project', projectSchema)
export { ProjectModel };