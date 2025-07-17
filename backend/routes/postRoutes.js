const express = require('express');
const { getPostController, addPostController, updatePostController, deletePostController, getSinglePostController } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getPostController)
router.get('/:id', getSinglePostController);

router.post('/add',authMiddleware, addPostController)
router.put('/update',authMiddleware ,updatePostController)
router.delete('/delete/:id',authMiddleware ,deletePostController)

module.exports = router;