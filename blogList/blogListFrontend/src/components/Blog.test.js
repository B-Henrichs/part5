import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'Test Title',
      author: 'Test Author',
      url: 'testURL.com',
      likes: '5',
      user:{
        username:'Bob'
    }
}
 const user = {
    username:'Bob'
 }
 
  const component = render(
    <Blog blog={blog} user={user} />
  )
  const button = component.container.querySelector('button')
  //console.log(prettyDOM(button))
  component.debug()
  // method 1
  expect(component.container).toHaveTextContent(
    'Test Title'
  )
  // method 2
  const element = component .getByText(
      'Test Author'
  )
  expect(element).toBeDefined()

  // method 3 
  /*
  const div = component.container.querySelector('blog')
  expect(div).toHaveTextContent(
    'Test Title'
  )
*/



})


test('clicking the button reveals URL and likes ', () => {
  const blog = {
    title: 'Test Title',
      author: 'Test Author',
      url: 'testURL.com',
      likes: '5',
      user:{
        username:'Bob'
    }
}
 const user = {
    username:'Bob'
 }

  

  const component = render(
    <Blog blog={blog} user={user} />
  )

  const button = component.getByText('view')
  console.log()
  console.log('button is',prettyDOM(button))
  fireEvent.click(button)
component.debug()


  expect(component.container).toHaveTextContent(
    'testURL.com'
  )
  expect(component.container).toHaveTextContent(
    '5'
  )
})

test('clicking the button reveals URL and likes ', () => {
  const blog = {
    title: 'Test Title',
      author: 'Test Author',
      url: 'testURL.com',
      likes: '5',
      user:{
        username:'Bob'
    }
}
 const user = {
    username:'Bob'
 }

 const mockHandler = jest.fn()
  const component = render(
    <Blog blog={blog} user={user} handleLike={mockHandler}/>
  )

  const view = component.getByText('view')
  fireEvent.click(view)
  const like =component.getByText('like')
  fireEvent.click(like)
  fireEvent.click(like)
  

expect(mockHandler.mock.calls).toHaveLength(2)

})