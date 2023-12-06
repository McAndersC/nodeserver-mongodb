import dbConnect from "./dbConnect.js";
import userModel from "./models/user.model.js";

// Create User
export const createUser = async (body) => {

    await dbConnect();

    console.log(body)

    return userModel.create(body).then( (doc) => {

        return {"status" : "ok", "message" : "User created", "data" : doc};

    }).catch( (err) => {
      
        return {"status" : "error", "message" : "User could not be created", "data" : null}

    })
}

// Delete User
export const deleteUser = async (id) => {

    await dbConnect();

    console.log('Delete:', id)
    return userModel.findByIdAndDelete(id).then( (doc) => {

        return {"status" : "ok", "message" : "User deleted", "data" : doc};

    }).catch( (err) => {

        return {"status" : "error", "message" : "User could not be deleted", "data" : null}

    })
    
}

// Get User
export const getUser = async (id) => {

    return userModel.findById(id).then( (doc) => {

        return {"status" : "ok", "message" : "User found", "data" : doc};

    }).catch( (err) => {

        return {"status" : "ok", "message" : "User could not be found", "data" : null};
    })

}

// Update User
export const updateUser = async (body) => {

    await dbConnect();

    return userModel.findByIdAndUpdate(body.id, body).then( (doc) => {

        return {"status" : "ok", "message" : "User updated", "data" : doc};

    }).catch( (err) => {

        return  {"status" : "error", "message" : "User could not be updated", "data" : null};

    })

}