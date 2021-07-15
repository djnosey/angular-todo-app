angular.module("todoApp").component("todoForm", {
  templateUrl: "partials/navbar/todo/todoForm.html",
  controller: function todoFormController(dataStore) {
    const self = this;
    self.todos = [];
    self.addTodo = () => {
      console.log("clicked");
      dataStore = {
        todoTitle: "{{title}}",
        todoDescription: "{{description}}",
      };
      self.todos.push(dataStore);
      dataStore = {
        todoTitle: "",
        todoDescription: "",
      };
    };
  },
});
