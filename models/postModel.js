const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        require: [true, "the title is obligatory for a post"]
    },
    text:{
        type: String,
        require: [true, "the text is obligatory for a post"]
    }
});

module.exports = mongoose.model('post', postSchema);