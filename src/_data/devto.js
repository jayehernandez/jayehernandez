const fetch = require("node-fetch");

module.exports = async function() {
  console.log(env.devKey);
  return fetch("https://dev.to/api/articles/me", { headers: { "api-key": "TSemFisUNBrDJiJiLNjs3zYB" }, query: { per_page: "3" }})
    .then(res => res.json())
    .then(json => {
      return {
        posts: json
      };
    });
};