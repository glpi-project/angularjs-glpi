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
      this.sessionToken = null;
      this.errorMsg = GLPI.defaults.error_msg;
      this.apiUrl = GLPI.defaults.global.url;
      this.appToken = GLPI.defaults.global.app_token;
      this.maxRange = GLPI.defaults.global.max_range;
      this.endpoints = {
        initSession: "initSession",
        killSession: "killSession",
        lostPassword: "lostPassword",
        getMyProfiles: "getMyProfiles",
        getActiveProfile: "getActiveProfile",
        changeActiveProfile: "changeActiveProfile",
        getMyEntities: "getMyEntities",
        getActiveEntities: "getActiveEntities",
        changeActiveEntities: "changeActiveEntities",
        getFullSession: "getFullSession",
        getMultipleItems: "getMultipleItems",
        listSearchOptions: "listSearchOptions",
        search: "search"
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
            throw new Error(this.errorMsg.invalid_authorization);
          }
          if (authorization.basic) {
            headers.Authorization = 'Basic ' + window.btoa(authorization.login + ':' + authorization.password);
          }
          if (authorization.user_token) {
            headers.Authorization = 'user_token ' + authorization.user_token;
          }
          if (authorization.app_token) {
            headers['App-Token'] = authorization.app_token;
            this.appToken = authorization.app_token;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl + this.endpoints.initsession,
            headers: headers,
            data: {},
          }).then(function (response) {
            this.sessionToken = response.data.session_token;
            responseDefer.resolve(this.sessionToken);
          }, function (error) {
            responseDefer.reject(error);
          });
          return {
            promise: responseDefer.promise,
            cancel: cancel
          };
        },
        killSession: function () {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl + this.endpoints.killSession,
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
        getMyProfiles: function () {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl + this.endpoints.getMyProfiles,
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
        getActiveProfile: function () {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl + this.endpoints.getActiveProfile,
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
        changeActiveProfile: function () { },
        getMyEntities: function () {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl + this.endpoints.getMyEntities,
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
        getActiveEntities: function () {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl + this.endpoints.getActiveEntities,
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
        changeActiveEntities: function () { },
        getFullSession: function () {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl + this.endpoints.getActiveEntities,
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
        getAnItem: function (itemtype, id) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl.toConcatSlash() + itemtype + '/' + parseInt(id),
            headers: headers,
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
        getAllItems: function (itemtype, range) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          if (range) {
            if (!validRange(range)) {
              throw new Error(this.errorMsg.invalid_range);
            }
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl.toConcatSlash() + itemtype,
            params: {
              range: range ? range : this.maxRange
            },
            headers: headers,
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
        getSubItems: function  (itemtype, id, subitem) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'GET',
            timeout: canceller.promise,
            url: this.apiUrl.toConcatSlash() + itemtype + '/' + parseInt(id) + '/' + subitem,
            headers: headers,
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
        getMultipleItems: function () { },
        listSearchOptions: function (item_type, range) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          if (range) {
            if (!validRange(range)) {
              throw new Error(this.errorMsg.invalid_range);
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
        lostPassword: function (email, passwordForgetToken, password) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          var data = {
            email: email
          };
          if (passwordForgetToken) {
            data.password_forget_token = passwordForgetToken;
            data.password = password;
          }
          $http({
            method: 'PUT',
            timeout: canceller.promise,
            url: this.apiUrl + this.endpoints.lostPassword,
            headers: headers,
            data: data,
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
        updateItem: function (itemtype, id, input) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'PUT',
            timeout: canceller.promise,
            url: this.apiUrl.toConcatSlash() + itemtype + '/' + parseInt(id),
            headers: headers,
            data: {
              input: input
            },
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
        updateItems: function (itemtype, input) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'PUT',
            timeout: canceller.promise,
            url: this.apiUrl.toConcatSlash() + itemtype,
            headers: headers,
            data: {
              input: input
            },
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
        deleteItem: function  (itemtype, id) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'DELETE',
            timeout: canceller.promise,
            url: this.apiUrl.toConcatSlash() + itemtype + '/' + parseInt(id),
            headers: headers,
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
        deleteItems: function (itemtype, input) {
          var canceller = $q.defer();
          var cancel = function (reason) {
            canceller.resolve(reason);
          };
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (this.appToken) {
            headers['App-Token'] = this.appToken;
          }
          $http({
            method: 'DELETE',
            timeout: canceller.promise,
            url: this.apiUrl.toConcatSlash() + itemtype,
            headers: headers,
            data: {
              input: input
            },
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
      };
    });
})();
