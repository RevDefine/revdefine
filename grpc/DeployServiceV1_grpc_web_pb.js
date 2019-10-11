/**
 * @fileoverview gRPC-Web generated client stub for casper.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var CasperMessage_pb = require('./CasperMessage_pb.js')

var ServiceError_pb = require('./ServiceError_pb.js')

var DeployServiceCommon_pb = require('./DeployServiceCommon_pb.js')

var scalapb_scalapb_pb = require('./scalapb/scalapb_pb.js')
const proto = {};
proto.casper = {};
proto.casper.v1 = require('./DeployServiceV1_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.casper.v1.DeployServiceClient =
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
proto.casper.v1.DeployServicePromiseClient =
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
 *   !proto.casper.DeployDataProto,
 *   !proto.casper.v1.DeployResponse>}
 */
const methodDescriptor_DeployService_doDeploy = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/doDeploy',
  grpc.web.MethodType.UNARY,
  CasperMessage_pb.DeployDataProto,
  proto.casper.v1.DeployResponse,
  /** @param {!proto.casper.DeployDataProto} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.DeployResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.DeployDataProto,
 *   !proto.casper.v1.DeployResponse>}
 */
const methodInfo_DeployService_doDeploy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.DeployResponse,
  /** @param {!proto.casper.DeployDataProto} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.DeployResponse.deserializeBinary
);


/**
 * @param {!proto.casper.DeployDataProto} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.DeployResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.DeployResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.doDeploy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.DeployService/doDeploy',
      request,
      metadata || {},
      methodDescriptor_DeployService_doDeploy,
      callback);
};


/**
 * @param {!proto.casper.DeployDataProto} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.DeployResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.DeployServicePromiseClient.prototype.doDeploy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.DeployService/doDeploy',
      request,
      metadata || {},
      methodDescriptor_DeployService_doDeploy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.BlockQuery,
 *   !proto.casper.v1.BlockResponse>}
 */
const methodDescriptor_DeployService_getBlock = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/getBlock',
  grpc.web.MethodType.UNARY,
  DeployServiceCommon_pb.BlockQuery,
  proto.casper.v1.BlockResponse,
  /** @param {!proto.casper.BlockQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.BlockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.BlockQuery,
 *   !proto.casper.v1.BlockResponse>}
 */
const methodInfo_DeployService_getBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.BlockResponse,
  /** @param {!proto.casper.BlockQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.BlockResponse.deserializeBinary
);


/**
 * @param {!proto.casper.BlockQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.BlockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.BlockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.getBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.DeployService/getBlock',
      request,
      metadata || {},
      methodDescriptor_DeployService_getBlock,
      callback);
};


/**
 * @param {!proto.casper.BlockQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.BlockResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.DeployServicePromiseClient.prototype.getBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.DeployService/getBlock',
      request,
      metadata || {},
      methodDescriptor_DeployService_getBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.VisualizeDagQuery,
 *   !proto.casper.v1.VisualizeBlocksResponse>}
 */
const methodDescriptor_DeployService_visualizeDag = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/visualizeDag',
  grpc.web.MethodType.SERVER_STREAMING,
  DeployServiceCommon_pb.VisualizeDagQuery,
  proto.casper.v1.VisualizeBlocksResponse,
  /** @param {!proto.casper.VisualizeDagQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.VisualizeBlocksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.VisualizeDagQuery,
 *   !proto.casper.v1.VisualizeBlocksResponse>}
 */
const methodInfo_DeployService_visualizeDag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.VisualizeBlocksResponse,
  /** @param {!proto.casper.VisualizeDagQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.VisualizeBlocksResponse.deserializeBinary
);


/**
 * @param {!proto.casper.VisualizeDagQuery} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.VisualizeBlocksResponse>}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.visualizeDag =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/casper.v1.DeployService/visualizeDag',
      request,
      metadata || {},
      methodDescriptor_DeployService_visualizeDag);
};


/**
 * @param {!proto.casper.VisualizeDagQuery} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.VisualizeBlocksResponse>}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServicePromiseClient.prototype.visualizeDag =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/casper.v1.DeployService/visualizeDag',
      request,
      metadata || {},
      methodDescriptor_DeployService_visualizeDag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.MachineVerifyQuery,
 *   !proto.casper.v1.MachineVerifyResponse>}
 */
