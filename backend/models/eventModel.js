const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    province: {
        type: String,
    },
    postalCode: {
        type: String,
    },
    allDay: {
        type: Boolean,
        required: true,
        default: true,
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    crew: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Crew',
    },
    customer: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Customer',
    },
    notes: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending',
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model('Event', eventSchema);
