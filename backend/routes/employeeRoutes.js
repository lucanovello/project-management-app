const express = require('express');
const router = express.Router();
const {
    getEmployees,
    setEmployee,
    updateEmployee,
    deleteEmployee,
} = require('../controllers/employeeController');

const { protect } = require('../middleware/authMiddleware');
router.route('/').get(protect, getEmployees).post(protect, setEmployee);
router.route('/:id').delete(protect, deleteEmployee).put(protect, updateEmployee);

module.exports = router;
