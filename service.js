(function () {
    'use strict';

    angular.module('ngGLPi', [])
        .service('GLPi', Service);

    Service.$inject = ['$http', 'ENDPOINTS'];
    function Service($http, ENDPOINTS) {
        var endpoints = {
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
        };

        this.initsession = initsession;
        this.killsession = killsession;
        this.getMyProfiles = getMyProfiles;
        this.getActiveProfile = getActiveProfile;
        this.changeActiveProfile = changeActiveProfile;
        this.getMyEntities = getMyEntities;
        this.getActiveEntities = getActiveEntities;
        this.changeActiveEntities = changeActiveEntities;
        this.getFullSession = getFullSession;
        this.getAnTtem = getAnTtem;
        this.getAllUtems = getAllUtems;
        this.getSubItems = getSubItems;
        this.getMultipleItems = getMultipleItems;
        this.listSearchOptions = listSearchOptions;
        this.searchItems = searchItems;
        this.addItems = addItems;
        this.updateItems = updateItems;
        this.deleteItems = deleteItems;

        function initsession() { }
        function killsession() { }
        function getMyProfiles() { }
        function getActiveProfile() { }
        function changeActiveProfile() { }
        function getMyEntities() { }
        function getActiveEntities() { }
        function changeActiveEntities() { }
        function getFullSession() { }
        function getAnTtem() { }
        function getAllUtems() { }
        function getSubItems() { }
        function getMultipleItems() { }
        function listSearchOptions() { }
        function searchItems() { }
        function addItems() { }
        function updateItems() { }
        function deleteItems() { }
    }
})();