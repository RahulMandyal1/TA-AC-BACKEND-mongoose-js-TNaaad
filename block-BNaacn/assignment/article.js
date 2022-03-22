let mongoose = require("mongoose");

let ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likes: {
    type: Number,
    default: 0,
  },
});

let Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
