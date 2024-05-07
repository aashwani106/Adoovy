import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
    websiteId: {
        type: mongoose.Schema.Types.ObjectId, // Assuming websiteId is of type ObjectId
        required: true,
        unique: true
    },
    website: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (v) {
                // Simple URL validation regex
                return /^(https?:\/\/)?([\w\d]+\.)?[\w\d]+\.[\w\d]+(\/.*)?$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    websiteowner: {
        type: String,
        ref: 'User', 
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive'], // Assuming status can be either Active or Inactive
    }
}, { timestamps: true });

SellerSchema.statics.updateWebsite = async function(websiteId, newWebsiteData) {
    try {
        const result = await this.findByIdAndUpdate(websiteId, newWebsiteData, { new: true });
        return result;
    } catch (error) {
        throw error;
    }
};

export const Seller = mongoose.model("Seller", SellerSchema);
