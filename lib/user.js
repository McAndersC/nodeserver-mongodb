import dbConnect from "./dbConnect.js";

// Create User
export const createUser = async (body) => {

    let result = {"status" : "error", "message" : "User could not be created", "data" : null};
    

    return result;
}

// Delete User
export const deleteUser = async (id) => {

    let result = {"status" : "error", "message" : "User could not be deleted", "data" : null};

    return result;
}

// Get User
export const getUser = async (id) => {

    let result = {"status" : "error", "message" : "User could not be found", "data" : null};
    await dbConnect();


    return result;
}

// Update User
export const updateUser = async (body) => {

    let result = {"status" : "error", "message" : "User could not be updated", "data" : null};

    return result
}