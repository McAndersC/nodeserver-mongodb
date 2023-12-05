import mongoose, { Schema} from "mongoose";

const userScheme = new Schema({

    name: { type: String, required : true},
    email: { type: String, required : true, unique: true, index:true},
    age: { type: Number, required : true},
    profile: {type: String, default: "fallback_profile.jpg"}

});

export default mongoose.models.user || mongoose.model('user', userScheme)