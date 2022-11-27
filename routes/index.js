// import router
const router = require('express').Router();
//import all the API routes from /api/index.js
const apiRoutes= require('/api');

// add /api in front of all the api routes
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;