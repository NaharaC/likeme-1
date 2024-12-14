const {Router} = require('express')
const {handleCreatePost, handleGetPost} = require('../controllers/posts.controller')

const router = Router();

router.post('/posts', handleCreatePost)

router.get('/posts', handleGetPost)

module.exports = router