const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/createComment", commentController.createComment);

router.get("/getCommentsBySender", commentController.getCommentsbySender);

module.exports = router;
