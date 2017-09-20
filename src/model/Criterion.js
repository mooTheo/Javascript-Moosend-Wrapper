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
    root.MoosendApi.Criterion = factory(root.MoosendApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Criterion model module.
   * @module model/Criterion
   * @version 1.0
   */

  /**
   * Constructs a new <code>Criterion</code>.
   * @alias module:model/Criterion
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Criterion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Criterion} obj Optional instance to populate.
   * @return {module:model/Criterion} The populated <code>Criterion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Comparer')) {
        obj['Comparer'] = ApiClient.convertToType(data['Comparer'], 'Number');
      }
      if (data.hasOwnProperty('CustomFieldID')) {
        obj['CustomFieldID'] = ApiClient.convertToType(data['CustomFieldID'], 'String');
      }
      if (data.hasOwnProperty('DateFrom')) {
        obj['DateFrom'] = ApiClient.convertToType(data['DateFrom'], 'String');
      }
      if (data.hasOwnProperty('DateTo')) {
        obj['DateTo'] = ApiClient.convertToType(data['DateTo'], 'String');
      }
      if (data.hasOwnProperty('Field')) {
        obj['Field'] = ApiClient.convertToType(data['Field'], 'Number');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
      if (data.hasOwnProperty('Properties')) {
        obj['Properties'] = ApiClient.convertToType(data['Properties'], 'String');
      }
      if (data.hasOwnProperty('SegmentID')) {
        obj['SegmentID'] = ApiClient.convertToType(data['SegmentID'], 'Number');
      }
      if (data.hasOwnProperty('Subscriteria')) {
        obj['Subscriteria'] = ApiClient.convertToType(data['Subscriteria'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Number} Comparer
   */
  exports.prototype['Comparer'] = undefined;
  /**
   * 
   * @member {String} CustomFieldID
   */
  exports.prototype['CustomFieldID'] = undefined;
  /**
   * 
   * @member {String} DateFrom
   */
  exports.prototype['DateFrom'] = undefined;
  /**
   * 
   * @member {String} DateTo
   */
  exports.prototype['DateTo'] = undefined;
  /**
   * 
   * @member {Number} Field
   */
  exports.prototype['Field'] = undefined;
  /**
   * 
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * 
   * @member {String} Properties
   */
  exports.prototype['Properties'] = undefined;
  /**
   * 
   * @member {Number} SegmentID
   */
  exports.prototype['SegmentID'] = undefined;
  /**
   * 
   * @member {String} Subscriteria
   */
  exports.prototype['Subscriteria'] = undefined;
  /**
   * 
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;



  return exports;
}));


