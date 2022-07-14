const router = require('express').Router();
const thoughtRoutes = require('./thought-Routes');
const userRoutes = require('./user-Routes');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;
