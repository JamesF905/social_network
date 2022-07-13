const { user } = require('../models');

module.exports = {
  getUser(req, res) {
    user.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    user.findOne({ _id: req.params.postId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new post
  createUser(req, res) {
    user.create(req.body)
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => res.status(500).json(err));
  },  
  // Delete a course
  deleteCourse(req, res) {
    Course.findOneAndDelete({ _id: req.params.courseId })
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with that ID' })
          : Student.deleteMany({ _id: { $in: course.students } })
      )
      .then(() => res.json({ message: 'Course and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a course
  updateCourse(req, res) {
    Course.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with this id!' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
};