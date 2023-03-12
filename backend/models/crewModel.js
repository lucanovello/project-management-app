const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Crew', crewSchema);
