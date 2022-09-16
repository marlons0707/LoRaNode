const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        requrired: true
    },
    description: {
        type: String,
        requrired: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('posts', PostSchema);