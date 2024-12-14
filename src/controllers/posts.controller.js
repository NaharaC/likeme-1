const Post = require('../models/Post')

const handleCreatePost = async (req, res) => {
    try {        
        const {titulo, url, descripcion} = req.body
        const response = await Post.agregar(titulo, url, descripcion)
        res.status(201).json(response)
    } catch (error) {
        console.error('Error al crear el post:', error.message)
        res.status(500).json({
            msg: 'Server Error',
            error: error.message
        })
    }
}

const handleGetPost = async (req, res) => {
    try {
        const response = await Post.obtenerTodos()

        res.status(200).json(response)
    } catch (error) {
            res.status(500).json({
            msg: 'Server Error',
            error: error.message
        })
    }
}

module.exports = {
    handleCreatePost,
    handleGetPost
}