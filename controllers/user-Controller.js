// Import the thought and user models from models/index.js 
const { Thought, User } = require('../models');

//Start exporting the promises/methods to be used in the user routes
module.exports = {
  //This gets all the users
  getUser(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //This a single users
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //This creates a users
  createUser(req, res) {
    User.create(req.body)
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => res.status(500).json(err));
  },  
  //This deletes a user, and then deletes their thoughts
  deleteUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .then((user) =>
      Thought.deleteMany({ username: user.username })
    )
    .then(() =>
      User.findOneAndDelete({ _id: req.params.userId })      
    )    
    .then((user) =>
    res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },
  //This will update a users information such as username, and email
  //When the username is changes it also changes it in their thoughts
  updateUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        Thought.updateMany(
          { username: user.username },
          { $set: { username : req.body.username } },
        )        
      )
      //Update thoughts so that the username shows the new/current username 
      .then(() =>
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
      )
      //if the user doesnt exist return an error, otherwise return the updated user document
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
    .catch((err) => res.status(500).json(err));
  },
  //This section adds friends via post, based on which ids are in the url
  addFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $push: { friends: req.params.friendId } },
    { runValidators: true, new: true },
  )
  //if the user doesnt exist return an error, otherwise return the updated user document
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },
  //This section removes a friend via delete, based on the id's in the url
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true },
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'you are not friends!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    },
  
};