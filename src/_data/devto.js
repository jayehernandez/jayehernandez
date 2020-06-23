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
      let posts = json;

      posts.push({ title: "This is a test to add another post here hehe", page_views_count: 1000, positive_reactions_count: 20 })

      return {
        posts: json
      };
    });
};