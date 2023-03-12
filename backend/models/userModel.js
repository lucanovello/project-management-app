const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please enter your first name'],
        },
        lastName: {
            type: String,
            required: [true, 'Please enter your last name'],
        },
        email: {
            type: String,
            required: [true, 'Please enter a valid email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter a password'],
        },
        role: {
            type: String,
            enum: ['admin', 'employee'],
            default: 'admin',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
