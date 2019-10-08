var express = require('express');
var router = express.Router();
var projectService = require('../../services/projectService');

router.get('/', function(req, res, next) {
  var project = projectService.getProject();
  
  var data = {
    project: project
  };

  res.render('admin/project/index', data);
});

router.get('/create', function(req, res, next) {

  res.render('admin/project/create');
});

router.post('/create', function (req, res, next) {
  var project = projectService.getProject();

  var newId = project.length + 1;

  var newProject = {};
  newProject.id = newId;
  newProject.title = req.body.title;
  newProject.image = req.body.image;
  newProject.description = req.body.description;

  projectService.saveProject(newProject);

  res.redirect('/admin/project');
});

module.exports = router;