var express = require('express');
var router = express.Router();
var productService = require('../../services/productService');

router.get('/', function(req, res, next) {
  var product = productService.getProduct();
  
  var data = {
    product: product
  };

  res.render('admin/product/index', data);
});

router.get('/create', function(req, res, next) {

  res.render('admin/product/create');
});

router.post('/create', function (req, res, next) {
  var product = productService.getProduct();

  var newId = product.length + 1;

  var newProduct = {};
  newProduct.id = newId;
  newProduct.title = req.body.title;
  newProduct.description = req.body.description;
  newProduct.price = req.body.price;
  newProduct.image = req.body.image;

  productService.saveProduct(newProduct);

  res.redirect('/admin/product');
});

module.exports = router;