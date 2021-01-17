const withImages = require('next-images');
module.exports = withImages({
  target: 'serverless',
  distDir: 'out',
});
