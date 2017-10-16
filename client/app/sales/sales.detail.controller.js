(function(){
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController)

    SalesDetailController.$inject = ['saleFactory', '$stateParams', '$state', 'productFactory'];

    function SalesDetailController(saleFactory, $stateParams, $state, productFactory) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { 
            saleFactory 
            .getById($stateParams.id)
            .then(function(sale) {
                vm.sale = sale;
            });
            productFactory
            .getAll()
            .then(function(products) {
                vm.products = products;
            });
        }
    }
})();
