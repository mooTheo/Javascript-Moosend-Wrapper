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
    instance = new MoosendApi.CreatingADraftCampaignRequest();
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

  describe('CreatingADraftCampaignRequest', function() {
    it('should create an instance of CreatingADraftCampaignRequest', function() {
      // uncomment below and update the code to test CreatingADraftCampaignRequest
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be.a(MoosendApi.CreatingADraftCampaignRequest);
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "Subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property senderEmail (base name: "SenderEmail")', function() {
      // uncomment below and update the code to test the property senderEmail
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property replyToEmail (base name: "ReplyToEmail")', function() {
      // uncomment below and update the code to test the property replyToEmail
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property isAB (base name: "IsAB")', function() {
      // uncomment below and update the code to test the property isAB
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property confirmationToEmail (base name: "ConfirmationToEmail")', function() {
      // uncomment below and update the code to test the property confirmationToEmail
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property webLocation (base name: "WebLocation")', function() {
      // uncomment below and update the code to test the property webLocation
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property mailingLists (base name: "MailingLists")', function() {
      // uncomment below and update the code to test the property mailingLists
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property segmentID (base name: "SegmentID")', function() {
      // uncomment below and update the code to test the property segmentID
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property aBCampaignType (base name: "ABCampaignType")', function() {
      // uncomment below and update the code to test the property aBCampaignType
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property trackInGoogleAnalytics (base name: "TrackInGoogleAnalytics")', function() {
      // uncomment below and update the code to test the property trackInGoogleAnalytics
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property dontTrackLinkClicks (base name: "DontTrackLinkClicks")', function() {
      // uncomment below and update the code to test the property dontTrackLinkClicks
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property subjectB (base name: "SubjectB")', function() {
      // uncomment below and update the code to test the property subjectB
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property webLocationB (base name: "WebLocationB")', function() {
      // uncomment below and update the code to test the property webLocationB
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property senderEmailB (base name: "SenderEmailB")', function() {
      // uncomment below and update the code to test the property senderEmailB
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property hoursToTest (base name: "HoursToTest")', function() {
      // uncomment below and update the code to test the property hoursToTest
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property listPercentage (base name: "ListPercentage")', function() {
      // uncomment below and update the code to test the property listPercentage
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property aBWinnerSelectionType (base name: "ABWinnerSelectionType")', function() {
      // uncomment below and update the code to test the property aBWinnerSelectionType
      //var instane = new MoosendApi.CreatingADraftCampaignRequest();
      //expect(instance).to.be();
    });

  });

}));
