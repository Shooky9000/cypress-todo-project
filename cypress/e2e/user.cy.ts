import User from "../models/User";
import RegisterPage from "../pages/RegisterPage";
import TodoPage from "../pages/TodoPage";
import LoginPage from "pages/LoginPage";

describe("Register and Login test cases", ()=>{

    let user: User;
    let todoPage: TodoPage;

    before(()=> {
        user = new User();
        todoPage = new TodoPage()
    });

    it("should be able to register", () => {   
        const registerPage = new RegisterPage();

        registerPage.load();
        registerPage.register(user);
        todoPage.getWelcomeMessage().should("be.visible");
    });

    it("should be able to log in", () => {
        const loginPage = new LoginPage();

        loginPage.load();
        loginPage.login(user);
        todoPage.getWelcomeMessage().should("be.visible");
    });
});