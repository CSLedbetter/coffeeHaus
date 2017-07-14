(function(){
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController)

    DashboardController.$inject = ['$location'];

    function DashboardController($location) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
