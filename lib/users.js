import dbConnect from "./dbConnect.js";
import userModel from "./models/user.model.js";

export const getUsers = async () => {

    await dbConnect();

    return userModel.find({}).then( (doc) => {

        return {"status" : "ok", "message"  : "users founde", "data": doc}

    }).catch( (err) => {

        return {"status" : "error", "message"  : "users could not be founde", "data": doc}

    })

}