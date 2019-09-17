var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectService = require('../services/projectService');
var noticiasService = require('../services/noticiasService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts().slice(0, 3);

  res.render('index', { title: 'Blog', posts: posts });
});

router.get('/posts/:postId', function(req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('postDetails', { title: post.title, post: post });

});

router.get('/posts', function(req, res, next){
  var posts = postsService.getPosts();

  res.render('allPosts', { title: 'Posts', posts: posts});
});

router.get('/Projects', function(req, res, next){
  var projectId = req.params.projectId;

  var project = projectService.getProject();

  var projects = project.filter((projects) => project.id == projectId)[0];

  res.render('Projects', { title: projects.title, project: project})
});

router.get('/noticias', function(req, res, next){
  var noticia = noticiasService.getNoticias();

  res.render('Noticias', { title: 'Noticias', noticia: noticia});
});

module.exports = router;


