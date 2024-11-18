const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/createComment", commentController.createComment);

router.get("/", commentController.getCommentsBySender);

router.get("/:id", commentController.getCommentById);

router.get('/:post_id', commentController.getCommentsByPost);

router.put('/:id', commentController.updateComment);

router.delete('/:id', commentController.deleteComment);

module.exports = router;
