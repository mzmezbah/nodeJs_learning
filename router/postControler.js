exports.getAllPost = (req,res)=> {
    console.log(req.query)
    res.send('this is get methood , post id no is =  '  + req.params.postId)
  }


  exports.createNewPost = (req,res)=>{
    res.send('this is post methood')
  }

  exports.UpdatePost =  (req,res)=> {
    res.send('this is update methood, post no is =  '+ req.params.postId)
  }

  exports.deletePost = (req,res)=>{
    res.send('this is post delete methoood , post no is = ' + req.params.postId)
  }