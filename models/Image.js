const mongoose = require('mongoose');


const ImageSchema = new mongoose.Schema({
    title: {type: String, require: true},
    imageUrl: {type: String, require: true}
});

module.exports = mongoose.model("Image", ImageSchema);