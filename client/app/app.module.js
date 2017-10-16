(function () {
    'use strict';

    angular.module('app', [
        // Angular modules

        // Custom modules
        'app.core',
        'app.customers',
        'app.dashboard',
        'app.products',
        'app.sales',

        // 3rd Party Modules
        'ui.router'

    ]).config(appConfig);

appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
    function appConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider.state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardController as dashboardCtrl',
            templateUrl: 'app/dashboard/dashboard.template.html'
        });

        $stateProvider.state('customer-grid', {
            url: '/customer-grid',
            controller: 'CustomersGridController as customersGridCtrl',
            templateUrl: 'app/customers/customers.grid.template.html'
        });

        $stateProvider.state('customer-detail', {
            url: '/customer-detail?id',
            controller: 'CustomersDetailController as customersDetailCtrl',
            templateUrl: 'app/customers/customers.detail.template.html'
        });

        $stateProvider.state('product-grid', {
            url: '/product-grid',
            controller: 'ProductsGridController as productsGridCtrl',
            templateUrl: 'app/products/products.grid.template.html'
        });;

        $stateProvider.state('product-detail', {
            url: '/product-detail?id',
            controller: 'ProductsDetailController as productsDetailCtrl',
            templateUrl: 'app/products/products.detail.template.html'
        });

         $stateProvider.state('sale-grid', {
            url: '/sale-grid',
            controller: 'SalesGridController as salesGridCtrl',
            templateUrl: 'app/sales/sales.grid.template.html'
        });;

        $stateProvider.state('sale-detail', {
            url: '/sale-detail?id',
            controller: 'SalesDetailController as salesDetailCtrl',
            templateUrl: 'app/sales/sales.detail.template.html'
        });

    }
})();
