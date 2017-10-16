(function(){
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesGridController', SalesGridController)

    SalesGridController.$inject = ['saleFactory', '$stateParams', '$state'];

    function SalesGridController(saleFactory, $stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;
        
        

        activate();

        function activate() {
            saleFactory
                .getAll()
                .then(function (sales) {
                    vm.sales = sales;
                });
        }

    }
})();
