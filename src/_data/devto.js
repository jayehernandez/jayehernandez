const fetch = require("node-fetch");

module.exports = async function() {
  return fetch(
    "https://dev.to/api/articles/me", {
      headers: { "api-key": process.env.ELEVENTY_DEVTO_API_KEY },
      query: { per_page: "3" }
    }
  )
    .then(res => res.json())
    .then(json => {
      return {
        posts: json.slice(0, 3)
      };
    });
};