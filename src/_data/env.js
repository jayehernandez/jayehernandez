const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'production';
const isProd = environment === PROD_ENV;

module.exports = {
  siteName: 'Jaye Hernandez',
  author: 'Jaye Hernandez',
  environment,
  isProd,
  tracking: {
    gtag: process.env.ELEVENTY_GTAG,
  },
};