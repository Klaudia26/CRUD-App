const createPost = require('./createPost');

module.exports = (req, _res, next) => {
  if (req.method === 'POST') {
    req.body = createPost(req.body.name);
  }

  next();
};
