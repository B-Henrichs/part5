describe('Blog app', function() {
    beforeEach(function() {
      cy.request('POST', 'http://localhost:3001/api/testing/reset')
      const user = {
      name: 'bob',
      username: 'bob',
      password: 'sekret1'
      }
      cy.request('POST', 'http://localhost:3001/api/users/', user) 
      cy.login({ username: 'bob', password: 'sekret1' })
      
      })
      /*
      it.only('login fails with wrong password', function() {
        cy.contains('login').click()
        cy.get('#username').type('mluukkai')
        cy.get('#password').type('wrong')
        cy.get('#login-button').click()
        
        cy.contains('Wrong credentials')
        cy.get('html').should('not.contain', 'Welcome Matti Luukkainen')
      })
      */
    describe('when logged in', function() {
  

        it('a new blog can be created', function() {
          cy.contains('add blog').click()
          cy.get('#title').type('a blog to test with cypress')
          cy.get('#author').type('test author')
          cy.get('#url').type('testURL.com')
          cy.get('#likes').type('5')
          cy.contains('update blog list').click()
          cy.contains('Added a blog to test with cypress')
        })
        
        it('and the like button can be pressed', function(){
          cy.addBlog({
            title: 'a blog to test with cypress',
            author:'test author',
            url:'testURL.com',
            likes:'5'
          })
          cy.contains('view').click()
          cy.get('#likeButton').click()
        })

        it('and you can delete your blogs', function(){
          cy.addBlog({
            title: 'a blog to test with cypress',
            author:'test author',
            url:'testURL.com',
            likes:'5'
          })
          cy.contains('view').click()
          cy.get('#deleteButton').click()
          cy.contains('Deleted a blog to test with cypress\'s entry')
        })
        it('and someone else cant delete it', function(){
          cy.addBlog({
            title: 'a blog to test with cypress',
            author:'test author',
            url:'testURL.com',
            likes:'5'
          })
          cy.contains('Log out').click()
          const user = {
            name: 'bill',
            username: 'bill',
            password: 'sekret2'
            }
            cy.request('POST', 'http://localhost:3001/api/users/', user) 
          cy.login({ username: 'bill', password: 'sekret2' })
          cy.contains('view').click()
          cy.get('#deleteButton').should('not.be.visible')
        })
        it('blogs are ordered by likes', function(){
          cy.addBlog({
            title: 'a blog to test with cypress',
            author:'test author',
            url:'testURL.com',
            likes:'5'
          })
          cy.addBlog({
            title: 'a blog to test with cypress1',
            author:'test author1',
            url:'testURL.com1',
            likes:'6'
          })
          cy.get('#blog').then( blogs => {
            expect(blogs[0]).to.contain.text('cypress1')
          })
          cy.addBlog({
            title: 'a blog to test with cypress2',
            author:'test author2',
            url:'testURL.com2',
            likes:'7'
          })
          cy.get('#blog').then( blogs => {
            expect(blogs[0]).to.not.contain.text('cypress1')
          })
        })
    })

})

