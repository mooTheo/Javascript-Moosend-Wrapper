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
    define(['ApiClient', 'model/Campaign', 'model/Paging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Campaign'), require('./Paging'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.Context66 = factory(root.MoosendApi.ApiClient, root.MoosendApi.Campaign, root.MoosendApi.Paging);
  }
}(this, function(ApiClient, Campaign, Paging) {
  'use strict';




  /**
   * The Context66 model module.
   * @module model/Context66
   * @version 1.0
   */

  /**
   * Constructs a new <code>Context66</code>.
   * @alias module:model/Context66
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Context66</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Context66} obj Optional instance to populate.
   * @return {module:model/Context66} The populated <code>Context66</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Campaigns')) {
        obj['Campaigns'] = ApiClient.convertToType(data['Campaigns'], [Campaign]);
      }
      if (data.hasOwnProperty('Paging')) {
        obj['Paging'] = Paging.constructFromObject(data['Paging']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/Campaign>} Campaigns
   */
  exports.prototype['Campaigns'] = undefined;
  /**
   * @member {module:model/Paging} Paging
   */
  exports.prototype['Paging'] = undefined;



  return exports;
}));


