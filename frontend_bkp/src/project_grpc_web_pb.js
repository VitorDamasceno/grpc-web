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
 *   !proto.project.ProjectCreateResponse>}
 */
const methodInfo_ProjectService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.project.ProjectCreateResponse,
  /** @param {!proto.project.Project} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.project.ProjectCreateResponse.deserializeBinary
);


/**
 * @param {!proto.project.Project} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.project.ProjectCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.project.ProjectCreateResponse>|undefined}
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
 * @return {!Promise<!proto.project.ProjectCreateResponse>}
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
 *   !proto.project.Void,
 *   !proto.project.ProjectListResponse>}
 */
const methodInfo_ProjectService_GetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.project.ProjectListResponse,
  /** @param {!proto.project.Void} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.project.ProjectListResponse.deserializeBinary
);


/**
 * @param {!proto.project.Void} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.project.ProjectListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.project.ProjectListResponse>|undefined}
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
 * @param {!proto.project.Void} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.project.ProjectListResponse>}
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


module.exports = proto.project;

