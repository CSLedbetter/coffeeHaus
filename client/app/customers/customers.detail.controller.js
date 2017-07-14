(function () {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController)

    CustomersDetailController.$inject = ['customerFactory', '$stateParams', '$state'];

    function CustomersDetailController(customerFactory, $stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.save = save;

        activate();

        function activate() {
            if ($stateParams.id) {
                customerFactory
                    .getById($stateParams.id)
                    .then(function (customer) {
                        vm.customer = customer;
                    });
            }  else {
                vm.customer = {};
            }

        }

        function save(customer) {
            customerFactory
                .update(customer)
                .then(function() {
                    alert('Saved!');
                    $state.go('customer-grid');
                });
        };

    }
})();
