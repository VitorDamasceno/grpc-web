/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for project
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.project = require('./project_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.project.ProjectServiceClient =
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
proto.project.ProjectServicePromiseClient =
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
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.project.Project,
 *   !proto.project.ID>}
 */
const methodInfo_ProjectService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.project.ID,
  /** @param {!proto.project.Project} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.project.ID.deserializeBinary
);


/**
 * @param {!proto.project.Project} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.project.ID)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.project.ID>|undefined}
 *     The XHR Node Readable Stream
 */
proto.project.ProjectServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/project.ProjectService/Create',
      request,
      metadata || {},
      methodInfo_ProjectService_Create,
      callback);
};


/**
 * @param {!proto.project.Project} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.project.ID>}
 *     A native promise that resolves to the response
 */
proto.project.ProjectServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/project.ProjectService/Create',
      request,
      metadata || {},
      methodInfo_ProjectService_Create);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.project.Empty,
 *   !proto.project.ListResponse>}
 */
const methodInfo_ProjectService_GetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.project.ListResponse,
  /** @param {!proto.project.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.project.ListResponse.deserializeBinary
);


/**
 * @param {!proto.project.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.project.ListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.project.ListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.project.ProjectServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/project.ProjectService/GetAll',
      request,
      metadata || {},
      methodInfo_ProjectService_GetAll,
      callback);
};


/**
 * @param {!proto.project.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.project.ListResponse>}
 *     A native promise that resolves to the response
 */
proto.project.ProjectServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/project.ProjectService/GetAll',
      request,
      metadata || {},
      methodInfo_ProjectService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.project.ID,
 *   !proto.project.Project>}
 */
const methodInfo_ProjectService_GetOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.project.Project,
  /** @param {!proto.project.ID} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.project.Project.deserializeBinary
);


/**
 * @param {!proto.project.ID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.project.Project)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.project.Project>|undefined}
 *     The XHR Node Readable Stream
 */
proto.project.ProjectServiceClient.prototype.getOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/project.ProjectService/GetOne',
      request,
      metadata || {},
      methodInfo_ProjectService_GetOne,
      callback);
};


/**
 * @param {!proto.project.ID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.project.Project>}
 *     A native promise that resolves to the response
 */
proto.project.ProjectServicePromiseClient.prototype.getOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/project.ProjectService/GetOne',
      request,
      metadata || {},
      methodInfo_ProjectService_GetOne);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.project.ID,
 *   !proto.project.Empty>}
 */
const methodInfo_ProjectService_DeleteOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.project.Empty,
  /** @param {!proto.project.ID} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.project.Empty.deserializeBinary
);


/**
 * @param {!proto.project.ID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.project.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.project.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.project.ProjectServiceClient.prototype.deleteOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/project.ProjectService/DeleteOne',
      request,
      metadata || {},
      methodInfo_ProjectService_DeleteOne,
      callback);
};


/**
 * @param {!proto.project.ID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.project.Empty>}
 *     A native promise that resolves to the response
 */
proto.project.ProjectServicePromiseClient.prototype.deleteOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/project.ProjectService/DeleteOne',
      request,
      metadata || {},
      methodInfo_ProjectService_DeleteOne);
};


module.exports = proto.project;