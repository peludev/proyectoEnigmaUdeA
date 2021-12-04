import mongoose from 'mongoose';
import { ProjectModel } from '../projects/projectsModel.js';
import { UsersModel } from '../users/usersModel.js';

const { Schema, model} = mongoose;

const enrollmentSchema = new Schema (
    {
        project_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: ProjectModel,
        },

        user_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: UsersModel,
        },

        status: {
            type: String,
            enum: ['accepted', 'rejected']
        },

        enrollmentDate: {
            type: Date,
            required: false,
        },

        egressDate: {
            type: Date,
            required: false,
        }

    }
);

const EnrollmentsModel = model('Enrollment', enrollmentSchema)
export { EnrollmentsModel };
