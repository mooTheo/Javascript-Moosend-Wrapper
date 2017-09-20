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
    root.MoosendApi.TestingACampaignResponse = factory(root.MoosendApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TestingACampaignResponse model module.
   * @module model/TestingACampaignResponse
   * @version 1.0
   */

  /**
   * Constructs a new <code>TestingACampaignResponse</code>.
   * @alias module:model/TestingACampaignResponse
   * @class
   * @param code {Number} 
   * @param error {String} 
   * @param context {String} 
   */
  var exports = function(code, error, context) {
    var _this = this;

    _this['Code'] = code;
    _this['Error'] = error;
    _this['Context'] = context;
  };

  /**
   * Constructs a <code>TestingACampaignResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestingACampaignResponse} obj Optional instance to populate.
   * @return {module:model/TestingACampaignResponse} The populated <code>TestingACampaignResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'Number');
      }
      if (data.hasOwnProperty('Error')) {
        obj['Error'] = ApiClient.convertToType(data['Error'], 'String');
      }
      if (data.hasOwnProperty('Context')) {
        obj['Context'] = ApiClient.convertToType(data['Context'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Number} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * 
   * @member {String} Error
   */
  exports.prototype['Error'] = undefined;
  /**
   * 
   * @member {String} Context
   */
  exports.prototype['Context'] = undefined;



  return exports;
}));


