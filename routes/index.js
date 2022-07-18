// start the express router for the router index file
const router = require('express').Router();
// set the api routes
const apiRoutes = require('./api');
//tell the router to use the api routs based on url
router.use('/api', apiRoutes);
//tell the router what to do if someone uses the wrong route
router.use((req, res) => res.send('Wrong route!'));

//export the router
module.exports = router;
