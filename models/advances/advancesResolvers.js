import { AdvanceModel } from "./advancesModel.js";

const resolversAdvances = {
    Query: {
        Advances: async (parent, arg) =>{
            console.log('parent advance', parent);
            const advances = await AdvanceModel.find();
            return advances;
        },

        Advance: async (parent, args) => {
            const advance = await AdvanceModel.findById(args._id);
            return advance;
        },
    },

    Mutation: {
        inputAdvance: async (parent, args) => {
            const advanceCreado = await AdvanceModel.create({
                project_id: args.project_id,
                addDate: args.addDate,
                description: args.description,
                observations: args.observations
            });
            return advanceCreado;
        },
        advanceUpdate: async (parent, args) =>{
            const avanceEditado = await AdvanceModel.findByIdAndUpdate(
                args._id,
                {
                    observations: args.observations,
                    description: args.description
                },
            );
            return avanceEditado;
        }
    }
};

export { resolversAdvances }