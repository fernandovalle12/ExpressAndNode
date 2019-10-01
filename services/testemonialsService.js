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

var saveTestemonials = function(newPost) {
  var testemonials = loadTestemonials();
  testemonials.push(newPost);
  saveFileTestemonials(testemonials);
}

module.exports = {
  getTestemonials: getTestemonials,
  saveTestemonials: saveTestemonials
}