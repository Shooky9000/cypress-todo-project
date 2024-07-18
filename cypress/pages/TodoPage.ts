export default class TodoPage {

    private get WelcomeMessage(){
        return '[data-testid="welcome"]';
    };

    private get deleteButton(){
        return '[data-testid="delete"]';
    };

    private get noTodosMessage(){
        return '[data-testid="no-todos"]';
    };
    
    private get todoItem(){
        return '[data-testid="todo-item"]';
    };

    getWelcomeMessage(){
        return cy.get(this.WelcomeMessage);
    };

    load(){
        cy.visit("/todo");
    };

    deleteTodo(){
        return cy.get(this.deleteButton).click();
    };

    getNoTodosMessage(){
        return cy.get(this.noTodosMessage);
    };

    getTodoItem(){
        return cy.get(this.todoItem);
    };
};