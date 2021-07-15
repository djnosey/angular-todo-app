angular.module("todoApp").component("navbar", {
  templateUrl: "partials/navbar/navbar.html",
  controller: function navbarController($http) {
    const THIS = this;
    $http.get("https://randomuser.me/api/?results=20").then((res) => {
      THIS.users = res.data.results;
      THIS.backupUsers = res.data.results;
    });

    this.resetList = () => {
      THIS.users = THIS.backupUsers;
    };

    this.getresults = (age) => {
      THIS.users = THIS.backupUsers;
      let min = age - 5;
      let max = age + 5;
      let filtered = THIS.users.filter(
        (item) => item.dob.age >= min && item.dob.age <= max
      );
      THIS.users = filtered;
    };
  },
});
