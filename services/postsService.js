
var getPosts = function() {
  var posts = [
    {
      id: 1,
      title: 'Post 1',
      image: 'post1.jpg',
      description: 'Meu primeiro post',
      body: 'Meu primeiro post bla blaa sdfa sdfas df asdf asdf asdf asdf'
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'post2.jpg',
      description: 'Meu segundo post',
      body: 'Meu segundo post bla bla asd f 2'
    },
    {
      id: 3,
      title: 'Sistema automatico de posts',
      image: 'post2.jpg',
      description: 'Novo sistema do meu blog',
      body: 'Esse é o novo sistema do blog da Católica de SC'
    }
  ];

  return posts;
}

module.exports = {
  getPosts: getPosts
}