(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('productFactory', productFactory)

    productFactory.$inject = ['$http'];

    function productFactory($http) {
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
                .get('/api/products')
                .then(function (response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get('/api/products/' + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function create(product) {
            return $http
                .post('/api/products', product)
                .then(function (response) {
                    return response.data;
                });
        }

        function update(product) {
            return $http
                .put('/api/products/' + product.id, product)
                .then(function (response) {
                    return response.data;
                });
        }

        function remove(product) {
            return $http
                .delete('/api/products/' + product.id)
                .then(function (response) {
                    return response.data;
                });
        };
    }
})();
