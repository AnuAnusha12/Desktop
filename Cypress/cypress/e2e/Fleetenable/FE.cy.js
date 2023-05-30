describe( 'Log in with Fleetenable app' ,() => 
{
    it( 'Should work', ()=>
    
    {
        cy.visit ('https://app.fleetenable.com/')
        cy.get ('#user_email').type('demouser@fleetenable.com');
        cy.wait(2000);
        cy.get('#user_password').type('test1234');
        cy.get('.btn').click()
          
    })
    Cypress. on('uncaught:exception', (err,runnable) => 
    { return false; });

})
    
    