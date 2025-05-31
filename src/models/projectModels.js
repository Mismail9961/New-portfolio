import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true },
    description: {type: String, required: true },
    image: {type: Array, required: true },
    link: {type: String, required: true },
})

const productModel = mongoose.model.product || mongoose.model("product",productSchema)

export default productModel