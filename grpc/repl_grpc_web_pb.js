/**
 * @fileoverview gRPC-Web generated client stub for repl
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var scalapb_scalapb_pb = require('./scalapb/scalapb_pb.js')
const proto = {};
proto.repl = require('./repl_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.repl.ReplClient =
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
proto.repl.ReplPromiseClient =
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
 *   !proto.repl.CmdRequest,
 *   !proto.repl.ReplResponse>}
 */
const methodDescriptor_Repl_Run = new grpc.web.MethodDescriptor(
  '/repl.Repl/Run',
  grpc.web.MethodType.UNARY,
  proto.repl.CmdRequest,
  proto.repl.ReplResponse,
  /** @param {!proto.repl.CmdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.repl.ReplResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.repl.CmdRequest,
 *   !proto.repl.ReplResponse>}
 */
const methodInfo_Repl_Run = new grpc.web.AbstractClientBase.MethodInfo(
  proto.repl.ReplResponse,
  /** @param {!proto.repl.CmdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.repl.ReplResponse.deserializeBinary
);


/**
 * @param {!proto.repl.CmdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.repl.ReplResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.repl.ReplResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.repl.ReplClient.prototype.run =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/repl.Repl/Run',
      request,
      metadata || {},
      methodDescriptor_Repl_Run,
      callback);
};


/**
 * @param {!proto.repl.CmdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.repl.ReplResponse>}
 *     A native promise that resolves to the response
 */
proto.repl.ReplPromiseClient.prototype.run =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/repl.Repl/Run',
      request,
      metadata || {},
      methodDescriptor_Repl_Run);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.repl.EvalRequest,
 *   !proto.repl.ReplResponse>}
 */
const methodDescriptor_Repl_Eval = new grpc.web.MethodDescriptor(
  '/repl.Repl/Eval',
  grpc.web.MethodType.UNARY,
  proto.repl.EvalRequest,
  proto.repl.ReplResponse,
  /** @param {!proto.repl.EvalRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.repl.ReplResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.repl.EvalRequest,
 *   !proto.repl.ReplResponse>}
 */
const methodInfo_Repl_Eval = new grpc.web.AbstractClientBase.MethodInfo(
  proto.repl.ReplResponse,
  /** @param {!proto.repl.EvalRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.repl.ReplResponse.deserializeBinary
);


/**
 * @param {!proto.repl.EvalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.repl.ReplResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.repl.ReplResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.repl.ReplClient.prototype.eval =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/repl.Repl/Eval',
      request,
      metadata || {},
      methodDescriptor_Repl_Eval,
      callback);
};


/**
 * @param {!proto.repl.EvalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.repl.ReplResponse>}
 *     A native promise that resolves to the response
 */
proto.repl.ReplPromiseClient.prototype.eval =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/repl.Repl/Eval',
      request,
      metadata || {},
      methodDescriptor_Repl_Eval);
};


module.exports = proto.repl;

