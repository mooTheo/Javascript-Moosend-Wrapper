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
    instance = new MoosendApi.MailingListsApi();
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

  describe('MailingListsApi', function() {
    describe('creatingACustomField', function() {
      it('should call creatingACustomField successfully', function(done) {
        //uncomment below and update the code to test creatingACustomField
        //instance.creatingACustomField(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('creatingAMailingList', function() {
      it('should call creatingAMailingList successfully', function(done) {
        //uncomment below and update the code to test creatingAMailingList
        //instance.creatingAMailingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletingAMailingList', function() {
      it('should call deletingAMailingList successfully', function(done) {
        //uncomment below and update the code to test deletingAMailingList
        //instance.deletingAMailingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gettingAllActiveMailingLists', function() {
      it('should call gettingAllActiveMailingLists successfully', function(done) {
        //uncomment below and update the code to test gettingAllActiveMailingLists
        //instance.gettingAllActiveMailingLists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gettingAllActiveMailingListsWithPaging', function() {
      it('should call gettingAllActiveMailingListsWithPaging successfully', function(done) {
        //uncomment below and update the code to test gettingAllActiveMailingListsWithPaging
        //instance.gettingAllActiveMailingListsWithPaging(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gettingMailingListDetails', function() {
      it('should call gettingMailingListDetails successfully', function(done) {
        //uncomment below and update the code to test gettingMailingListDetails
        //instance.gettingMailingListDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removingACustomField', function() {
      it('should call removingACustomField successfully', function(done) {
        //uncomment below and update the code to test removingACustomField
        //instance.removingACustomField(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatingACustomField', function() {
      it('should call updatingACustomField successfully', function(done) {
        //uncomment below and update the code to test updatingACustomField
        //instance.updatingACustomField(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatingAMailingList', function() {
      it('should call updatingAMailingList successfully', function(done) {
        //uncomment below and update the code to test updatingAMailingList
        //instance.updatingAMailingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
