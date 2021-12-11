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
                project_id: args.project_id,
            });
            return advanceCreated;
        },


        advanceUpdateObservations: async (parent, args) =>{
            const avanceEditadoObs = await AdvanceModel.findByIdAndUpdate(
                args._id,
                {
                    observations: args.observations,
                },
                {new: true}

            );
            return avanceEditadoObs;
        },

        advanceUpdateDescription: async (parent, args) =>{
            const avanceEditadoDes = await AdvanceModel.findByIdAndUpdate(
                args._id,
                {
                    description: args.description,
                },
                {new: true}
            );
            return avanceEditadoDes;

        }
    }

};

export { resolversAdvances }