var app = angular.module('tmApp', ['ngRoute']);


    app.config(['$routeProvider',
        function config($routeProvider) {
                $routeProvider
                    .when('/items', {
                    templateUrl: 'items/items.template.html'
                    })
                    .when('/cart', {
                        templateUrl: 'cart/cart.template.html'
                    })
                    .when('/checkout', {
                        templateUrl: 'cart/checkout.template.html'
                    })
                    .when('/cartsuccess', {
                        templateUrl: 'cart/cartsuccess.template.html'
                    })
                    .otherwise('/items');
        }
    ]);


