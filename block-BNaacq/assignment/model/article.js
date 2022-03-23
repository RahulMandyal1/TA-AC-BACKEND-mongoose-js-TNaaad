let mongoose = require("mongoose");
let Schema = mongoose.Schema;
const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    tags: [String],
    likes: {
      type: Number,
      default: 0,
    },
    author: Schema.Types.ObjectId,
    comments: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

let Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
