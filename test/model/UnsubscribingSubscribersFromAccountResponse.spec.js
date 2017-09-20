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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MoosendApi);
  }
}(this, function(expect, MoosendApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MoosendApi.UnsubscribingSubscribersFromAccountResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UnsubscribingSubscribersFromAccountResponse', function() {
    it('should create an instance of UnsubscribingSubscribersFromAccountResponse', function() {
      // uncomment below and update the code to test UnsubscribingSubscribersFromAccountResponse
      //var instane = new MoosendApi.UnsubscribingSubscribersFromAccountResponse();
      //expect(instance).to.be.a(MoosendApi.UnsubscribingSubscribersFromAccountResponse);
    });

    it('should have the property code (base name: "Code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new MoosendApi.UnsubscribingSubscribersFromAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "Error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new MoosendApi.UnsubscribingSubscribersFromAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property context (base name: "Context")', function() {
      // uncomment below and update the code to test the property context
      //var instane = new MoosendApi.UnsubscribingSubscribersFromAccountResponse();
      //expect(instance).to.be();
    });

  });

}));
