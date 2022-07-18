// start the express router for the api folder index file
const router = require('express').Router();
// set the thoughts and user routes
const thoughtRoutes = require('./thought-Routes');
const userRoutes = require('./user-Routes');

// tell the router to use thoughts and user routes based on url
router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

// export the router
module.exports = router;
