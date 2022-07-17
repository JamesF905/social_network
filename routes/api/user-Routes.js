const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend //,
  //getFriends

} = require('../../controllers/user-Controller');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//router.route('/:userId/friends/').get(getFriends).delete(removeFriend);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// router.route('/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;


  





