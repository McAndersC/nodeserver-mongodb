import dbConnect from "../dbConnect.js";
import productModel from "../models/product.model.js";

export const getProducts = async () => {

    await dbConnect();

    return productModel.find({}).then( (doc) => {

        return {"status" : "ok", "message"  : "products found", "data": doc}

    }).catch( (err) => {

        return {"status" : "error", "message"  : "products could not be founde", "data": null}

    })

}