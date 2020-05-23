module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: { input: 'src', output: '_site' }
  };
};

require('dotenv').config();