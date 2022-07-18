const { Comment } = require("../models");

const commentdata = [
  {
    comment_text:
      "Eleven Earths could fit across Jupiter’s equator. If Earth were the size of a grape, Jupiter would be the size of a basketball.",
    user_id: 6,
    post_id: 1,
  },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
