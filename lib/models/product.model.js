import mongoose, { Schema} from "mongoose";

const productScheme = new Schema({

    title: { type: String, required : true},
    image: {type: String, default: "fallback_product.jpg"},
    price: { type: Number, required : true},
    recommended : { type: Number, required : true},
    discountInPercent: { type: Number, default: 0},

});

export default mongoose.models.product || mongoose.model('product', productScheme)


