(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('saleFactory', saleFactory)

    saleFactory.$inject = ['$http'];

    function saleFactory($http) {
       var service = {
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            remove: remove
        };

        return service;

        function getAll() {
            return $http
                .get('/api/sales')
                .then(function (response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get('/api/sales/' + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function create(sale) {
            return $http
                .post('/api/sales', sale)
                .then(function (response) {
                    return response.data;
                });
        }

        function update(sale) {
            return $http
                .put('/api/sales/' + sale.id, sale)
                .then(function (response) {
                    return response.data;
                });
        }

        function remove(sale) {
            return $http
                .delete('/api/sales/' + sale.id)
                .then(function (response) {
                    return response.data;
                });
        };
    }
})();
