(function(){
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsDetailController', ProductsDetailController)

    ProductsDetailController.$inject = ['productFactory', '$stateParams', '$state'];

    function ProductsDetailController(productFactory, $stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
