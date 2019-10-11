/**
 * @fileoverview gRPC-Web generated client stub for casper.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var ServiceError_pb = require('./ServiceError_pb.js')

var ProposeServiceCommon_pb = require('./ProposeServiceCommon_pb.js')

var scalapb_scalapb_pb = require('./scalapb/scalapb_pb.js')
const proto = {};
proto.casper = {};
proto.casper.v1 = require('./ProposeServiceV1_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.casper.v1.ProposeServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.casper.v1.ProposeServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.PrintUnmatchedSendsQuery,
 *   !proto.casper.v1.ProposeResponse>}
 */
const methodDescriptor_ProposeService_propose = new grpc.web.MethodDescriptor(
  '/casper.v1.ProposeService/propose',
  grpc.web.MethodType.UNARY,
  ProposeServiceCommon_pb.PrintUnmatchedSendsQuery,
  proto.casper.v1.ProposeResponse,
  /** @param {!proto.casper.PrintUnmatchedSendsQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.ProposeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.PrintUnmatchedSendsQuery,
 *   !proto.casper.v1.ProposeResponse>}
 */
const methodInfo_ProposeService_propose = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.ProposeResponse,
  /** @param {!proto.casper.PrintUnmatchedSendsQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.ProposeResponse.deserializeBinary
);


/**
 * @param {!proto.casper.PrintUnmatchedSendsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.ProposeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.ProposeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.ProposeServiceClient.prototype.propose =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.ProposeService/propose',
      request,
      metadata || {},
      methodDescriptor_ProposeService_propose,
      callback);
};


/**
 * @param {!proto.casper.PrintUnmatchedSendsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.ProposeResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.ProposeServicePromiseClient.prototype.propose =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.ProposeService/propose',
      request,
      metadata || {},
      methodDescriptor_ProposeService_propose);
};


module.exports = proto.casper.v1;

