const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/createComment", commentController.createComment);

router.get("/comment", commentController.getCommentsBySender);

router.get("/comment/:id", commentController.getCommentById);

router.get('/post/:post_id', commentController.getCommentsByPost);

router.put('/:id', commentController.updateComment);

router.delete('/:id', commentController.deleteComment);

module.exports = router;
