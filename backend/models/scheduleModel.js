const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    crew: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crew',
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
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
});

module.exports = mongoose.model('Schedule', scheduleSchema);
