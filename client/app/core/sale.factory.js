(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('saleFactory', saleFactory)

    saleFactory.$inject = ['$http'];

    function saleFactory($http) {
        var service = {
            getAll: getAll
        };

        return service;

        function getAll() { }
    }
})();
