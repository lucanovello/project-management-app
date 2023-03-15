const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');

// @desc    Get events
// @route   GET /api/events
// @access  Private
const getEvents = asyncHandler(async (req, res) => {
    const events = await Event.find();

    res.status(200).json(events);
});

// @desc    Set event
// @route   POST /api/events
// @access  Private
const setEvent = asyncHandler(async (req, res) => {
    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the event user
    if (req.user.role !== 'admin') {
        res.status(401);
        throw new Error('User not authorized');
    }

    try {
        const event = await Event.create({
            title: req.body.title,
            description: req.body.description,

            street: req.body.street,
            city: req.body.city,
            province: req.body.province,
            postalCode: req.body.postalCode,

            allDay: req.body.allDay,
            start: req.body.start,
            end: req.body.end,
            crew: req.body.crew,
            customer: req.body.customer,
            notes: req.body.notes,
            status: req.body.status,
            createdBy: req.body.createdBy,
            createdAt: req.body.createdAt,
        });
        console.log(event);
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
});

// @desc    Update event
// @route   PUT /api/events/:id
// @access  Private
const updateEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);

    if (!event) {
        res.status(400);
        throw new Error('Event not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the event user
    if (event.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedEvent);
});

// @desc    Delete event
// @route   DELETE /api/events/:id
// @access  Private
const deleteEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (!event) {
        res.status(400);
        throw new Error('Event not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the event user
    if (req.user.role !== 'admin') {
        res.status(401);
        throw new Error('User not authorized');
    }

    await event.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getEvents,
    setEvent,
    updateEvent,
    deleteEvent,
};
