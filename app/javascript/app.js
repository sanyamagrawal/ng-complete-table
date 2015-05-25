"use strict";

angular
    .module("MyTableExample", ["ui.router", "flipkartCompleteTable"])
    .config(Config)
    .controller("MyTableExampleController", MyTableExampleController);

Config.$inject = ["$stateProvider", "$urlRouterProvider"];

function Config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise("/home");

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "partials/HomeView.html",
            controller: "MyTableExampleController"
        });

    // .state("about", {
    // });
}

MyTableExampleController.$inject = ["$scope"];

function MyTableExampleController($scope) {

    initController();

    function initController() {
        $scope.data = getData();
    }


}
