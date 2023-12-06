import dbConnect from "../dbConnect.js";
import productModel from "../models/product.model.js";

// Create User
export const createProduct = async (body) => {

    await dbConnect();

    return productModel.create(body).then( (doc) => {

        return {"status" : "ok", "message" : "Product created", "data" : doc};

    }).catch( (err) => {
      
        return {"status" : "error", "message" : "Product could not be created", "data" : null}

    });

}

// Update Product
export const updateProduct = async (body) => {

    await dbConnect();

    return productModel.findByIdAndUpdate(body.id, body).then( (doc) => {

        return {"status" : "ok", "message" : "Product updated", "data" : doc};

    }).catch( (err) => {

        return  {"status" : "error", "message" : "Product could not be updated", "data" : null};

    });

}

// Get Product
export const getProduct = async (id) => {

    await dbConnect();

    return productModel.findById({"_id" : id}).then( (doc) => {

        return {"status" : "ok", "message" : "Product found", "data" : doc};

    }).catch( (err) => {

        return  {"status" : "error", "message" : "Product could not be found", "data" : null};

    });

} 

// Delete User
export const deleteProduct = async (id) => {

    await dbConnect();

    return productModel.findByIdAndDelete(id).then( (doc) => {

        return {"status" : "ok", "message" : "Product deleted", "data" : doc};

    }).catch( (err) => {

        return {"status" : "error", "message" : "Product could not be deleted", "data" : null}

    })
    
}