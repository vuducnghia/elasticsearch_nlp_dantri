var app = angular.module('myApp', [])
    .controller('myController', ['$scope', function ($scope) {
        $scope.quantify = 10
        $scope.search = function (data, quantify) {
            console.log(data)
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
    }]);





