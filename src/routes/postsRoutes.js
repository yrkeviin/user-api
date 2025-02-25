const express = require('express');
const router = express.Router();

const postsControllers = require('../controllers/postsControllers');

router.get('/posts', postsControllers.getAllPosts);
router.post('/posts', postsControllers.addPost);
router.get('/posts/:id', postsControllers.postById);
router.put('/posts/:id', postsControllers.updatePost);
router.delete('/posts/:id', postsControllers.deletePost);

module.exports = router;
