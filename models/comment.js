const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  postId: { type: String, required: true },
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const commentModel = mongoose.model("Comments", commentSchema);

module.exports = commentModel;
