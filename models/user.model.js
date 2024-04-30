const { mongoose, Schema, Model } = require("mongoose");

const userSchema = Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    mobile: {
        type: String,
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    }
}, { timeStamps: true })

module.exports = mongoose.model("User", userSchema);