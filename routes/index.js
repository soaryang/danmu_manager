var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/main', function(req, res, next) {
  res.render('index', { title: 'Express' });
  var html = new ejs({url: "/common/header.html"}).render(data);
  $("#contentContainer").html(html);
});
router.get('/', function(req, res, next) {
  res.render('login');
});

module.exports = router;
