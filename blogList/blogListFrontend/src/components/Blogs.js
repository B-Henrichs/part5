import React from 'react'


const Blogs = ({
  Blog,
  blogsToShow,
  removeEntry,
  handleLike,
  user
}) => {
//returns layout and uses map method on array returned with search filter(if any)
//map function takes intructions from Person component
  return(
    <div >
      <h2>Blogs</h2>
      <ul>
        {blogsToShow.map(blog =>
          <Blog key={blog.title} blog={blog} removeEntry={removeEntry} handleLike={handleLike} user={user}/>
        )}
      </ul>
    </div>
  )}
export default Blogs