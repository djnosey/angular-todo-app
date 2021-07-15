angular.module("todoApp").component("todoComponent", {
  templateUrl: "partials/navbar/todo/todo.html",
  controller: function todoController(dataStore) {
    this.dataStore = dataStore;
  },
});
