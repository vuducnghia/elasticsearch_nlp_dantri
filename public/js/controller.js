var app = angular.module('myApp', ['ui.router'])
    .controller('myController', myController);
    myController.$inject = ['$scope']

function myController($scope) {
    $scope.quantify = 10
    $scope.search = function (data, quantify) {
        console.log(data)
        $scope.item = null
        var y = {

        }
        var client = new $.es.Client({
            host:
                {
                    protocol: 'http',
                    host: 'localhost'
                }
        });
        client.search({
            index: 'my_search',
            body: {
                query: {
                    match: {
                        content: data
                    }
                },
                size: quantify
            }
        }).then(function (response) {
            console.log(response.hits.hits)
            $scope.ar = response.hits.hits

        })
    }
    $scope.transfer = function (obj) {
        console.log(obj)
        $scope.item = obj
    }
};






