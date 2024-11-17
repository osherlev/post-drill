const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/createComment", commentController.createComment);

router.get("/comment", commentController.getCommentsbySender);

router.get("/comment/:id", commentController.getCommentById);

module.exports = router;
