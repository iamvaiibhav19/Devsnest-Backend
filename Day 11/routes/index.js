var express = require('express');
// const registerInitialCheck = require('../middlewares/registercheck');
var router = express.Router();
var register = require('../middlewares/registercheck');
var registerController = require('../controllers/register');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', register,registerController);

module.exports = router;
