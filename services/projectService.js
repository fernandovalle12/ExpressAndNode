
var getProject = function() {
  var project = [
    {
      id: 1,
      title: 'Project 1',
      image: 'post1.jpg',
      description: 'My first project',
      body: 'My first project with Express'
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'post2.jpg',
      description: 'My second project',
      body: 'Second project of my life'
    },
    {
      id: 3,
      title: 'Project 3',
      image: 'post2.jpg',
      description: 'My third project',
      body: 'Third project of my life'
    }
  ];

  return project;
}

module.exports = {
  getProject: getProject
}