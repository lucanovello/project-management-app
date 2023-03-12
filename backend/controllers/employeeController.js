const asyncHandler = require('express-async-handler');

const Employee = require('../models/employeeModel');

// @desc    Get employees
// @route   GET /api/employees
// @access  Private
const getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find();

    res.status(200).json(employees);
});

// @desc    Set employee
// @route   POST /api/employees
// @access  Private
const setEmployee = asyncHandler(async (req, res) => {
    const emailExists = await Employee.findOne({ email: req.body.email });
    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the employee user
    if (req.user.role !== 'admin') {
        res.status(401);
        throw new Error('User not authorized');
    }

    // Check if email already in use
    if (emailExists !== null) {
        res.status(400);
        throw new Error('email already exists');
    }
    console.log(emailExists);

    const employee = await Employee.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        position: req.body.position,
        salary: req.body.salary,
        hireDate: req.body.hireDate,
        isActive: req.body.isActive,
        sin: req.body.sin,
    });
    res.status(200).json(employee);
});

// @desc    Update employee
// @route   PUT /api/employees/:id
// @access  Private
const updateEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
        res.status(400);
        throw new Error('Employee not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the employee user
    if (employee.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedEmployee);
});

// @desc    Delete employee
// @route   DELETE /api/employees/:id
// @access  Private
const deleteEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
        res.status(400);
        throw new Error('Employee not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the employee user
    if (req.user.role !== 'admin') {
        res.status(401);
        throw new Error('User not authorized');
    }

    await employee.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getEmployees,
    setEmployee,
    updateEmployee,
    deleteEmployee,
};
