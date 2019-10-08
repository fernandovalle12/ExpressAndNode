var express = require('express');
var router = express.Router();
var testemonialsService = require('../../services/testemonialsService');

router.get('/', function(req, res, next) {
  var testemonials = testemonialsService.getTestemonials();
  
  var data = {
    testemonials: testemonials
  };

  res.render('admin/testemonials/index', data);
});

router.get('/create', function(req, res, next) {

  res.render('admin/testemonials/create');
});

router.post('/create', function (req, res, next) {
  var testemonials = testemonialsService.getTestemonials();

  var newId = testemonials.length + 1;

  var newTestemonial = {};
  newTestemonial.id = newId;
  newTestemonial.title = req.body.title;
  newTestemonial.image = req.body.image;
  newTestemonial.description = req.body.description;

  testemonialsService.saveTestemonial(newTestemonial);

  res.redirect('/admin/testemonials');
});

module.exports = router;