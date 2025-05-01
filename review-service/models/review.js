const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true, min: 1, max: 5
    },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
