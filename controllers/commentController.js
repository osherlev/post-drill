const Comment = require("../models/comment");

const createComment = async (req, res) => {
  try {
    const { postId, sender, content } = req.body;

    if (!postId || !sender || !content) {
      return res
        .status(400)
        .json({ error: "All fields are required: postId, sender, content" });
    }

    const comment = await Comment.create({ sender, postId, content });
    res
      .status(201)
      .json({ message: "Comment created successfully", comment: comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllComments = async (req, res) => {
  const filter = req.body.sender;
  let comments;
  try {
    comments = filter
      ? await Comment.find({ sender: filter })
      : await Comment.find();
    res.send(comments);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { createComment, getAllComments };
