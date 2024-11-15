const Post = require('../models/post');

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
        posts = filter ? await Post.find({owner: filter}) : await Post.find();
        res.send(posts);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


module.exports = {
    createPost,
    getAllPosts
};