const createPost = require('./createPost');

module.exports = () => {
  const data = { posts: [] };

  for (let i = 0; i < 50; i++) {
    data.posts.push(createPost());
  }

  return data;
};
