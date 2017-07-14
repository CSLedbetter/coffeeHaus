(function () {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController)

    CustomersGridController.$inject = ['customerFactory'];

    function CustomersGridController(customerFactory) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() {
            customerFactory
                .getAll()
                .then(function( customers) {
                    vm.customers = customers;
                });
        }
    }
})();
