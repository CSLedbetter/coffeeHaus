(function () {
    'use strict';

    angular.module('app', [
        // Angular modules

        // Custom modules
        'app.core',
        'app.customers',
        'app.dashboard',
        'app.products',
        'app.sales',

        // 3rd Party Modules
        'ui.router'

    ]);
})();
