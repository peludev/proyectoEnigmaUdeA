import { AdvanceModel } from "./advancesModel.js";

const resolversAdvances = {
    Query: {
        Advances: async (parent, arg) =>{
            console.log('parent advance', parent);
            const advances = await AdvanceModel.find();
            return advances;
        }
    }
};

export { resolversAdvances }