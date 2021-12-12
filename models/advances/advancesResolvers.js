import { AdvanceModel } from "./advancesModel.js";

const resolversAdvances = {
    Query: {
        Advances: async (parent, arg) =>{
            console.log('parent advance', parent);
            const advances = await AdvanceModel.find().populate("project_id");
            return advances;
        },

        Advance: async (parent, args) => {
            const advance = await AdvanceModel.findById(args._id);
            return advance;
        },

        AdvanceP: async (parent, args) =>{
            const advance = await AdvanceModel.find({project_id: args.project_id}).populate("project_id");
            return advance;
        },
       /* filterAdvance: async (parents, args) => {
            const filterAdvance = await AdvanceModel.find({ project: args._id})
              .populate('project_id');
            return filterAdvance;
          },*/
    },

    Mutation: {
        inputAdvance: async (parents, args) => {
            const advanceCreated = AdvanceModel.create({
                addDate: args.addDate,
                description: args.description,
                observations: args.observations,
                project_id: args.project_id,
            });
            return advanceCreated;
        },


        advanceUpdate: async (parent, args) =>{
            const avanceEditadoObs = await AdvanceModel.findByIdAndUpdate(
                args._id,
                {
                    observations: args.observations,
                    description: args.description,
                },
                {new: true}
            );
            return avanceEditadoObs;
        },
    }

};

export { resolversAdvances }