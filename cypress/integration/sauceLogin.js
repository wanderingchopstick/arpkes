class sauceLogin {
    url(){
        cy.visit ('https://www.saucedemo.com')
    }

    enterUser(value) {
        const input = cy.get('[data-test=username]')
        input.type(value)
        return this
    }

    enterPassword(value) {
        const input = cy.get('[data-test=password]')
        input.type(value)
        return this
    }

    submit(value) {
        const submitBtn = cy.get('#login-button')
        submitBtn.click()
    }
}
export default sauceLogin