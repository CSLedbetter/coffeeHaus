(function(){
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController)

    DashboardController.$inject = ['dashboardFactory', '$stateParams', '$state'];

    function DashboardController(dashboardFactory, $stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
