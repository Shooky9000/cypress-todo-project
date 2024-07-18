import UserAPI from "../api/UserApi";
import User from "../models/User";

export default class RegisterPage {

    private get firstNameInput(){
        return '[data-testid="first-name"]';
    };

    private get lastNameInput(){
        return '[data-testid="last-name"]';
    };

    private get emailInput(){
        return '[data-testid="email"]';
    };

    private get passwordInput(){
        return '[data-testid="password"]';
    };

    private get confirmPasswordInput(){
        return '[data-testid="confirm-password"]';
    };

    private get submitButton(){
        return '[data-testid="submit"]';
    };

    load(){
        cy.visit("/signup");
    };

    register(user: User){
        cy.get(this.firstNameInput).type(user.getFirstName());
        cy.get(this.lastNameInput).type(user.getLastName());
        cy.get(this.emailInput).type(user.getEmail());
        cy.get(this.passwordInput).type(user.getPassword(), { log: false});
        cy.get(this.confirmPasswordInput).type(user.getPassword(), { log: false });
        cy.get(this.submitButton).click();
    };

    registerUsingAPI(user: User){
        return new UserAPI().register(user).then((response)=> {
            user.setToken(response.body.access_token);
        });
    };
};