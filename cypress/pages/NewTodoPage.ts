import TodoAPI from "../api/TodoApi";
import User from "../models/User";

export default class NewTodoPage{

    get newTodoInput(){
        return '[data-testid="new-todo"]';
    };

    get newTodoSubmit(){
        return '[data-testid="submit-newTask"]';
    };

    load(){
        cy.visit("/todo/new");
    };

    addTodo(task: string){
        cy.get(this.newTodoInput).type(task)
        cy.get(this.newTodoSubmit).click();
    };

    addTodoUsingAPI(user: User){
        return new TodoAPI().addTodo(user);
    };
};