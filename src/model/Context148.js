/**
 * Moosend API
 * TODO: Add a description
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Paging', 'model/Subscribers150'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Paging'), require('./Subscribers150'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.Context148 = factory(root.MoosendApi.ApiClient, root.MoosendApi.Paging, root.MoosendApi.Subscribers150);
  }
}(this, function(ApiClient, Paging, Subscribers150) {
  'use strict';




  /**
   * The Context148 model module.
   * @module model/Context148
   * @version 1.0
   */

  /**
   * Constructs a new <code>Context148</code>.
   * @alias module:model/Context148
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Context148</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Context148} obj Optional instance to populate.
   * @return {module:model/Context148} The populated <code>Context148</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Paging')) {
        obj['Paging'] = Paging.constructFromObject(data['Paging']);
      }
      if (data.hasOwnProperty('Subscribers')) {
        obj['Subscribers'] = ApiClient.convertToType(data['Subscribers'], [Subscribers150]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Paging} Paging
   */
  exports.prototype['Paging'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Subscribers150>} Subscribers
   */
  exports.prototype['Subscribers'] = undefined;



  return exports;
}));


