var myapp = angular.module('myApp', ["ui.router"])
myapp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/route1")

    $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "detail",
            controller: 'myController'
        })
        .state('route2', {
            url: "/",
            templateUrl: "index",
            controller: function ($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        })
})