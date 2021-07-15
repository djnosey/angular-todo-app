var todoApp = angular.module("todoApp", ["ngRoute"]);

todoApp.config(($routeProvider) => {
  $routeProvider
    .when("/home", {
      templateUrl: "/views/home/home.html",
    })
    .otherwise({
      redirectTo: "/home",
    });
});

todoApp.factory("dataStore", function () {
  return {
    todoTitle: "",
    todoDescription: "",
  };
});
