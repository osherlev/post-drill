const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/createPost", postController.createPost);

router.get("/getAllPosts", postController.getAllPosts);

router.get("/:id", postController.getPostById);

router.get("/post", postController.getPostsBySender);

router.put("/:id", postController.updatePost);

module.exports = router;
