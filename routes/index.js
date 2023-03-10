var express = require('express');
var router = express.Router();

var dbtest_controller = require('../controllers/dbtestController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dbtest page. */
router.get('/dbtest', dbtest_controller.dbtest);

module.exports = router;
