import React, { useState } from 'react'

const Blog = ({
  blog,
  removeEntry,
  handleLike,
  user
}) => {
  const [expanded, setExpanded] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  console.log('user at blog', user.username)
  console.log('blog at blog', blog)

  const NotVisible =  { display: 'none' }
  const Visible = { display: 'inline' }
  const handleVisibility = () => {
    if(user.username !== blog.user.username){
      return(NotVisible)
    }else{
      return(Visible)
    }
  }

  const onlyUser = handleVisibility()

  const toggleExpanded = () => {
    setExpanded(!expanded)}

  return (
    <div style={blogStyle} id='blog'>
      {!expanded&& <p>{blog.title}</p>}<br/><p>{blog.author}</p>
      {!expanded&& <button onClick={toggleExpanded}>view</button>}
      {expanded &&
        <li className='blog'>
          {blog.title}<br/>
          {blog.author}<br/>
          {blog.url}<br/>
          {blog.likes}<button id='likeButton' value={blog.id} onClick={handleLike}>like</button><br/>
          <button onClick={() => setExpanded(false)}>hide</button>  <button  id='deleteButton' style={onlyUser} onClick={removeEntry} value={blog.id} >Delete</button>
        </li>}
    </div>
  )
}


export default Blog