let express = require('express');
let router = express.Router();

// get users listing
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;