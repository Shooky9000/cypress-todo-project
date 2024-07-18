import User from "../models/User";

export default class UserAPI {

    register(user: User) {
        return cy.request({
            method: "POST",
            url: "/api/v1/users/register",
            body: {
                firstName: user.getFirstName(),
                lastName: user.getLastName(),
                email: user.getEmail(),
                password: user.getPassword(),
            },
        });
    };
};