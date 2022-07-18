// include the router
const router = require('express').Router();
// get methods from the controller to use in the routes connected to the user controller 
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend

} = require('../../controllers/user-Controller');

//set the user route to get all users and create users
router.route('/').get(getUser).post(createUser);
//set the user route to get a single user, update a user, or delete a user by id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
//set the user route to add and remove friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// export the user routes to the router
module.exports = router;


  





