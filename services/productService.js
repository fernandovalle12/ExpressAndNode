var fs = require('fs');

var productFilePath = 'db/product.json';

var loadFileProduct = function() {
  var fileData = fs.readFileSync(productFilePath, 'utf8');
  var product = JSON.parse(fileData);

  return product;
}

var saveFileProduct = function(product) {
  var data = JSON.stringify(product);
  fs.writeFileSync(productFilePath, data, 'utf8');
}

var getProduct = function() {
  var product = loadFileProduct();
  return product;
}

var saveProduct = function(newProduct) {
  var product = loadFileProduct();
  product.push(newProduct);
  saveFileProduct(product);
}

module.exports = {
  getProduct: getProduct,
  saveProduct: saveProduct
}