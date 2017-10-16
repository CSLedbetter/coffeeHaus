(function () {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController)

    CustomersGridController.$inject = ['customerFactory', '$stateParams', '$state'];

    function CustomersGridController(customerFactory, $stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.remove = remove;

        activate();

        function activate() {
            customerFactory
                .getAll()
                .then(function (customers) {
                    vm.customers = customers;
                });
        }

        function remove(customer) {
            var confirm = confirm("Are you sure you want to delete?")
            if (confirm == true)
                customerFactory
                .remove(customer)
                .then(function () {
                    alert('Customer has been deleted');
                    activate();
                });
        }

    }
})();
