(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('dashboardFactory', dashboardFactory)

    dashboardFactory.$inject = ['$http'];

    function dashboardFactory($http) {
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
                .get('/api/dashboards')
                .then(function (response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get('/api/dashboards/' + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function create(dashboard) {
            return $http
                .post('/api/dashboards', dashboard)
                .then(function (response) {
                    return response.data;
                });
        }

        function update(dashboard) {
            return $http
                .put('/api/dashboards/' + dashboard.id, dashboard)
                .then(function (response) {
                    return response.data;
                });
        }

        function remove(dashboard) {
            return $http
                .delete('/api/dashboards/' + dashboard.id)
                .then(function (response) {
                    return response.data;
                });
        };
    }
})();
