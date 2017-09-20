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
    define(['ApiClient', 'model/AddingCriteriaToSegmentsRequest', 'model/AddingCriteriaToSegmentsResponse', 'model/CreatingANewSegmentRequest', 'model/CreatingANewSegmentResponse', 'model/DeletingASegmentResponse', 'model/GettingSegmentDetailsResponse', 'model/GettingSegmentSubscribersResponse', 'model/GettingSegmentsResponse', 'model/UpdatingASegmentRequest', 'model/UpdatingASegmentResponse', 'model/UpdatingSegmentCriteriaRequest', 'model/UpdatingSegmentCriteriaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddingCriteriaToSegmentsRequest'), require('../model/AddingCriteriaToSegmentsResponse'), require('../model/CreatingANewSegmentRequest'), require('../model/CreatingANewSegmentResponse'), require('../model/DeletingASegmentResponse'), require('../model/GettingSegmentDetailsResponse'), require('../model/GettingSegmentSubscribersResponse'), require('../model/GettingSegmentsResponse'), require('../model/UpdatingASegmentRequest'), require('../model/UpdatingASegmentResponse'), require('../model/UpdatingSegmentCriteriaRequest'), require('../model/UpdatingSegmentCriteriaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.SegmentsApi = factory(root.MoosendApi.ApiClient, root.MoosendApi.AddingCriteriaToSegmentsRequest, root.MoosendApi.AddingCriteriaToSegmentsResponse, root.MoosendApi.CreatingANewSegmentRequest, root.MoosendApi.CreatingANewSegmentResponse, root.MoosendApi.DeletingASegmentResponse, root.MoosendApi.GettingSegmentDetailsResponse, root.MoosendApi.GettingSegmentSubscribersResponse, root.MoosendApi.GettingSegmentsResponse, root.MoosendApi.UpdatingASegmentRequest, root.MoosendApi.UpdatingASegmentResponse, root.MoosendApi.UpdatingSegmentCriteriaRequest, root.MoosendApi.UpdatingSegmentCriteriaResponse);
  }
}(this, function(ApiClient, AddingCriteriaToSegmentsRequest, AddingCriteriaToSegmentsResponse, CreatingANewSegmentRequest, CreatingANewSegmentResponse, DeletingASegmentResponse, GettingSegmentDetailsResponse, GettingSegmentSubscribersResponse, GettingSegmentsResponse, UpdatingASegmentRequest, UpdatingASegmentResponse, UpdatingSegmentCriteriaRequest, UpdatingSegmentCriteriaResponse) {
  'use strict';

  /**
   * Segments service.
   * @module api/SegmentsApi
   * @version 1.0
   */

  /**
   * Constructs a new SegmentsApi. 
   * @alias module:api/SegmentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addingCriteriaToSegments operation.
     * @callback module:api/SegmentsApi~addingCriteriaToSegmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddingCriteriaToSegmentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adding criteria to segments
     * Adds a new criterion (a rule) to the specified segment.
     * @param {module:model/String} format 
     * @param {String} mailingListID The ID of the mailing list the specified segment belongs.
     * @param {String} apikey You may find your API Key or generate a new one in your account settings.
     * @param {String} segmentID The ID of the segment to update.
     * @param {module:model/AddingCriteriaToSegmentsRequest} body 
     * @param {module:api/SegmentsApi~addingCriteriaToSegmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddingCriteriaToSegmentsResponse}
     */
    this.addingCriteriaToSegments = function(format, mailingListID, apikey, segmentID, body, callback) {
      var postBody = body;

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling addingCriteriaToSegments");
      }

      // verify the required parameter 'mailingListID' is set
      if (mailingListID === undefined || mailingListID === null) {
        throw new Error("Missing the required parameter 'mailingListID' when calling addingCriteriaToSegments");
      }

      // verify the required parameter 'apikey' is set
      if (apikey === undefined || apikey === null) {
        throw new Error("Missing the required parameter 'apikey' when calling addingCriteriaToSegments");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling addingCriteriaToSegments");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addingCriteriaToSegments");
      }


      var pathParams = {
        'Format': format,
        'MailingListID': mailingListID,
        'SegmentID': segmentID
      };
      var queryParams = {
        'apikey': apikey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AddingCriteriaToSegmentsResponse;

      return this.apiClient.callApi(
        '/lists/{MailingListID}/segments/{SegmentID}/criteria/add.{Format}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatingANewSegment operation.
     * @callback module:api/SegmentsApi~creatingANewSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatingANewSegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creating a new segment
     * Creates a new empty segment (without criteria) for the given mailing list. You may specify the name of the segment and the way the criteria will match together.
     * @param {module:model/String} format 
     * @param {String} mailingListID The ID of the mailing list the specified segment belongs
     * @param {String} apikey You may find your API Key or generate a new one in your account settings.
     * @param {module:model/CreatingANewSegmentRequest} body 
     * @param {module:api/SegmentsApi~creatingANewSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatingANewSegmentResponse}
     */
    this.creatingANewSegment = function(format, mailingListID, apikey, body, callback) {
      var postBody = body;

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling creatingANewSegment");
      }

      // verify the required parameter 'mailingListID' is set
      if (mailingListID === undefined || mailingListID === null) {
        throw new Error("Missing the required parameter 'mailingListID' when calling creatingANewSegment");
      }

      // verify the required parameter 'apikey' is set
      if (apikey === undefined || apikey === null) {
        throw new Error("Missing the required parameter 'apikey' when calling creatingANewSegment");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling creatingANewSegment");
      }


      var pathParams = {
        'Format': format,
        'MailingListID': mailingListID
      };
      var queryParams = {
        'apikey': apikey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreatingANewSegmentResponse;

      return this.apiClient.callApi(
        '/lists/{MailingListID}/segments/create.{Format}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletingASegment operation.
     * @callback module:api/SegmentsApi~deletingASegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeletingASegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deleting A Segment
     * Deletes a segment along with its criteria from the mailing list. The subscribers of the mailing list that the segment returned are not deleted or affected in any way.
     * @param {module:model/String} format 
     * @param {String} mailingListID The ID of the mailing list the specified segment belongs.
     * @param {String} apikey You may find your API Key or generate a new one in your account settings.
     * @param {String} segmentID The ID of the segment to update.
     * @param {module:api/SegmentsApi~deletingASegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeletingASegmentResponse}
     */
    this.deletingASegment = function(format, mailingListID, apikey, segmentID, callback) {
      var postBody = null;

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling deletingASegment");
      }

      // verify the required parameter 'mailingListID' is set
      if (mailingListID === undefined || mailingListID === null) {
        throw new Error("Missing the required parameter 'mailingListID' when calling deletingASegment");
      }

      // verify the required parameter 'apikey' is set
      if (apikey === undefined || apikey === null) {
        throw new Error("Missing the required parameter 'apikey' when calling deletingASegment");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling deletingASegment");
      }


      var pathParams = {
        'Format': format,
        'MailingListID': mailingListID,
        'SegmentID': segmentID
      };
      var queryParams = {
        'apikey': apikey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeletingASegmentResponse;

      return this.apiClient.callApi(
        '/lists/{MailingListID}/segments/{SegmentID}/delete.{Format}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gettingSegmentDetails operation.
     * @callback module:api/SegmentsApi~gettingSegmentDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GettingSegmentDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Getting segment details
     * Gets detailed information on a specific segment and its criteria. However, it does not include the subscribers returned by the segment.
     * @param {module:model/String} format 
     * @param {String} mailingListID The ID of the mailing list the specified segment belongs
     * @param {String} segmentID The ID of the segment to fetch results for.
     * @param {String} apikey You may find your API Key or generate a new one in your account settings.
     * @param {module:api/SegmentsApi~gettingSegmentDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GettingSegmentDetailsResponse}
     */
    this.gettingSegmentDetails = function(format, mailingListID, segmentID, apikey, callback) {
      var postBody = null;

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling gettingSegmentDetails");
      }

      // verify the required parameter 'mailingListID' is set
      if (mailingListID === undefined || mailingListID === null) {
        throw new Error("Missing the required parameter 'mailingListID' when calling gettingSegmentDetails");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling gettingSegmentDetails");
      }

      // verify the required parameter 'apikey' is set
      if (apikey === undefined || apikey === null) {
        throw new Error("Missing the required parameter 'apikey' when calling gettingSegmentDetails");
      }


      var pathParams = {
        'Format': format,
        'MailingListID': mailingListID,
        'SegmentID': segmentID
      };
      var queryParams = {
        'apikey': apikey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GettingSegmentDetailsResponse;

      return this.apiClient.callApi(
        '/lists/{MailingListID}/segments/{SegmentID}/details.{Format}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gettingSegmentSubscribers operation.
     * @callback module:api/SegmentsApi~gettingSegmentSubscribersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GettingSegmentSubscribersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Getting segment subscribers
     * Gets a list of the subscribers that the specified segment returns according to its criteria. Because the results for this call could be quite big, paging information is required as input.
     * @param {module:model/String} format 
     * @param {String} mailingListID The ID of the mailing list the specified segment belongs
     * @param {String} segmentID The ID of the segment to fetch results for.
     * @param {String} apikey You may find your API Key or generate a new one in your account settings.
     * @param {module:api/SegmentsApi~gettingSegmentSubscribersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GettingSegmentSubscribersResponse}
     */
    this.gettingSegmentSubscribers = function(format, mailingListID, segmentID, apikey, callback) {
      var postBody = null;

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling gettingSegmentSubscribers");
      }

      // verify the required parameter 'mailingListID' is set
      if (mailingListID === undefined || mailingListID === null) {
        throw new Error("Missing the required parameter 'mailingListID' when calling gettingSegmentSubscribers");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling gettingSegmentSubscribers");
      }

      // verify the required parameter 'apikey' is set
      if (apikey === undefined || apikey === null) {
        throw new Error("Missing the required parameter 'apikey' when calling gettingSegmentSubscribers");
      }


      var pathParams = {
        'Format': format,
        'MailingListID': mailingListID,
        'SegmentID': segmentID
      };
      var queryParams = {
        'apikey': apikey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GettingSegmentSubscribersResponse;

      return this.apiClient.callApi(
        '/lists/{MailingListID}/segments/{SegmentID}/members.{Format}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gettingSegments operation.
     * @callback module:api/SegmentsApi~gettingSegmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GettingSegmentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Getting segments
     * Get a list of all segments with their criteria for the given mailing list.
     * @param {module:model/String} format 
     * @param {String} mailingListID 
     * @param {String} apikey You may find your API Key or generate a new one in your account settings.
     * @param {module:api/SegmentsApi~gettingSegmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GettingSegmentsResponse}
     */
    this.gettingSegments = function(format, mailingListID, apikey, callback) {
      var postBody = null;

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling gettingSegments");
      }

      // verify the required parameter 'mailingListID' is set
      if (mailingListID === undefined || mailingListID === null) {
        throw new Error("Missing the required parameter 'mailingListID' when calling gettingSegments");
      }

      // verify the required parameter 'apikey' is set
      if (apikey === undefined || apikey === null) {
        throw new Error("Missing the required parameter 'apikey' when calling gettingSegments");
      }


      var pathParams = {
        'Format': format,
        'MailingListID': mailingListID
      };
      var queryParams = {
        'apikey': apikey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GettingSegmentsResponse;

      return this.apiClient.callApi(
        '/lists/{MailingListID}/segments.{Format}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatingASegment operation.
     * @callback module:api/SegmentsApi~updatingASegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdatingASegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updating a segment
     * Updates the properties of an existing segment. You may update the name and match type of the segment.
     * @param {module:model/String} format 
     * @param {String} mailingListID The ID of the mailing list the specified segment belongs
     * @param {String} apikey You may find your API Key or generate a new one in your account settings.
     * @param {String} segmentID The ID of the segment to update.
     * @param {module:model/UpdatingASegmentRequest} body 
     * @param {module:api/SegmentsApi~updatingASegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdatingASegmentResponse}
     */
    this.updatingASegment = function(format, mailingListID, apikey, segmentID, body, callback) {
      var postBody = body;

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling updatingASegment");
      }

      // verify the required parameter 'mailingListID' is set
      if (mailingListID === undefined || mailingListID === null) {
        throw new Error("Missing the required parameter 'mailingListID' when calling updatingASegment");
      }

      // verify the required parameter 'apikey' is set
      if (apikey === undefined || apikey === null) {
        throw new Error("Missing the required parameter 'apikey' when calling updatingASegment");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling updatingASegment");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatingASegment");
      }


      var pathParams = {
        'Format': format,
        'MailingListID': mailingListID,
        'SegmentID': segmentID
      };
      var queryParams = {
        'apikey': apikey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UpdatingASegmentResponse;

      return this.apiClient.callApi(
        '/lists/{MailingListID}/segments/{SegmentID}/update.{Format}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatingSegmentCriteria operation.
     * @callback module:api/SegmentsApi~updatingSegmentCriteriaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdatingSegmentCriteriaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updating segment criteria
     * Updates an existing criterion in the specified segment.
     * @param {module:model/String} format 
     * @param {String} mailingListID The ID of the mailing list the specified segment belongs.
     * @param {String} apikey You may find your API Key or generate a new one in your account settings.
     * @param {String} segmentID The ID of the segment to update.
     * @param {Number} criteriaID The ID of the criterion to process.
     * @param {module:model/UpdatingSegmentCriteriaRequest} body 
     * @param {module:api/SegmentsApi~updatingSegmentCriteriaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdatingSegmentCriteriaResponse}
     */
    this.updatingSegmentCriteria = function(format, mailingListID, apikey, segmentID, criteriaID, body, callback) {
      var postBody = body;

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling updatingSegmentCriteria");
      }

      // verify the required parameter 'mailingListID' is set
      if (mailingListID === undefined || mailingListID === null) {
        throw new Error("Missing the required parameter 'mailingListID' when calling updatingSegmentCriteria");
      }

      // verify the required parameter 'apikey' is set
      if (apikey === undefined || apikey === null) {
        throw new Error("Missing the required parameter 'apikey' when calling updatingSegmentCriteria");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling updatingSegmentCriteria");
      }

      // verify the required parameter 'criteriaID' is set
      if (criteriaID === undefined || criteriaID === null) {
        throw new Error("Missing the required parameter 'criteriaID' when calling updatingSegmentCriteria");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatingSegmentCriteria");
      }


      var pathParams = {
        'Format': format,
        'MailingListID': mailingListID,
        'SegmentID': segmentID,
        'CriteriaID': criteriaID
      };
      var queryParams = {
        'apikey': apikey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UpdatingSegmentCriteriaResponse;

      return this.apiClient.callApi(
        '/lists/{MailingListID}/segments/{SegmentID}/criteria/{CriteriaID}/update.{Format}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
