(function () {
  'use strict';

  angular.module('ngGLPi', [])
    .service('GLPi', function ($q, $http) {
      var maxRange = 1000;
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
      String.prototype.toValidUrl = function () {
        var lastChar = this.substr(-1);
        if (lastChar !== '/') {
          return this + '/';
        }
        return this;
      };
      return {
        initsession: function () { },
        killsession: function () { },
        getMyProfiles: function () { },
        getActiveProfile: function () { },
        changeActiveProfile: function () { },
        getMyEntities: function () { },
        getActiveEntities: function () { },
        changeActiveEntities: function () { },
        getFullSession: function () { },
        getAnTtem: function () { },
        getAllItems: function (url, itemtype, range) {
          var getUsersDefer = $q.defer();
          $http({
            method: 'GET',
            url: url.toValidUrl() + itemtype,
            params: {
              range: range ? range : maxRange
            }
          }).success(function (resp) {
            getUsersDefer.resolve(resp);
          }).error(function () {
            getUsersDefer.reject();
          });
          return getUsersDefer.promise;
        },
        getSubItems: function () { },
        getMultipleItems: function () { },
        listSearchOptions: function () { },
        searchItems: function () { },
        addItems: function () { },
        updateItems: function () { },
        deleteItems: function () { }
      };
    });
})();
