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
    instance = new MoosendApi.Segment();
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

  describe('Segment', function() {
    it('should create an instance of Segment', function() {
      // uncomment below and update the code to test Segment
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be.a(MoosendApi.Segment);
    });

    it('should have the property createdBy (base name: "CreatedBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "CreatedOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property criteria (base name: "Criteria")', function() {
      // uncomment below and update the code to test the property criteria
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property fetchType (base name: "FetchType")', function() {
      // uncomment below and update the code to test the property fetchType
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property fetchValue (base name: "FetchValue")', function() {
      // uncomment below and update the code to test the property fetchValue
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property matchType (base name: "MatchType")', function() {
      // uncomment below and update the code to test the property matchType
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "UpdatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "UpdatedOn")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instane = new MoosendApi.Segment();
      //expect(instance).to.be();
    });

  });

}));
