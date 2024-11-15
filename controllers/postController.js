const Post = require("../models/post");

const createPost = async (req, res) => {
  const postBody = req.body;
  try {
    const post = await Post.create(postBody);
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllPosts = async (req, res) => {
  const filter = req.query.owner;
  let posts;
  try {
    posts = filter ? await Post.find({ owner: filter }) : await Post.find();
    res.send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send("Post was not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostsBySender = async (req, res) => {
  try {
    const sender = req.query.sender;

    if (!sender) {
      return res.status(400).json({ message: "Sender parameter is required" });
    }
    const posts = await Post.find({ sender });

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching posts" });
  }
};

const updatePost = async (req, res) => {
  try {
    const { message, sender } = req.body;
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { message, sender },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getPostsBySender,
  updatePost,
};
