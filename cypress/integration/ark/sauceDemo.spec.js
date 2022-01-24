import sauceLogin from '../sauceLogin'


describe ('Arkpes Custom Command - Standard User', function(){
    const url = "https://www.saucedemo.com"

    before (() => {
        cy.visit(url)
    })

    it ('Launch Sauce Demo', function(){
        //assert login page is correct
        cy.title().should('eq', 'Swag Labs')
        //check for login fields and buttons
        cy.get('[data-test=username]')
        cy.get('[data-test=password]')
        cy.get('#login-button')
    })    
    it('Login', function(){
        //login custom command
        cy.login('[data-test=username]','[data-test=password]', 'standard_user','secret_sauce', '#login-button')
    })
    it('Validate landing page', function(){
        //assertion for Products page header
        cy.contains('Products')
    })
    it('Check for problems - cute dog pic', function(){
        cy.get('.inventory_list').find('img').not('have.attr', 'src').not('include','sl-404.168b1cce.jpg')
    })
    it('Logout', function(){
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })

})
describe ('Arkpes POM - Standard User', function(){
    const sl = new sauceLogin

    before(() => {
        sl.url()
    })
    it ('Login page assertion', function(){
        //assert login page is correct
        cy.title().should('eq', 'Swag Labs')
        //check for login fields and buttons
        cy.get('[data-test=username]')
        cy.get('[data-test=password]')
        cy.get('#login-button')
    })
    
    it('Login - POM Method', function(){
        sl.enterUser('standard_user')
        sl.enterPassword('secret_sauce')
        sl.submit()
    })

    it('Validate landing page', function(){
        //assertion for Products page header
        cy.contains('Products')
    })

    it('Logout', function(){
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })

})
describe('Arkpes POM - Locked Out User', function(){
    const sl = new sauceLogin

    before(() => {
        sl.url()
    })
    it ('Login page assertion', function(){
        //assert login page is correct
        cy.title().should('eq', 'Swag Labs')
        //check for login fields and buttons
        cy.get('[data-test=username]')
        cy.get('[data-test=password]')
        cy.get('#login-button')
    })
    it('Login - POM Method', function(){
        sl.enterUser('locked_out_user')
        sl.enterPassword('secret_sauce')
        sl.submit()
    })
    it('Check for lock out message', function(){
        cy.contains('Epic sadface: Sorry, this user has been locked out.')
    })
})
describe('Arkpes POM - Problem User', function(){
    const sl = new sauceLogin

    before(() => {
        sl.url()
    })
    it ('Login page assertion', function(){
        //assert login page is correct
        cy.title().should('eq', 'Swag Labs')
        //check for login fields and buttons
        cy.get('[data-test=username]')
        cy.get('[data-test=password]')
        cy.get('#login-button')
    })
    it('Login - POM Method', function(){
        sl.enterUser('problem_user')
        sl.enterPassword('secret_sauce')
        sl.submit()
    })
    it('Validate landing page', function(){
        //assertion for Products page header
        cy.contains('Products')
    })
    
    it('Check for problems - default cute dog pic', function(){
        cy.get('.inventory_list').find('img').should('have.attr', 'src').should('include','sl-404.168b1cce.jpg')
    })
    it('Logout', function(){
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
})
describe('Arkpes POM - Problem User', function(){
    const sl = new sauceLogin

    // before(() => {
    //     sl.url()
    // })
    it('should run performance audits', () => {
        cy.visit('https://www.saucedemo.com')
        cy.lighthouse();
    })
    
    it.only('should run lighthouse performance audits using custom thresholds', () => {
        const thresholds = {
            performance: 50,
            'first-contentful-paint': 2000,
            'largest-contentful-paint': 3000,
            accessibility: 80,
            interactive: 2000,
            seo: 60,
            pwa: 50,
        };

        const lighthouseConfig = {
            formFactor: 'desktop',
            screenEmulation: {
                disabled: true
            }
        };

        cy.visit('https://www.saucedemo.com');
        cy.lighthouse(thresholds, lighthouseConfig);
    });

    it ('Login page assertion', function(){
        //assert login page is correct
        cy.title().should('eq', 'Swag Labs')
        //check for login fields and buttons
        cy.get('[data-test=username]')
        cy.get('[data-test=password]')
        cy.get('#login-button')
    })
    it('Login - POM Method', function(){
        sl.enterUser('problem_user')
        sl.enterPassword('secret_sauce')
        sl.submit()
    })
    it('Validate landing page', function(){
        //assertion for Products page header
        cy.contains('Products')
    })
    
    it('Check for problems - default cute dog pic', function(){
        cy.get('.inventory_list').find('img').should('have.attr', 'src').should('include','sl-404.168b1cce.jpg')
    })
    it('Logout', function(){
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
})
