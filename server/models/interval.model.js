const mongoose = require('mongoose');

const IntervalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }
    ,
    quality: {
        type: String,
        required: [true, "Quality is required"],
    },
    number: {
        type: Number,
        required: [true, "number is required"]
    },
    soundFilePath: {
        type: String,
        required: [true, "Path to sound file is required"]
    },
}, { timestamps: true });

module.exports.Interval = mongoose.model("Interval", IntervalSchema)

