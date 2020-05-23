const fetch = require("node-fetch");

module.exports = async function() {
  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://dev.to/api/articles/me", { headers: { "api-key": "TSemFisUNBrDJiJiLNjs3zYB"}})
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {
      // prune the data to return only what we want
      console.log(json);
      return {
        posts: json
      };
    });
};
