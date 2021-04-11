const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    p_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    user: {
        type: String,
        required: true,
        ref: 'User'
    },
    createtAt: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    course: {
        type: Number
    },
    importance: {
        type: Number,
        min: 1,
        max: 3
    },
    status: {
        type: Boolean
    },
    keys: {
        type: String
    }
});

module.exports = mongoose.model('Post', PostSchema);