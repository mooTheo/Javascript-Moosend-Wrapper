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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.Paging = factory(root.MoosendApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Paging model module.
   * @module model/Paging
   * @version 1.0
   */

  /**
   * Constructs a new <code>Paging</code>.
   * @alias module:model/Paging
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Paging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Paging} obj Optional instance to populate.
   * @return {module:model/Paging} The populated <code>Paging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CurrentPage')) {
        obj['CurrentPage'] = ApiClient.convertToType(data['CurrentPage'], 'Number');
      }
      if (data.hasOwnProperty('PageSize')) {
        obj['PageSize'] = ApiClient.convertToType(data['PageSize'], 'Number');
      }
      if (data.hasOwnProperty('SortExpression')) {
        obj['SortExpression'] = ApiClient.convertToType(data['SortExpression'], 'String');
      }
      if (data.hasOwnProperty('SortIsAscending')) {
        obj['SortIsAscending'] = ApiClient.convertToType(data['SortIsAscending'], 'Boolean');
      }
      if (data.hasOwnProperty('TotalPageCount')) {
        obj['TotalPageCount'] = ApiClient.convertToType(data['TotalPageCount'], 'Number');
      }
      if (data.hasOwnProperty('TotalResults')) {
        obj['TotalResults'] = ApiClient.convertToType(data['TotalResults'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Number} CurrentPage
   */
  exports.prototype['CurrentPage'] = undefined;
  /**
   * 
   * @member {Number} PageSize
   */
  exports.prototype['PageSize'] = undefined;
  /**
   * 
   * @member {String} SortExpression
   */
  exports.prototype['SortExpression'] = undefined;
  /**
   * 
   * @member {Boolean} SortIsAscending
   */
  exports.prototype['SortIsAscending'] = undefined;
  /**
   * 
   * @member {Number} TotalPageCount
   */
  exports.prototype['TotalPageCount'] = undefined;
  /**
   * 
   * @member {Number} TotalResults
   */
  exports.prototype['TotalResults'] = undefined;



  return exports;
}));


