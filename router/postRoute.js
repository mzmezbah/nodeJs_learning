let postRoute = require('express').Router()
const  {  getAllPost,
          deletePost,
          UpdatePost,
          createNewPost } = require('./postControler')


postRoute.get('/:postId', getAllPost )

postRoute.post('/',createNewPost )

postRoute.put('/:postId',UpdatePost)

postRoute.delete('/:postId', deletePost)

module.exports = postRoute
