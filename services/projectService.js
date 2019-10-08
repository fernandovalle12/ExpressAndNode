var fs = require('fs');

var projectFilePath = 'db/project.json';

var loadFileProject = function() {
  var fileData = fs.readFileSync(projectFilePath, 'utf8');
  var project = JSON.parse(fileData);

  return project;
}

var saveFileProject = function(project) {
  var data = JSON.stringify(project);
  fs.writeFileSync(projectFilePath, data, 'utf8');
}

var getProject = function() {
  var project = loadFileProject();
  return project;
}

var saveProject = function(newProject) {
  var project = loadFileProject();
  project.push(newProject);
  saveFileProject(project);
}

module.exports = {
  getProject: getProject,
  saveProject: saveProject
}