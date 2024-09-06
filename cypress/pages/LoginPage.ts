import User from "../models/User";

export default class LoginPage {

    getEmailInput(){
        return '[data-testid="email"]';
    };

    getPasswordInput(){
        return '[data-testid="password"]';
    };

    getSubmitButton(){
        return '[data-testid="submit"]';
    };

    load(){
        cy.visit("/login");
    };


    login(user: User){
        cy.get(this.getEmailInput()).type(user.getEmail());
        cy.get(this.getPasswordInput()).type(user.getPassword());
        cy.get(this.getSubmitButton()).click();
    }
};