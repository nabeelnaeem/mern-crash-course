import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date,
        default: null //null means not deleted
        //Mongoose doesn't provide deletedat time stamp by default
    }
}, {
    timestamps: true, //createAt, updatedAt
});

//This will include time stamps according to user machine as well
productSchema.set("toJSON", {
    transform: (doc, ret) => {
        if (ret.createdAt) {
            ret.createdAtLocal = new Date(ret.createdAt).toLocaleString();
        }
        if (ret.updatedAt) {
            ret.updatedAtLocal = new Date(ret.updatedAt).toLocaleString();
        }
        if (ret.deletedAt) {
            ret.deletedAtLocal = ret.deletedAt ? new Date(ret.deletedAt).toLocaleString() : null;
        }
        return ret;
    }
});

//Now we have schema defined above, we can create model from that schema
const Product = mongoose.model('Product', productSchema);
//Here we have to put the singular 'Product' and mongoose will convert it into collection products

export default Product;