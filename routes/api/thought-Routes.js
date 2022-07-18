// include the router
const router = require('express').Router();
// get methods from the controller to use in the routes connected to the thoughts controller 
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-Controller.js');

//set the thought route to get all thoughts and create thoughts
router.route('/').get(getThought).post(createThought);
//set the thought route to get a single thought, update a thought, or delete a thought by id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
//set the thought route to create a reaction
router.route('/:thoughtId/reactions').post(createReaction);
//set the thought route to delete a reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
//export the thoughts routes to the router
module.exports = router;
