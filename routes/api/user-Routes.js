const router = require('express').Router();
const {
  getUser
  getSingleUser
  createUser
  deleteUser
  updateUser

  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
} = require('../../controllers/studentController');

// /api/students
router.route('/').get(getUser).post(createUser);

// /api/students/:studentId
router.route('/:studentId').get(getSingleUser).delete(deleteUser);

module.exports = router;