const methodDescriptor_DeployService_machineVerifiableDag = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/machineVerifiableDag',
  grpc.web.MethodType.UNARY,
  DeployServiceCommon_pb.MachineVerifyQuery,
  proto.casper.v1.MachineVerifyResponse,
  /** @param {!proto.casper.MachineVerifyQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.MachineVerifyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.MachineVerifyQuery,
 *   !proto.casper.v1.MachineVerifyResponse>}
 */
const methodInfo_DeployService_machineVerifiableDag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.MachineVerifyResponse,
  /** @param {!proto.casper.MachineVerifyQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.MachineVerifyResponse.deserializeBinary
);


/**
 * @param {!proto.casper.MachineVerifyQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.MachineVerifyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.MachineVerifyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.machineVerifiableDag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.DeployService/machineVerifiableDag',
      request,
      metadata || {},
      methodDescriptor_DeployService_machineVerifiableDag,
      callback);
};


/**
 * @param {!proto.casper.MachineVerifyQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.MachineVerifyResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.DeployServicePromiseClient.prototype.machineVerifiableDag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.DeployService/machineVerifiableDag',
      request,
      metadata || {},
      methodDescriptor_DeployService_machineVerifiableDag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.BlocksQuery,
 *   !proto.casper.v1.BlockInfoResponse>}
 */
const methodDescriptor_DeployService_showMainChain = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/showMainChain',
  grpc.web.MethodType.SERVER_STREAMING,
  DeployServiceCommon_pb.BlocksQuery,
  proto.casper.v1.BlockInfoResponse,
  /** @param {!proto.casper.BlocksQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.BlockInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.BlocksQuery,
 *   !proto.casper.v1.BlockInfoResponse>}
 */
const methodInfo_DeployService_showMainChain = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.BlockInfoResponse,
  /** @param {!proto.casper.BlocksQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.BlockInfoResponse.deserializeBinary
);


/**
 * @param {!proto.casper.BlocksQuery} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.BlockInfoResponse>}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.showMainChain =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/casper.v1.DeployService/showMainChain',
      request,
      metadata || {},
      methodDescriptor_DeployService_showMainChain);
};


/**
 * @param {!proto.casper.BlocksQuery} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.BlockInfoResponse>}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServicePromiseClient.prototype.showMainChain =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/casper.v1.DeployService/showMainChain',
      request,
      metadata || {},
      methodDescriptor_DeployService_showMainChain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.BlocksQuery,
 *   !proto.casper.v1.BlockInfoResponse>}
 */
const methodDescriptor_DeployService_getBlocks = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/getBlocks',
  grpc.web.MethodType.SERVER_STREAMING,
  DeployServiceCommon_pb.BlocksQuery,
  proto.casper.v1.BlockInfoResponse,
  /** @param {!proto.casper.BlocksQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.BlockInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.BlocksQuery,
 *   !proto.casper.v1.BlockInfoResponse>}
 */
const methodInfo_DeployService_getBlocks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.BlockInfoResponse,
  /** @param {!proto.casper.BlocksQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.BlockInfoResponse.deserializeBinary
);


/**
 * @param {!proto.casper.BlocksQuery} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.BlockInfoResponse>}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.getBlocks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/casper.v1.DeployService/getBlocks',
      request,
      metadata || {},
      methodDescriptor_DeployService_getBlocks);
};


/**
 * @param {!proto.casper.BlocksQuery} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.BlockInfoResponse>}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServicePromiseClient.prototype.getBlocks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/casper.v1.DeployService/getBlocks',
      request,
      metadata || {},
      methodDescriptor_DeployService_getBlocks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.DataAtNameQuery,
 *   !proto.casper.v1.ListeningNameDataResponse>}
 */
