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
      var errorMsg = {
        invalid_url: [
          'ERROR_INVALID_URL', ''],
        invalid_itemtype: [
          'ERROR_ITEM_NOT_FOUND', ''],
        invalid_range: [
          'ERROR_INVALID_RANGE', ''],
      };
      String.prototype.toConcatSlash = function () {
        var lastChar = this.substr(-1);
        if (lastChar !== '/') {
          return this + '/';
        }
        return this;
      };
      function validURL(url) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(url);
      }
      function validItemType(itemtype) {
        var itemtypes = ['User'];
        var found = itemtypes.indexOf(itemtype);
        if (found === -1) {
          return false;
        } else {
          return true;
        }
      }
      function validRange(range) {
        var pattern = new RegExp('/^\d+-\d+|\*$/');
        return pattern.test(range);
      }
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
          if (!validURL(url)) {
            throw new Error(errorMsg.invalid_url);
          }
          if (!validItemType(itemtype)) {
            throw new Error(errorMsg.invalid_url);
          }
          if (range) {
            if (!validRange(range)) {
              throw new Error(errorMsg.invalid_range);
            }
          }
          $http({
            method: 'GET',
            url: url.toConcatSlash() + itemtype,
            params: {
              range: range ? range : maxRange
            }
          }).success(function (resp) {
            getUsersDefer.resolve(resp);
          }).error(function (error) {
            getUsersDefer.reject(error);
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
