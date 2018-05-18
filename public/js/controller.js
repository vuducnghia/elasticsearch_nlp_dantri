var app = angular.module('myApp', [])
    .controller('myController', myController);
myController.$inject = ['$scope']

function myController($scope) {
    var client = new $.es.Client({
        host:
            {
                protocol: 'http',
                host: 'localhost'
            }
    });
    $scope.data = ''
    $scope.quantify = 10
    // $scope.ar = []

    search1 = function () {
        return client.search({
            index: 'my_search',
            body: {
                query: {
                    match: {
                        content: $scope.data
                    }
                },
                size: $scope.quantify
            }
        })
    }


    $scope.search = function () {
        var x = []
        search1().then(function (data) {
            $scope.ar = data.hits.hits
            console.log(1)
        })
        
    }

};






