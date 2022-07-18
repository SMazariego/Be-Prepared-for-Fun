const { Post } = require("../models");

const postdata = [
  {
    title: "James Webb Space Telescope - First Jupiter Images",
    post_url:
      "https://gizmodo.com/webb-telescope-jupiter-images-nasa-1849182469",
    user_id: 10,
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
