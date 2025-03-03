const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Get all attendance records
router.get('/', attendanceController.getAllAttendance);

// Get attendance records for a specific class
router.get('/class/:classId', attendanceController.getAttendanceByClass);

// Get attendance records for a specific class on a specific date
router.get('/class/:classId/date/:date', attendanceController.getAttendanceByClass);

// Get attendance records for a specific student
router.get('/student', attendanceController.getAttendanceByStudent);

// Get attendance statistics for a class
router.get('/class/:classId/statistics', attendanceController.getClassStatistics);

// Create a new attendance record
router.post('/', attendanceController.createAttendance);

// Bulk create attendance records
router.post('/bulk', attendanceController.bulkCreateAttendance);

// Update an attendance record
router.put('/:id', attendanceController.updateAttendance);

// Delete an attendance record
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;