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
        inputAdvance: async (parents, args) => {
            const advanceCreated = AdvanceModel.create({
                addDate: args.addDate,
                description: args.description,
                project_id: args.project_id,
            });
            return advanceCreated;
        },
    },
};

export { resolversAdvances }