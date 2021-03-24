import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import BlogForm from './BlogForm'

global.confirm = () => true

test('event handler is called', () =>{

    const createBlog = jest.fn()
    const component = render(
        <BlogForm createBlog={createBlog} />
      )
      const inputTitle = component.container.querySelector('#title')
      const inputAuthor = component.container.querySelector('#author')
      const inputUrl = component.container.querySelector('#url')
      const form = component.container.querySelector('#form')
    
      fireEvent.change(inputTitle, {
        target: { value: 'Blog Title' },
      })
      fireEvent.change(inputAuthor, {
        target: { value: 'Author' },
      })
      fireEvent.change(inputUrl, {
        target: { value: 'http://blog-title.com' },
      })
      console.log('form is',prettyDOM(form))
      fireEvent.submit(form)
    
      expect(createBlog.mock.calls).toHaveLength(1)
      expect(createBlog.mock.calls[0][0].title).toBe('Blog Title')
      expect(createBlog.mock.calls[0][0].author).toBe('Author')
      expect(createBlog.mock.calls[0][0].url).toBe('http://blog-title.com')

})