const methodDescriptor_DeployService_listenForDataAtName = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/listenForDataAtName',
  grpc.web.MethodType.UNARY,
  DeployServiceCommon_pb.DataAtNameQuery,
  proto.casper.v1.ListeningNameDataResponse,
  /** @param {!proto.casper.DataAtNameQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.ListeningNameDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.DataAtNameQuery,
 *   !proto.casper.v1.ListeningNameDataResponse>}
 */
const methodInfo_DeployService_listenForDataAtName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.ListeningNameDataResponse,
  /** @param {!proto.casper.DataAtNameQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.ListeningNameDataResponse.deserializeBinary
);


/**
 * @param {!proto.casper.DataAtNameQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.ListeningNameDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.ListeningNameDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.listenForDataAtName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.DeployService/listenForDataAtName',
      request,
      metadata || {},
      methodDescriptor_DeployService_listenForDataAtName,
      callback);
};


/**
 * @param {!proto.casper.DataAtNameQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.ListeningNameDataResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.DeployServicePromiseClient.prototype.listenForDataAtName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.DeployService/listenForDataAtName',
      request,
      metadata || {},
      methodDescriptor_DeployService_listenForDataAtName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.ContinuationAtNameQuery,
 *   !proto.casper.v1.ContinuationAtNameResponse>}
 */
const methodDescriptor_DeployService_listenForContinuationAtName = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/listenForContinuationAtName',
  grpc.web.MethodType.UNARY,
  DeployServiceCommon_pb.ContinuationAtNameQuery,
  proto.casper.v1.ContinuationAtNameResponse,
  /** @param {!proto.casper.ContinuationAtNameQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.ContinuationAtNameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.ContinuationAtNameQuery,
 *   !proto.casper.v1.ContinuationAtNameResponse>}
 */
const methodInfo_DeployService_listenForContinuationAtName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.ContinuationAtNameResponse,
  /** @param {!proto.casper.ContinuationAtNameQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.ContinuationAtNameResponse.deserializeBinary
);


/**
 * @param {!proto.casper.ContinuationAtNameQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.ContinuationAtNameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.ContinuationAtNameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.listenForContinuationAtName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.DeployService/listenForContinuationAtName',
      request,
      metadata || {},
      methodDescriptor_DeployService_listenForContinuationAtName,
      callback);
};


/**
 * @param {!proto.casper.ContinuationAtNameQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.ContinuationAtNameResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.DeployServicePromiseClient.prototype.listenForContinuationAtName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.DeployService/listenForContinuationAtName',
      request,
      metadata || {},
      methodDescriptor_DeployService_listenForContinuationAtName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.FindDeployQuery,
 *   !proto.casper.v1.FindDeployResponse>}
 */
const methodDescriptor_DeployService_findDeploy = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/findDeploy',
  grpc.web.MethodType.UNARY,
  DeployServiceCommon_pb.FindDeployQuery,
  proto.casper.v1.FindDeployResponse,
  /** @param {!proto.casper.FindDeployQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.FindDeployResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.FindDeployQuery,
 *   !proto.casper.v1.FindDeployResponse>}
 */
const methodInfo_DeployService_findDeploy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.FindDeployResponse,
  /** @param {!proto.casper.FindDeployQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.FindDeployResponse.deserializeBinary
);


/**
 * @param {!proto.casper.FindDeployQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.FindDeployResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.FindDeployResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.findDeploy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.DeployService/findDeploy',
      request,
      metadata || {},
      methodDescriptor_DeployService_findDeploy,
      callback);
};


/**
 * @param {!proto.casper.FindDeployQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.FindDeployResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.DeployServicePromiseClient.prototype.findDeploy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.DeployService/findDeploy',
      request,
      metadata || {},
      methodDescriptor_DeployService_findDeploy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.PrivateNamePreviewQuery,
 *   !proto.casper.v1.PrivateNamePreviewResponse>}
 */
const methodDescriptor_DeployService_previewPrivateNames = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/previewPrivateNames',
  grpc.web.MethodType.UNARY,
  DeployServiceCommon_pb.PrivateNamePreviewQuery,
  proto.casper.v1.PrivateNamePreviewResponse,
  /** @param {!proto.casper.PrivateNamePreviewQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.PrivateNamePreviewResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.PrivateNamePreviewQuery,
 *   !proto.casper.v1.PrivateNamePreviewResponse>}
 */
