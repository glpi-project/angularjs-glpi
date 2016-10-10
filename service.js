(function () {
    'use strict';

    angular.module('ngGLPi', [])
        .service('Service', Service).constant('ENDPOINTS', {
            Initsession: "/initSession/",
            Killsession: "/killSession/",
            GetMyProfiles: "/getMyProfiles/",
            GetActiveProfile: "/getActiveProfile/",
            ChangeActiveProfile: "/changeActiveProfile/",
            GetMyEntities: "/getMyEntities/",
            GetActiveEntities: "/getActiveEntities/",
            ChangeActiveEntities: "/changeActiveEntities/",
            GetFullSession: "/getFullSession/",
            GetMultipleItems: "/getMultipleItems/",
            ListSearchOptions: "/listSearchOptions/",
            SearchItems: "/search/"
        });

    Service.$inject = ['$http', 'ENDPOINTS'];
    
})();