const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend

} = require('../../controllers/user-Controller');

// /api/students
router.route('/').get(getUser).post(createUser);

// /api/students/:studentId
router.route('/:UserId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;
