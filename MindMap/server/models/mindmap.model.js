const mongoose = require("mongoose");

const MindmapSchema = new mongoose.Schema({
    age: {
        type: Number, 
        required: [true, "User age is required!"],
        min: 0,
        max: 100
    },
    stressType: {
        type: String,
        required: [true, "User need to select Stress type"]
    }, 
    notes: {
        type: String,
        maxlenght: [500, "Notes canot be more than 500 characters!"]
    }
}, {timestamps : true})

module.exports.Mindmap = mongoose.model("Mindmap", MindmapSchema);
