const pluginLocalRespimg = require('eleventy-plugin-local-respimg');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addPlugin(pluginLocalRespimg, {
    folders: {
      source: 'src',
      output: '_site',
    },
    images: {
      resize: {
        min: 250,
        max: 1500,
        step: 150,
      },
      gifToVideo: false,
      sizes: '100vw',
      lazy: true,
      watch: {
        src: 'assets/**/*',
      },
      pngquant: {
        speed: 10,
        quality: [0.3, 0.5],
      },
      mozjpeg: {
        quality: 60,
      },
      svgo: {},
      gifresize: {},
      webp: {
        quality: 50,
      },
      gifwebp: {},
    },
  });

  return {
    dir: { input: 'src', output: '_site' }
  };
};

require('dotenv').config();