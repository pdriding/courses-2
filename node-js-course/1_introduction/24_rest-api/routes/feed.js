const express = require("express"); // Import Express (needed for router)
const feedController = require("../controllers/feed"); // Import your controller (we'll make this next)

const router = express.Router(); // Create a mini-router for this file

// Define a GET route for /posts (to fetch posts later)
router.get("/posts", feedController.getPosts); // When GET /posts is hit, run getPosts from controller

router.post("/posts", feedController.createPost); // Or name it '/create-post' for clarity

module.exports = router; // Export this router for use in app.js