const methodInfo_DeployService_previewPrivateNames = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.PrivateNamePreviewResponse,
  /** @param {!proto.casper.PrivateNamePreviewQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.PrivateNamePreviewResponse.deserializeBinary
);


/**
 * @param {!proto.casper.PrivateNamePreviewQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.PrivateNamePreviewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.PrivateNamePreviewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.previewPrivateNames =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.DeployService/previewPrivateNames',
      request,
      metadata || {},
      methodDescriptor_DeployService_previewPrivateNames,
      callback);
};


/**
 * @param {!proto.casper.PrivateNamePreviewQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.PrivateNamePreviewResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.DeployServicePromiseClient.prototype.previewPrivateNames =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.DeployService/previewPrivateNames',
      request,
      metadata || {},
      methodDescriptor_DeployService_previewPrivateNames);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.LastFinalizedBlockQuery,
 *   !proto.casper.v1.LastFinalizedBlockResponse>}
 */
const methodDescriptor_DeployService_lastFinalizedBlock = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/lastFinalizedBlock',
  grpc.web.MethodType.UNARY,
  DeployServiceCommon_pb.LastFinalizedBlockQuery,
  proto.casper.v1.LastFinalizedBlockResponse,
  /** @param {!proto.casper.LastFinalizedBlockQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.LastFinalizedBlockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.LastFinalizedBlockQuery,
 *   !proto.casper.v1.LastFinalizedBlockResponse>}
 */
const methodInfo_DeployService_lastFinalizedBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.LastFinalizedBlockResponse,
  /** @param {!proto.casper.LastFinalizedBlockQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.LastFinalizedBlockResponse.deserializeBinary
);


/**
 * @param {!proto.casper.LastFinalizedBlockQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.LastFinalizedBlockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.LastFinalizedBlockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.lastFinalizedBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.DeployService/lastFinalizedBlock',
      request,
      metadata || {},
      methodDescriptor_DeployService_lastFinalizedBlock,
      callback);
};


/**
 * @param {!proto.casper.LastFinalizedBlockQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.LastFinalizedBlockResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.DeployServicePromiseClient.prototype.lastFinalizedBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.DeployService/lastFinalizedBlock',
      request,
      metadata || {},
      methodDescriptor_DeployService_lastFinalizedBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.casper.IsFinalizedQuery,
 *   !proto.casper.v1.IsFinalizedResponse>}
 */
const methodDescriptor_DeployService_isFinalized = new grpc.web.MethodDescriptor(
  '/casper.v1.DeployService/isFinalized',
  grpc.web.MethodType.UNARY,
  DeployServiceCommon_pb.IsFinalizedQuery,
  proto.casper.v1.IsFinalizedResponse,
  /** @param {!proto.casper.IsFinalizedQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.IsFinalizedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.casper.IsFinalizedQuery,
 *   !proto.casper.v1.IsFinalizedResponse>}
 */
const methodInfo_DeployService_isFinalized = new grpc.web.AbstractClientBase.MethodInfo(
  proto.casper.v1.IsFinalizedResponse,
  /** @param {!proto.casper.IsFinalizedQuery} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.casper.v1.IsFinalizedResponse.deserializeBinary
);


/**
 * @param {!proto.casper.IsFinalizedQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.casper.v1.IsFinalizedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.casper.v1.IsFinalizedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.casper.v1.DeployServiceClient.prototype.isFinalized =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/casper.v1.DeployService/isFinalized',
      request,
      metadata || {},
      methodDescriptor_DeployService_isFinalized,
      callback);
};


/**
 * @param {!proto.casper.IsFinalizedQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.casper.v1.IsFinalizedResponse>}
 *     A native promise that resolves to the response
 */
proto.casper.v1.DeployServicePromiseClient.prototype.isFinalized =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/casper.v1.DeployService/isFinalized',
      request,
      metadata || {},
      methodDescriptor_DeployService_isFinalized);
};


module.exports = proto.casper.v1;

