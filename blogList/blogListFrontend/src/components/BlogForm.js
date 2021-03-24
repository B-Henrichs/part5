import React, { useState } from 'react'
import propTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
  const [ newTitle, setNewTitle ] = useState('')
  const [ newAuthor, setNewAuthor ] = useState('')
  const [ newUrl, setNewUrl ] = useState('')
  const [ newLikes, setNewLikes ] = useState('')

  //these change the fields when user types
  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }
  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }
  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }
  const handleLikesChange = (event) => {
    setNewLikes(event.target.value)
  }


  const addBlog = (event) => {
    event.preventDefault()
    const confirm = window.confirm('are you sure?')
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: newLikes
    }
    if (confirm){
      createBlog(blogObject)
      setNewTitle('')
      setNewAuthor('')
      setNewUrl('')
      setNewLikes('')
    }
  }


  return(
    <div>
      <h3>Update Blog List</h3>
      <form onSubmit ={addBlog}>
        <div>
          title: <input
            id='title'
            value={newTitle}
            onChange={handleTitleChange}/>
        </div>
        <div>
            author:<input
            id='author'
            value={newAuthor}
            onChange={handleAuthorChange}/>
        </div>
        <div>
            url:<input
            id='url'
            value={newUrl}
            onChange={handleUrlChange}/>
        </div>
        <div>
            likes:<input
            id='likes'
            value={newLikes}
            onChange={handleLikesChange}/>
        </div>
        <div>
          <button id='form' type="submit">update blog list</button>
        </div>
      </form>
    </div>
  )
}

BlogForm.propTypes ={
  createBlog:propTypes.func.isRequired
}
export default BlogForm