var app = angular.module('tmApp', ['ngRoute']);


    app.config(['$routeProvider',
        function config($routeProvider) {
                $routeProvider.
                when('/items', {
                    templateUrl: 'items/items.template.html'
                }).
                otherwise('/items');
        }
    ]);


