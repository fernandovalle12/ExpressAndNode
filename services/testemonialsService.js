var fs = require('fs');

var testemonialsFilePath = 'db/testemonials.json';

var loadTestemonials = function() {
  var fileData = fs.readFileSync(testemonialsFilePath, 'utf8');
  var testemonials = JSON.parse(fileData);

  return testemonials;
}

var saveFileTestemonials = function(testemonials) {
  var data = JSON.stringify(testemonials);
  fs.writeFileSync(testemonialsFilePath, data, 'utf8');
}

var getTestemonials = function() {
  var testemonials = loadTestemonials();
  return testemonials;
}

var saveTestemonial = function(newTestemonials) {
  var testemonials = loadTestemonials();
  testemonials.push(newTestemonials);
  saveFileTestemonials(testemonials);
}

module.exports = {
  getTestemonials: getTestemonials,
  saveTestemonial: saveTestemonial
}