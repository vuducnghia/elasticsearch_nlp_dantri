
// We define an EsConnector module that depends on the elasticsearch module.     
var EsConnector = angular.module('EsConnector', ['elasticsearch']);

// Create the es service from the esFactory
EsConnector.service('es', function (esFactory) {
    return esFactory({ host: 'localhost:9200' });
});
//192.168.0.187
// We define an Angular controller that returns the server health
// Inputs: $scope and the 'es' service

EsConnector.controller('ServerHealthController', function ($scope, es) {

    es.cluster.health(function (err, resp) {
        if (err) {
            $scope.data = err.message;
        } else {
            $scope.data = resp;
        }
    });
});

// We define an Angular controller that returns query results,
// Inputs: $scope and the 'es' service

EsConnector.controller('QueryController', function ($scope, es) {
    var ar = []
    $scope.search = function (callback) {
        es.search({
            index: 'my_search',
            size: 20,
            body: {
                "query": {
                    "multi_match": {
                        "query": $scope.data,
                        "fields": ["title", "content"]
                    }
                },
                // "highlight": {
                //     "require_field_match": false,
                //     "pre_tags": ["<h1>"],
                //     "post_tags": ["</h1>"],
                //     "fields": {
                //         "content": {}
                //     }
                // },
                // "size": 10
            }

        }).then(function (response) {
            // console.log(response)
            console.log(response.hits.hits)
            $scope.hits = response.hits.hits;
        });
    }
});

EsConnector.controller('QueryController2', function ($scope, es) {
    var url = window.location.pathname;
    var key = url.substring(url.lastIndexOf('-') + 1)
    var id = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('-'));
    console.log(id)
    console.log(key)

    console.log(id)
    init()
    function init() {
        es.search({
            index: 'my_search',
            size: 10,
            body: {
                "query": {
                    "term": {
                        "_id": id
                    }
                }
                
            }

        }).then(function (response) {
            console.log(response.hits.hits)
            $scope.hits = response.hits.hits;
        });
    }
});