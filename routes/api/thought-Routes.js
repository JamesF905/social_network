const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thought-Controller.js');

// /api/courses
router.route('/').get(getThought).post(createThought);

// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
