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
    instance = new MoosendApi.Subscriber();
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

  describe('Subscriber', function() {
    it('should create an instance of Subscriber', function() {
      // uncomment below and update the code to test Subscriber
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be.a(MoosendApi.Subscriber);
    });

    it('should have the property createdOn (base name: "CreatedOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "CustomFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "Email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property removedOn (base name: "RemovedOn")', function() {
      // uncomment below and update the code to test the property removedOn
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property subscribeMethod (base name: "SubscribeMethod")', function() {
      // uncomment below and update the code to test the property subscribeMethod
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property subscribeType (base name: "SubscribeType")', function() {
      // uncomment below and update the code to test the property subscribeType
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribedFromID (base name: "UnsubscribedFromID")', function() {
      // uncomment below and update the code to test the property unsubscribedFromID
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribedOn (base name: "UnsubscribedOn")', function() {
      // uncomment below and update the code to test the property unsubscribedOn
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "UpdatedOn")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instane = new MoosendApi.Subscriber();
      //expect(instance).to.be();
    });

  });

}));
