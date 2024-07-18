import User from "../models/User";
import RegisterPage from "../pages/RegisterPage";
import TodoPage from "../pages/TodoPage";


it("should be able to register", () => {

    const user = new User();
    const registerPage = new RegisterPage();

    registerPage.load();
    registerPage.register(user);

    const todoPage = new TodoPage()
    todoPage.getWelcomeMessage().should("be.visible");
});