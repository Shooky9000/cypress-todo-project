import User from "../models/User";
import UserAPI from "../api/UserApi";
import TodoAPI from "../api/TodoApi";
import TodoPage from "../pages/TodoPage";
import NewTodoPage from "../pages/NewTodoPage";
import RegisterPage from "../pages/RegisterPage";

describe("Todo Test cases", ()=> {

    let user: User;
    let registerPage: RegisterPage;
    let newTodoPage: NewTodoPage;
    let todoPage: TodoPage;

    beforeEach(()=> {
        user = new User();
        newTodoPage = new NewTodoPage();
        todoPage = new TodoPage();
        registerPage = new RegisterPage();
        registerPage.registerUsingAPI(user);
    });

    it("should be able to add a todo", () => {
        newTodoPage.load();
        newTodoPage.addTodo("Learn Cypress!");
        todoPage.getTodoItem().should("contain.text","Learn Cypress!");
    });

    it("should be able to delete a todo", () => {
        newTodoPage.addTodoUsingAPI(user);
        todoPage.load();
        todoPage.deleteTodo();
        todoPage.getNoTodosMessage().should("be.visible");
    });
});