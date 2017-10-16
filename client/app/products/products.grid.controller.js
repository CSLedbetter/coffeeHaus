(function(){
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsGridController', ProductsGridController)

    ProductsGridController.$inject = ['productFactory', '$stateParams', '$state'];

    function ProductsGridController(productFactory, $stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
