const mongoose = require("mongoose");

const HelpersSchema = new mongoose.Schema({
    helperName: {
        type: String,
        required: [true, "Therapist or doctor's name is required"]
    }, 
    profession: {
        type: String,
        required: [true, "You must be doctor or therapist"]
    },
    address: {
        type: String
    },
    experience: {
        type: String
    },
    speciality: {
        type: String
    },
    contact: {
        type: String
    }
}, {timestamps : true})

module.exports.Helpers = mongoose.model("Helpers", HelpersSchema);
