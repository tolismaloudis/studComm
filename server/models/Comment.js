const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    c_id: {
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
    body: {
        type: String,
        required: true
    },
    p_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
});

module.exports = mongoose.model('Comment', CommentSchema);