let mongoose = require("mongoose");

let ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
});
let Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
