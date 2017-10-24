/* --------------------------------------------------------------------
*
*  LICENSE
*
*  This file is part of the GLPI API Client Library for AngularJS,
*  a subproject of GLPI. GLPI is a free IT Asset Management.
*
*  GLPI is free software: you can redistribute it and/or
*  modify it under the terms of the GNU General Public License
*  as published by the Free Software Foundation; either version 3
*  of the License, or (at your option) any later version.
*
*  GLPI is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*  --------------------------------------------------------------------
*  @author    Alexander Salas - <asalas@teclib.com>
*  @copyright (C) 2017 Teclib' and contributors.
*  @license   GPLv3 https://www.gnu.org/licenses/gpl-3.0.html
*  @link      https://github.com/glpi-project/angularjs-glpi
*  @link      http://www.glpi-project.org/
*  -------------------------------------------------------------------- */

(function () {
  'use strict';
  var options = {};
  var GLPI = {
    defaults: {
      global: {
        url: null,
        user_token: null,
        app_token: null,
        max_range: '0-1000', //End of pagination
        expand_dropdowns: false, //Show dropdown name instead of id. Optional.
        get_hateoas: true, //Show item's relations in a links attribute. Optional.
        only_id: false, //Keep only id keys in returned data. Optional.
        sort: 1, //Id of the "searchoption" to sort by. Optional.
        order: 'ASC', //Ascending sort / DESC Descending sort. Optional.
        get_sha1: false, //Get a sha1 signature instead of the full answer. Optional.
        with_infocoms: false, //Retrieve financial and administrative informations. Optional.
        with_contracts: false, //Retrieve associated contracts. Optional.
        with_documents: false, //Retrieve associated external documents. Optional.
        with_tickets: false, //Retrieve associated itil tickets. Optional.
        with_problems: false, //Retrieve associated itil problems. Optional.
        with_changes: false, //Retrieve associated itil changes. Optional.
        with_notes: false, //Retrieve Notes. Optional.
        with_logs: false, //Retrieve historical. Optional.
      },
      computer: {
        with_components: false, //Retrieve the associated components. Optional.
        with_disks: false, //Retrieve the associated file-systems. Optional.
        with_softwares: false, //Only for Computer, retrieve the associated software's installations. Optional.
        with_connections: false, //Only for Computer, retrieve the associated direct connections (like peripherals and printers) .Optional.
        with_networkports: false, //Retrieve all network's connections and advanced network's informations. Optional.
      },
      error_msg: {
        invalid_url: [
          'ERROR_INVALID_URL', ''],
        invalid_item_type: [
          'ERROR_ITEM_NOT_FOUND', ''],
        invalid_range: [
          'ERROR_INVALID_RANGE', ''],
        invalid_authorization: [
          'ERROR_INVALID_AUTHORIZATION', ''],
      }
    },
    getOptions: function (type) {
      var typeOptions = type && options[type] || {};
      return angular.extend({}, options, typeOptions);
    }
  };

  function GlpiProvider() {
    /**
     * Allow to set global options during configuration
     */
    return {
      setOptions: function (itemType, customOptions) {
        // If no itemType was specified set option for the global object
        if (!customOptions) {
          customOptions = itemType;
          options = angular.merge(options, customOptions);
        } else {
          // Set options for the specific item
          options[itemType] = angular.merge(options[itemType] || {}, customOptions);
        }
        options = (function validations(options, errorMsg) {
          if (options.global.url) {
            var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
              '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
              '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
              '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            if (pattern.test(options.global.url)) {
              var lastChar = options.global.url.substr(-1);
              if (lastChar !== '/') {
                options.global.url = options.global.url + '/';
              }
              options.global.url = options.global.url;
            } else {
              throw new Error(errorMsg.invalid_url);
            }
          }
          return options;
        })(options, GLPI.defaults.error_msg);
        angular.merge(GLPI.defaults, options);
      },
      $get: function () {
        return GlpiProvider;
      }
    };
  }
  angular.module('ngGLPI', [])
    .provider('Glpi', GlpiProvider)
    .service('GLPI', function ($q, $http) {
      var sessionToken = null;
      var errorMsg = GLPI.defaults.error_msg;
      var apiUrl = GLPI.defaults.global.url;
      var appToken = GLPI.defaults.global.app_token;
      var maxRange = GLPI.defaults.global.max_range;
      var endpoints = {
        init_session: "initSession",
        kill_session: "killSession",
        get_my_profiles: "getMyProfiles",
        get_active_profile: "getActiveProfile",
        change_active_profile: "changeActiveProfile",
        get_my_entities: "getMyEntities",
        get_active_entities: "getActiveEntities",
        change_active_entities: "changeActiveEntities",
        get_full_session: "getFullSession",
        get_multiple_items: "getMultipleItems",
        list_search_options: "listSearchOptions",
        search_items: "search"
      };
      String.prototype.toConcatSlash = function () {
        var lastChar = this.substr(-1);
        if (lastChar !== '/') {
          return this + '/';
        }
        return this;
      };
      function validRange(range) {
        var pattern = new RegExp('/^\d+-\d+|\*$/');
        return pattern.test(range);
      }
      return {
        getOptions: function (type) {
          return GLPI.getOptions(type);
        },
        initsession: function (authorization) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          if (!authorization) {
            throw new Error(errorMsg.invalid_authorization);
          }
          if (authorization.basic) {
            headers.Authorization = 'Basic ' + window.btoa(authorization.login + ':' + authorization.password);
          }
          if (authorization.user_token) {
            headers.Authorization = 'user_token ' + authorization.user_token;
          }
          if (authorization.app_token) {
            headers['App-Token'] = authorization.app_token;
            appToken = authorization.app_token;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: apiUrl + endpoints.initsession,
            headers: headers,
            data: {},
          }).then(function (response) {
            sessionToken = response.data.session_token;
            responseDefer.resolve(sessionToken);
          }, function (error) {
            responseDefer.reject(error);
          });
          return {
            promise: responseDefer.promise,
            cancel: cancel
          };
        },
        killsession: function () {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (appToken) {
            headers['App-Token'] = this.AppToken;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: apiUrl + endpoints.killsession,
            headers: headers,
            data: {},
          }).then(function () {
            responseDefer.resolve();
          }, function (error) {
            responseDefer.reject(error);
          });
          return {
            promise: responseDefer.promise,
            cancel: cancel
          };
        },
        getMyProfiles: function () { },
        getActiveProfile: function () { },
        changeActiveProfile: function () { },
        getMyEntities: function () { },
        getActiveEntities: function () { },
        changeActiveEntities: function () { },
        getFullSession: function () { },
        getAnItem: function () { },
        getAllItems: function (itemtype, range) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          if (range) {
            if (!validRange(range)) {
              throw new Error(errorMsg.invalid_range);
            }
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: apiUrl.toConcatSlash() + itemtype,
            params: {
              range: range ? range : maxRange
            },
            data: {},
          }).then(function (response) {
            responseDefer.resolve(response);
          }, function (error) {
            responseDefer.reject(error);
          });
          return {
            promise: responseDefer.promise,
            cancel: cancel
          };
        },
        getSubItems: function () { },
        getMultipleItems: function () { },
        listSearchOptions: function (item_type, range) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          if (range) {
            if (!validRange(range)) {
              throw new Error(errorMsg.invalid_range);
            }
          }
          var store = {};
          store[item_type.toString()] = "&id,name,table,field,datatype,available_searchtypes,uid";
          return {
            promise: responseDefer.promise,
            cancel: cancel
          };
        },
        searchItems: function () { },
        addItems: function () { },
        updateItems: function () { },
        deleteItems: function () { }
      };
    });
})();
