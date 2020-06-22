const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPlugin(lazyImagesPlugin);

  return {
    dir: { input: 'src', output: '_site' }
  };
};

require('dotenv').config();