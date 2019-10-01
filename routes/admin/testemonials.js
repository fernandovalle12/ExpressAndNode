var express = require('express');
var router = express.Router();
var testemonialsService = require('../../services/testemonialsService');

router.get('/createTestemonials', function(req, res, next) {

  res.render('admin/testemonials/index');
});


router.get('/testemonials', function(req, res, next) {
  var testemonials = testemonialsService.getTestemonials();
  
  var data = {
    testemonials: testemonials
  };

  res.render('admin/testemonials/index', data);
});

router.post('/create', function(req, res, next){
  var testemonials = testemonialsService.getTestemonials();

  var newId = testemonials.length + 1;

  var newTestemonials = {};
  newTestemonials.id = newId;
  newTestemonials.title = req.body.title;
  newTestemonials.description = req.body.description;

  testemonialsService.savePost(newPost);

  res.redirect('/admin/testimonials');

})

module.exports = router;