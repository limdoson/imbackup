/**
 * @fileoverview gRPC-Web generated client stub for im
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var message_pb = require('./message_pb.js')

var common_common_pb = require('../common/common_pb.js')
const proto = {};
proto.im = require('./im_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.FriendActClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.FriendActPromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.AddFriendRequest,
 *   !proto.im.AddFriendResponse>}
 */
const methodDescriptor_FriendAct_Add = new grpc.web.MethodDescriptor(
  '/im.FriendAct/Add',
  grpc.web.MethodType.UNARY,
  message_pb.AddFriendRequest,
  message_pb.AddFriendResponse,
  /**
   * @param {!proto.im.AddFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.AddFriendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.AddFriendRequest,
 *   !proto.im.AddFriendResponse>}
 */
const methodInfo_FriendAct_Add = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.AddFriendResponse,
  /**
   * @param {!proto.im.AddFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.AddFriendResponse.deserializeBinary
);


/**
 * @param {!proto.im.AddFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.AddFriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.AddFriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.FriendActClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.FriendAct/Add',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Add,
      callback);
};


/**
 * @param {!proto.im.AddFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.AddFriendResponse>}
 *     A native promise that resolves to the response
 */
proto.im.FriendActPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.FriendAct/Add',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.ApplyFriendRequest,
 *   !proto.im.ApplyFriendResponse>}
 */
const methodDescriptor_FriendAct_Apply = new grpc.web.MethodDescriptor(
  '/im.FriendAct/Apply',
  grpc.web.MethodType.UNARY,
  message_pb.ApplyFriendRequest,
  message_pb.ApplyFriendResponse,
  /**
   * @param {!proto.im.ApplyFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.ApplyFriendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.ApplyFriendRequest,
 *   !proto.im.ApplyFriendResponse>}
 */
const methodInfo_FriendAct_Apply = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.ApplyFriendResponse,
  /**
   * @param {!proto.im.ApplyFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.ApplyFriendResponse.deserializeBinary
);


/**
 * @param {!proto.im.ApplyFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.ApplyFriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.ApplyFriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.FriendActClient.prototype.apply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.FriendAct/Apply',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Apply,
      callback);
};


/**
 * @param {!proto.im.ApplyFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.ApplyFriendResponse>}
 *     A native promise that resolves to the response
 */
proto.im.FriendActPromiseClient.prototype.apply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.FriendAct/Apply',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Apply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.PassFriendRequest,
 *   !proto.im.PassFriendResponse>}
 */
const methodDescriptor_FriendAct_Pass = new grpc.web.MethodDescriptor(
  '/im.FriendAct/Pass',
  grpc.web.MethodType.UNARY,
  message_pb.PassFriendRequest,
  message_pb.PassFriendResponse,
  /**
   * @param {!proto.im.PassFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.PassFriendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.PassFriendRequest,
 *   !proto.im.PassFriendResponse>}
 */
const methodInfo_FriendAct_Pass = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.PassFriendResponse,
  /**
   * @param {!proto.im.PassFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.PassFriendResponse.deserializeBinary
);


/**
 * @param {!proto.im.PassFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.PassFriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.PassFriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.FriendActClient.prototype.pass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.FriendAct/Pass',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Pass,
      callback);
};


/**
 * @param {!proto.im.PassFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.PassFriendResponse>}
 *     A native promise that resolves to the response
 */
proto.im.FriendActPromiseClient.prototype.pass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.FriendAct/Pass',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Pass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.RejectFriendRequest,
 *   !proto.im.RejectFriendResponse>}
 */
const methodDescriptor_FriendAct_Reject = new grpc.web.MethodDescriptor(
  '/im.FriendAct/Reject',
  grpc.web.MethodType.UNARY,
  message_pb.RejectFriendRequest,
  message_pb.RejectFriendResponse,
  /**
   * @param {!proto.im.RejectFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.RejectFriendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.RejectFriendRequest,
 *   !proto.im.RejectFriendResponse>}
 */
const methodInfo_FriendAct_Reject = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.RejectFriendResponse,
  /**
   * @param {!proto.im.RejectFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.RejectFriendResponse.deserializeBinary
);


/**
 * @param {!proto.im.RejectFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.RejectFriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.RejectFriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.FriendActClient.prototype.reject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.FriendAct/Reject',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Reject,
      callback);
};


/**
 * @param {!proto.im.RejectFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.RejectFriendResponse>}
 *     A native promise that resolves to the response
 */
proto.im.FriendActPromiseClient.prototype.reject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.FriendAct/Reject',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Reject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.DelFriendRequest,
 *   !proto.im.DelFriendResponse>}
 */
const methodDescriptor_FriendAct_Delete = new grpc.web.MethodDescriptor(
  '/im.FriendAct/Delete',
  grpc.web.MethodType.UNARY,
  message_pb.DelFriendRequest,
  message_pb.DelFriendResponse,
  /**
   * @param {!proto.im.DelFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.DelFriendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.DelFriendRequest,
 *   !proto.im.DelFriendResponse>}
 */
const methodInfo_FriendAct_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.DelFriendResponse,
  /**
   * @param {!proto.im.DelFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.DelFriendResponse.deserializeBinary
);


/**
 * @param {!proto.im.DelFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DelFriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DelFriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.FriendActClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.FriendAct/Delete',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Delete,
      callback);
};


/**
 * @param {!proto.im.DelFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DelFriendResponse>}
 *     A native promise that resolves to the response
 */
proto.im.FriendActPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.FriendAct/Delete',
      request,
      metadata || {},
      methodDescriptor_FriendAct_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.MarkFriendBlackRequest,
 *   !proto.common.MarkFriendBlackResponse>}
 */
const methodDescriptor_FriendAct_MarkBlack = new grpc.web.MethodDescriptor(
  '/im.FriendAct/MarkBlack',
  grpc.web.MethodType.UNARY,
  common_common_pb.MarkFriendBlackRequest,
  common_common_pb.MarkFriendBlackResponse,
  /**
   * @param {!proto.common.MarkFriendBlackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.MarkFriendBlackResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.MarkFriendBlackRequest,
 *   !proto.common.MarkFriendBlackResponse>}
 */
const methodInfo_FriendAct_MarkBlack = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.MarkFriendBlackResponse,
  /**
   * @param {!proto.common.MarkFriendBlackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.MarkFriendBlackResponse.deserializeBinary
);


/**
 * @param {!proto.common.MarkFriendBlackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.MarkFriendBlackResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.MarkFriendBlackResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.FriendActClient.prototype.markBlack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.FriendAct/MarkBlack',
      request,
      metadata || {},
      methodDescriptor_FriendAct_MarkBlack,
      callback);
};


/**
 * @param {!proto.common.MarkFriendBlackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.MarkFriendBlackResponse>}
 *     A native promise that resolves to the response
 */
proto.im.FriendActPromiseClient.prototype.markBlack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.FriendAct/MarkBlack',
      request,
      metadata || {},
      methodDescriptor_FriendAct_MarkBlack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.UpdateFriendRequest,
 *   !proto.common.UpdateFriendResponse>}
 */
const methodDescriptor_FriendAct_UpdateFriend = new grpc.web.MethodDescriptor(
  '/im.FriendAct/UpdateFriend',
  grpc.web.MethodType.UNARY,
  common_common_pb.UpdateFriendRequest,
  common_common_pb.UpdateFriendResponse,
  /**
   * @param {!proto.common.UpdateFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.UpdateFriendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.UpdateFriendRequest,
 *   !proto.common.UpdateFriendResponse>}
 */
const methodInfo_FriendAct_UpdateFriend = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.UpdateFriendResponse,
  /**
   * @param {!proto.common.UpdateFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.UpdateFriendResponse.deserializeBinary
);


/**
 * @param {!proto.common.UpdateFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.UpdateFriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.UpdateFriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.FriendActClient.prototype.updateFriend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.FriendAct/UpdateFriend',
      request,
      metadata || {},
      methodDescriptor_FriendAct_UpdateFriend,
      callback);
};


/**
 * @param {!proto.common.UpdateFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.UpdateFriendResponse>}
 *     A native promise that resolves to the response
 */
proto.im.FriendActPromiseClient.prototype.updateFriend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.FriendAct/UpdateFriend',
      request,
      metadata || {},
      methodDescriptor_FriendAct_UpdateFriend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.ApplyRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_FriendAct_DeleteApply = new grpc.web.MethodDescriptor(
  '/im.FriendAct/DeleteApply',
  grpc.web.MethodType.UNARY,
  common_common_pb.ApplyRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.ApplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.ApplyRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_FriendAct_DeleteApply = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.ApplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.ApplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.FriendActClient.prototype.deleteApply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.FriendAct/DeleteApply',
      request,
      metadata || {},
      methodDescriptor_FriendAct_DeleteApply,
      callback);
};


/**
 * @param {!proto.common.ApplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.FriendActPromiseClient.prototype.deleteApply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.FriendAct/DeleteApply',
      request,
      metadata || {},
      methodDescriptor_FriendAct_DeleteApply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.GetRequest,
 *   !proto.common.ReturnFriendInfo>}
 */
const methodDescriptor_FriendAct_GetFriend = new grpc.web.MethodDescriptor(
  '/im.FriendAct/GetFriend',
  grpc.web.MethodType.UNARY,
  common_common_pb.GetRequest,
  common_common_pb.ReturnFriendInfo,
  /**
   * @param {!proto.common.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnFriendInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.GetRequest,
 *   !proto.common.ReturnFriendInfo>}
 */
const methodInfo_FriendAct_GetFriend = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnFriendInfo,
  /**
   * @param {!proto.common.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnFriendInfo.deserializeBinary
);


/**
 * @param {!proto.common.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnFriendInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnFriendInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.FriendActClient.prototype.getFriend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.FriendAct/GetFriend',
      request,
      metadata || {},
      methodDescriptor_FriendAct_GetFriend,
      callback);
};


/**
 * @param {!proto.common.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnFriendInfo>}
 *     A native promise that resolves to the response
 */
proto.im.FriendActPromiseClient.prototype.getFriend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.FriendAct/GetFriend',
      request,
      metadata || {},
      methodDescriptor_FriendAct_GetFriend);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.UserActClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.UserActPromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.GetRequest,
 *   !proto.common.ReturnSelfInfo>}
 */
const methodDescriptor_UserAct_GetSelf = new grpc.web.MethodDescriptor(
  '/im.UserAct/GetSelf',
  grpc.web.MethodType.UNARY,
  common_common_pb.GetRequest,
  common_common_pb.ReturnSelfInfo,
  /**
   * @param {!proto.common.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnSelfInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.GetRequest,
 *   !proto.common.ReturnSelfInfo>}
 */
const methodInfo_UserAct_GetSelf = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnSelfInfo,
  /**
   * @param {!proto.common.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnSelfInfo.deserializeBinary
);


/**
 * @param {!proto.common.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnSelfInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnSelfInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.getSelf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/GetSelf',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetSelf,
      callback);
};


/**
 * @param {!proto.common.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnSelfInfo>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.getSelf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/GetSelf',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetSelf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.GetUsersRequest,
 *   !proto.im.GetUsersResponse>}
 */
const methodDescriptor_UserAct_GetUsers = new grpc.web.MethodDescriptor(
  '/im.UserAct/GetUsers',
  grpc.web.MethodType.UNARY,
  message_pb.GetUsersRequest,
  message_pb.GetUsersResponse,
  /**
   * @param {!proto.im.GetUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.GetUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.GetUsersRequest,
 *   !proto.im.GetUsersResponse>}
 */
const methodInfo_UserAct_GetUsers = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.GetUsersResponse,
  /**
   * @param {!proto.im.GetUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.GetUsersResponse.deserializeBinary
);


/**
 * @param {!proto.im.GetUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.GetUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.GetUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.getUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/GetUsers',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetUsers,
      callback);
};


/**
 * @param {!proto.im.GetUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.GetUsersResponse>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.getUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/GetUsers',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.UpdateUserRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_UserAct_UpdateUser = new grpc.web.MethodDescriptor(
  '/im.UserAct/UpdateUser',
  grpc.web.MethodType.UNARY,
  common_common_pb.UpdateUserRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.UpdateUserRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_UserAct_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserAct_UpdateUser,
      callback);
};


/**
 * @param {!proto.common.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserAct_UpdateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.PullSessionListRequest,
 *   !proto.common.ReturnSessionList>}
 */
const methodDescriptor_UserAct_PullSessionList = new grpc.web.MethodDescriptor(
  '/im.UserAct/PullSessionList',
  grpc.web.MethodType.UNARY,
  common_common_pb.PullSessionListRequest,
  common_common_pb.ReturnSessionList,
  /**
   * @param {!proto.common.PullSessionListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnSessionList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.PullSessionListRequest,
 *   !proto.common.ReturnSessionList>}
 */
const methodInfo_UserAct_PullSessionList = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnSessionList,
  /**
   * @param {!proto.common.PullSessionListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnSessionList.deserializeBinary
);


/**
 * @param {!proto.common.PullSessionListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnSessionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnSessionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.pullSessionList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/PullSessionList',
      request,
      metadata || {},
      methodDescriptor_UserAct_PullSessionList,
      callback);
};


/**
 * @param {!proto.common.PullSessionListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnSessionList>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.pullSessionList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/PullSessionList',
      request,
      metadata || {},
      methodDescriptor_UserAct_PullSessionList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.GetFriendListRequest,
 *   !proto.im.GetFriendListResponse>}
 */
const methodDescriptor_UserAct_GetFriendList = new grpc.web.MethodDescriptor(
  '/im.UserAct/GetFriendList',
  grpc.web.MethodType.UNARY,
  message_pb.GetFriendListRequest,
  message_pb.GetFriendListResponse,
  /**
   * @param {!proto.im.GetFriendListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.GetFriendListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.GetFriendListRequest,
 *   !proto.im.GetFriendListResponse>}
 */
const methodInfo_UserAct_GetFriendList = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.GetFriendListResponse,
  /**
   * @param {!proto.im.GetFriendListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.GetFriendListResponse.deserializeBinary
);


/**
 * @param {!proto.im.GetFriendListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.GetFriendListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.GetFriendListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.getFriendList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/GetFriendList',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetFriendList,
      callback);
};


/**
 * @param {!proto.im.GetFriendListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.GetFriendListResponse>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.getFriendList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/GetFriendList',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetFriendList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.GetTeamRequest,
 *   !proto.common.ReturnTeamList>}
 */
const methodDescriptor_UserAct_GetTeamList = new grpc.web.MethodDescriptor(
  '/im.UserAct/GetTeamList',
  grpc.web.MethodType.UNARY,
  common_common_pb.GetTeamRequest,
  common_common_pb.ReturnTeamList,
  /**
   * @param {!proto.common.GetTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnTeamList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.GetTeamRequest,
 *   !proto.common.ReturnTeamList>}
 */
const methodInfo_UserAct_GetTeamList = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnTeamList,
  /**
   * @param {!proto.common.GetTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnTeamList.deserializeBinary
);


/**
 * @param {!proto.common.GetTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnTeamList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnTeamList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.getTeamList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/GetTeamList',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetTeamList,
      callback);
};


/**
 * @param {!proto.common.GetTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnTeamList>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.getTeamList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/GetTeamList',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetTeamList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.GetAddTypeRequest,
 *   !proto.common.AddTypeResponse>}
 */
const methodDescriptor_UserAct_GetAddTypeSetting = new grpc.web.MethodDescriptor(
  '/im.UserAct/GetAddTypeSetting',
  grpc.web.MethodType.UNARY,
  common_common_pb.GetAddTypeRequest,
  common_common_pb.AddTypeResponse,
  /**
   * @param {!proto.common.GetAddTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.AddTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.GetAddTypeRequest,
 *   !proto.common.AddTypeResponse>}
 */
const methodInfo_UserAct_GetAddTypeSetting = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.AddTypeResponse,
  /**
   * @param {!proto.common.GetAddTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.AddTypeResponse.deserializeBinary
);


/**
 * @param {!proto.common.GetAddTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.AddTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.AddTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.getAddTypeSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/GetAddTypeSetting',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetAddTypeSetting,
      callback);
};


/**
 * @param {!proto.common.GetAddTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.AddTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.getAddTypeSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/GetAddTypeSetting',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetAddTypeSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.SetAddTypeRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_UserAct_SetAddTypeSetting = new grpc.web.MethodDescriptor(
  '/im.UserAct/SetAddTypeSetting',
  grpc.web.MethodType.UNARY,
  common_common_pb.SetAddTypeRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.SetAddTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.SetAddTypeRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_UserAct_SetAddTypeSetting = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.SetAddTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.SetAddTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.setAddTypeSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/SetAddTypeSetting',
      request,
      metadata || {},
      methodDescriptor_UserAct_SetAddTypeSetting,
      callback);
};


/**
 * @param {!proto.common.SetAddTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.setAddTypeSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/SetAddTypeSetting',
      request,
      metadata || {},
      methodDescriptor_UserAct_SetAddTypeSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.CheckAddTypeRequest,
 *   !proto.common.CheckAddTypeResponse>}
 */
const methodDescriptor_UserAct_CheckAddTypeSetting = new grpc.web.MethodDescriptor(
  '/im.UserAct/CheckAddTypeSetting',
  grpc.web.MethodType.UNARY,
  common_common_pb.CheckAddTypeRequest,
  common_common_pb.CheckAddTypeResponse,
  /**
   * @param {!proto.common.CheckAddTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.CheckAddTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.CheckAddTypeRequest,
 *   !proto.common.CheckAddTypeResponse>}
 */
const methodInfo_UserAct_CheckAddTypeSetting = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.CheckAddTypeResponse,
  /**
   * @param {!proto.common.CheckAddTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.CheckAddTypeResponse.deserializeBinary
);


/**
 * @param {!proto.common.CheckAddTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.CheckAddTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.CheckAddTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.checkAddTypeSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/CheckAddTypeSetting',
      request,
      metadata || {},
      methodDescriptor_UserAct_CheckAddTypeSetting,
      callback);
};


/**
 * @param {!proto.common.CheckAddTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.CheckAddTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.checkAddTypeSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/CheckAddTypeSetting',
      request,
      metadata || {},
      methodDescriptor_UserAct_CheckAddTypeSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.AppSearchRequest,
 *   !proto.common.SearchResponseOfUser>}
 */
const methodDescriptor_UserAct_SearchUser = new grpc.web.MethodDescriptor(
  '/im.UserAct/SearchUser',
  grpc.web.MethodType.UNARY,
  message_pb.AppSearchRequest,
  common_common_pb.SearchResponseOfUser,
  /**
   * @param {!proto.im.AppSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.SearchResponseOfUser.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.AppSearchRequest,
 *   !proto.common.SearchResponseOfUser>}
 */
const methodInfo_UserAct_SearchUser = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.SearchResponseOfUser,
  /**
   * @param {!proto.im.AppSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.SearchResponseOfUser.deserializeBinary
);


/**
 * @param {!proto.im.AppSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.SearchResponseOfUser)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.SearchResponseOfUser>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.searchUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/SearchUser',
      request,
      metadata || {},
      methodDescriptor_UserAct_SearchUser,
      callback);
};


/**
 * @param {!proto.im.AppSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.SearchResponseOfUser>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.searchUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/SearchUser',
      request,
      metadata || {},
      methodDescriptor_UserAct_SearchUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.GetApplyListRequest,
 *   !proto.im.GetApplyListResponse>}
 */
const methodDescriptor_UserAct_GetAppliesList = new grpc.web.MethodDescriptor(
  '/im.UserAct/GetAppliesList',
  grpc.web.MethodType.UNARY,
  message_pb.GetApplyListRequest,
  message_pb.GetApplyListResponse,
  /**
   * @param {!proto.im.GetApplyListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.GetApplyListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.GetApplyListRequest,
 *   !proto.im.GetApplyListResponse>}
 */
const methodInfo_UserAct_GetAppliesList = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.GetApplyListResponse,
  /**
   * @param {!proto.im.GetApplyListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.GetApplyListResponse.deserializeBinary
);


/**
 * @param {!proto.im.GetApplyListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.GetApplyListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.GetApplyListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.UserActClient.prototype.getAppliesList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.UserAct/GetAppliesList',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetAppliesList,
      callback);
};


/**
 * @param {!proto.im.GetApplyListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.GetApplyListResponse>}
 *     A native promise that resolves to the response
 */
proto.im.UserActPromiseClient.prototype.getAppliesList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.UserAct/GetAppliesList',
      request,
      metadata || {},
      methodDescriptor_UserAct_GetAppliesList);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.TeamActClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.TeamActPromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.CreateTeamRequest,
 *   !proto.common.CreateTeamResponse>}
 */
const methodDescriptor_TeamAct_CreateTeam = new grpc.web.MethodDescriptor(
  '/im.TeamAct/CreateTeam',
  grpc.web.MethodType.UNARY,
  common_common_pb.CreateTeamRequest,
  common_common_pb.CreateTeamResponse,
  /**
   * @param {!proto.common.CreateTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.CreateTeamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.CreateTeamRequest,
 *   !proto.common.CreateTeamResponse>}
 */
const methodInfo_TeamAct_CreateTeam = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.CreateTeamResponse,
  /**
   * @param {!proto.common.CreateTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.CreateTeamResponse.deserializeBinary
);


/**
 * @param {!proto.common.CreateTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.CreateTeamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.CreateTeamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.createTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/CreateTeam',
      request,
      metadata || {},
      methodDescriptor_TeamAct_CreateTeam,
      callback);
};


/**
 * @param {!proto.common.CreateTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.CreateTeamResponse>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.createTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/CreateTeam',
      request,
      metadata || {},
      methodDescriptor_TeamAct_CreateTeam);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.UpdateTeamRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_Update = new grpc.web.MethodDescriptor(
  '/im.TeamAct/Update',
  grpc.web.MethodType.UNARY,
  common_common_pb.UpdateTeamRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.UpdateTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.UpdateTeamRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_Update = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.UpdateTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.UpdateTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/Update',
      request,
      metadata || {},
      methodDescriptor_TeamAct_Update,
      callback);
};


/**
 * @param {!proto.common.UpdateTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/Update',
      request,
      metadata || {},
      methodDescriptor_TeamAct_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.CreateAnnouncementRequest,
 *   !proto.im.CreateAnnouncementResponse>}
 */
const methodDescriptor_TeamAct_CreateAnnouncement = new grpc.web.MethodDescriptor(
  '/im.TeamAct/CreateAnnouncement',
  grpc.web.MethodType.UNARY,
  message_pb.CreateAnnouncementRequest,
  message_pb.CreateAnnouncementResponse,
  /**
   * @param {!proto.im.CreateAnnouncementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.CreateAnnouncementResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.CreateAnnouncementRequest,
 *   !proto.im.CreateAnnouncementResponse>}
 */
const methodInfo_TeamAct_CreateAnnouncement = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.CreateAnnouncementResponse,
  /**
   * @param {!proto.im.CreateAnnouncementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.CreateAnnouncementResponse.deserializeBinary
);


/**
 * @param {!proto.im.CreateAnnouncementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.CreateAnnouncementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.CreateAnnouncementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.createAnnouncement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/CreateAnnouncement',
      request,
      metadata || {},
      methodDescriptor_TeamAct_CreateAnnouncement,
      callback);
};


/**
 * @param {!proto.im.CreateAnnouncementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.CreateAnnouncementResponse>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.createAnnouncement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/CreateAnnouncement',
      request,
      metadata || {},
      methodDescriptor_TeamAct_CreateAnnouncement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.DeleteAnnouncementRequest,
 *   !proto.im.DeleteAnnouncementResponse>}
 */
const methodDescriptor_TeamAct_DeleteAnnouncement = new grpc.web.MethodDescriptor(
  '/im.TeamAct/DeleteAnnouncement',
  grpc.web.MethodType.UNARY,
  message_pb.DeleteAnnouncementRequest,
  message_pb.DeleteAnnouncementResponse,
  /**
   * @param {!proto.im.DeleteAnnouncementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.DeleteAnnouncementResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.DeleteAnnouncementRequest,
 *   !proto.im.DeleteAnnouncementResponse>}
 */
const methodInfo_TeamAct_DeleteAnnouncement = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.DeleteAnnouncementResponse,
  /**
   * @param {!proto.im.DeleteAnnouncementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.DeleteAnnouncementResponse.deserializeBinary
);


/**
 * @param {!proto.im.DeleteAnnouncementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DeleteAnnouncementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DeleteAnnouncementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.deleteAnnouncement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/DeleteAnnouncement',
      request,
      metadata || {},
      methodDescriptor_TeamAct_DeleteAnnouncement,
      callback);
};


/**
 * @param {!proto.im.DeleteAnnouncementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DeleteAnnouncementResponse>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.deleteAnnouncement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/DeleteAnnouncement',
      request,
      metadata || {},
      methodDescriptor_TeamAct_DeleteAnnouncement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.AcceptTeamInviteRequest,
 *   !proto.im.AcceptTeamInviteResponse>}
 */
const methodDescriptor_TeamAct_AcceptInvite = new grpc.web.MethodDescriptor(
  '/im.TeamAct/AcceptInvite',
  grpc.web.MethodType.UNARY,
  message_pb.AcceptTeamInviteRequest,
  message_pb.AcceptTeamInviteResponse,
  /**
   * @param {!proto.im.AcceptTeamInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.AcceptTeamInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.AcceptTeamInviteRequest,
 *   !proto.im.AcceptTeamInviteResponse>}
 */
const methodInfo_TeamAct_AcceptInvite = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.AcceptTeamInviteResponse,
  /**
   * @param {!proto.im.AcceptTeamInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.AcceptTeamInviteResponse.deserializeBinary
);


/**
 * @param {!proto.im.AcceptTeamInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.AcceptTeamInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.AcceptTeamInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.acceptInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/AcceptInvite',
      request,
      metadata || {},
      methodDescriptor_TeamAct_AcceptInvite,
      callback);
};


/**
 * @param {!proto.im.AcceptTeamInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.AcceptTeamInviteResponse>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.acceptInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/AcceptInvite',
      request,
      metadata || {},
      methodDescriptor_TeamAct_AcceptInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.RejectTeamInviteRequest,
 *   !proto.im.RejectTeamInviteResponse>}
 */
const methodDescriptor_TeamAct_RejectInvite = new grpc.web.MethodDescriptor(
  '/im.TeamAct/RejectInvite',
  grpc.web.MethodType.UNARY,
  message_pb.RejectTeamInviteRequest,
  message_pb.RejectTeamInviteResponse,
  /**
   * @param {!proto.im.RejectTeamInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.RejectTeamInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.RejectTeamInviteRequest,
 *   !proto.im.RejectTeamInviteResponse>}
 */
const methodInfo_TeamAct_RejectInvite = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.RejectTeamInviteResponse,
  /**
   * @param {!proto.im.RejectTeamInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.RejectTeamInviteResponse.deserializeBinary
);


/**
 * @param {!proto.im.RejectTeamInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.RejectTeamInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.RejectTeamInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.rejectInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/RejectInvite',
      request,
      metadata || {},
      methodDescriptor_TeamAct_RejectInvite,
      callback);
};


/**
 * @param {!proto.im.RejectTeamInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.RejectTeamInviteResponse>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.rejectInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/RejectInvite',
      request,
      metadata || {},
      methodDescriptor_TeamAct_RejectInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.AddMemberRequest,
 *   !proto.common.AddMemberResponse>}
 */
const methodDescriptor_TeamAct_AddMembers = new grpc.web.MethodDescriptor(
  '/im.TeamAct/AddMembers',
  grpc.web.MethodType.UNARY,
  common_common_pb.AddMemberRequest,
  common_common_pb.AddMemberResponse,
  /**
   * @param {!proto.common.AddMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.AddMemberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.AddMemberRequest,
 *   !proto.common.AddMemberResponse>}
 */
const methodInfo_TeamAct_AddMembers = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.AddMemberResponse,
  /**
   * @param {!proto.common.AddMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.AddMemberResponse.deserializeBinary
);


/**
 * @param {!proto.common.AddMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.AddMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.AddMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.addMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/AddMembers',
      request,
      metadata || {},
      methodDescriptor_TeamAct_AddMembers,
      callback);
};


/**
 * @param {!proto.common.AddMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.AddMemberResponse>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.addMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/AddMembers',
      request,
      metadata || {},
      methodDescriptor_TeamAct_AddMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.KickMemberRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_RemoveMembers = new grpc.web.MethodDescriptor(
  '/im.TeamAct/RemoveMembers',
  grpc.web.MethodType.UNARY,
  common_common_pb.KickMemberRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.KickMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.KickMemberRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_RemoveMembers = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.KickMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.KickMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.removeMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/RemoveMembers',
      request,
      metadata || {},
      methodDescriptor_TeamAct_RemoveMembers,
      callback);
};


/**
 * @param {!proto.common.KickMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.removeMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/RemoveMembers',
      request,
      metadata || {},
      methodDescriptor_TeamAct_RemoveMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.SetManagerRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_AddManager = new grpc.web.MethodDescriptor(
  '/im.TeamAct/AddManager',
  grpc.web.MethodType.UNARY,
  common_common_pb.SetManagerRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.SetManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.SetManagerRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_AddManager = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.SetManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.SetManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.addManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/AddManager',
      request,
      metadata || {},
      methodDescriptor_TeamAct_AddManager,
      callback);
};


/**
 * @param {!proto.common.SetManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.addManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/AddManager',
      request,
      metadata || {},
      methodDescriptor_TeamAct_AddManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.SetManagerRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_RemoveManager = new grpc.web.MethodDescriptor(
  '/im.TeamAct/RemoveManager',
  grpc.web.MethodType.UNARY,
  common_common_pb.SetManagerRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.SetManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.SetManagerRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_RemoveManager = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.SetManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.SetManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.removeManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/RemoveManager',
      request,
      metadata || {},
      methodDescriptor_TeamAct_RemoveManager,
      callback);
};


/**
 * @param {!proto.common.SetManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.removeManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/RemoveManager',
      request,
      metadata || {},
      methodDescriptor_TeamAct_RemoveManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.UpdateTeamNickRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_UpdateTeamNick = new grpc.web.MethodDescriptor(
  '/im.TeamAct/UpdateTeamNick',
  grpc.web.MethodType.UNARY,
  common_common_pb.UpdateTeamNickRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.UpdateTeamNickRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.UpdateTeamNickRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_UpdateTeamNick = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.UpdateTeamNickRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.UpdateTeamNickRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.updateTeamNick =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/UpdateTeamNick',
      request,
      metadata || {},
      methodDescriptor_TeamAct_UpdateTeamNick,
      callback);
};


/**
 * @param {!proto.common.UpdateTeamNickRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.updateTeamNick =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/UpdateTeamNick',
      request,
      metadata || {},
      methodDescriptor_TeamAct_UpdateTeamNick);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.LeaveTeamRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_Leave = new grpc.web.MethodDescriptor(
  '/im.TeamAct/Leave',
  grpc.web.MethodType.UNARY,
  common_common_pb.LeaveTeamRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.LeaveTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.LeaveTeamRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_Leave = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.LeaveTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.LeaveTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.leave =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/Leave',
      request,
      metadata || {},
      methodDescriptor_TeamAct_Leave,
      callback);
};


/**
 * @param {!proto.common.LeaveTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.leave =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/Leave',
      request,
      metadata || {},
      methodDescriptor_TeamAct_Leave);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.LeaveTeamRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_Dissolve = new grpc.web.MethodDescriptor(
  '/im.TeamAct/Dissolve',
  grpc.web.MethodType.UNARY,
  common_common_pb.LeaveTeamRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.LeaveTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.LeaveTeamRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_Dissolve = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.LeaveTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.LeaveTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.dissolve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/Dissolve',
      request,
      metadata || {},
      methodDescriptor_TeamAct_Dissolve,
      callback);
};


/**
 * @param {!proto.common.LeaveTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.dissolve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/Dissolve',
      request,
      metadata || {},
      methodDescriptor_TeamAct_Dissolve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.GetTeamRequest,
 *   !proto.common.ReturnTeamList>}
 */
const methodDescriptor_TeamAct_GetTeam = new grpc.web.MethodDescriptor(
  '/im.TeamAct/GetTeam',
  grpc.web.MethodType.UNARY,
  common_common_pb.GetTeamRequest,
  common_common_pb.ReturnTeamList,
  /**
   * @param {!proto.common.GetTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnTeamList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.GetTeamRequest,
 *   !proto.common.ReturnTeamList>}
 */
const methodInfo_TeamAct_GetTeam = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnTeamList,
  /**
   * @param {!proto.common.GetTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnTeamList.deserializeBinary
);


/**
 * @param {!proto.common.GetTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnTeamList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnTeamList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.getTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/GetTeam',
      request,
      metadata || {},
      methodDescriptor_TeamAct_GetTeam,
      callback);
};


/**
 * @param {!proto.common.GetTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnTeamList>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.getTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/GetTeam',
      request,
      metadata || {},
      methodDescriptor_TeamAct_GetTeam);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.ChangeOwnerRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_ChangeOwner = new grpc.web.MethodDescriptor(
  '/im.TeamAct/ChangeOwner',
  grpc.web.MethodType.UNARY,
  common_common_pb.ChangeOwnerRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.ChangeOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.ChangeOwnerRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_ChangeOwner = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.ChangeOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.ChangeOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.changeOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/ChangeOwner',
      request,
      metadata || {},
      methodDescriptor_TeamAct_ChangeOwner,
      callback);
};


/**
 * @param {!proto.common.ChangeOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.changeOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/ChangeOwner',
      request,
      metadata || {},
      methodDescriptor_TeamAct_ChangeOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.GetMemberListRequest,
 *   !proto.common.ReturnTeamMemberInfo>}
 */
const methodDescriptor_TeamAct_GetMemberList = new grpc.web.MethodDescriptor(
  '/im.TeamAct/GetMemberList',
  grpc.web.MethodType.UNARY,
  common_common_pb.GetMemberListRequest,
  common_common_pb.ReturnTeamMemberInfo,
  /**
   * @param {!proto.common.GetMemberListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnTeamMemberInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.GetMemberListRequest,
 *   !proto.common.ReturnTeamMemberInfo>}
 */
const methodInfo_TeamAct_GetMemberList = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnTeamMemberInfo,
  /**
   * @param {!proto.common.GetMemberListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnTeamMemberInfo.deserializeBinary
);


/**
 * @param {!proto.common.GetMemberListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnTeamMemberInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnTeamMemberInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.getMemberList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/GetMemberList',
      request,
      metadata || {},
      methodDescriptor_TeamAct_GetMemberList,
      callback);
};


/**
 * @param {!proto.common.GetMemberListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnTeamMemberInfo>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.getMemberList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/GetMemberList',
      request,
      metadata || {},
      methodDescriptor_TeamAct_GetMemberList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.PullSpecifiedRequest,
 *   !proto.common.FriendValidateResponse>}
 */
const methodDescriptor_TeamAct_FriendValidateList = new grpc.web.MethodDescriptor(
  '/im.TeamAct/FriendValidateList',
  grpc.web.MethodType.UNARY,
  common_common_pb.PullSpecifiedRequest,
  common_common_pb.FriendValidateResponse,
  /**
   * @param {!proto.common.PullSpecifiedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.FriendValidateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.PullSpecifiedRequest,
 *   !proto.common.FriendValidateResponse>}
 */
const methodInfo_TeamAct_FriendValidateList = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.FriendValidateResponse,
  /**
   * @param {!proto.common.PullSpecifiedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.FriendValidateResponse.deserializeBinary
);


/**
 * @param {!proto.common.PullSpecifiedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.FriendValidateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.FriendValidateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.friendValidateList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/FriendValidateList',
      request,
      metadata || {},
      methodDescriptor_TeamAct_FriendValidateList,
      callback);
};


/**
 * @param {!proto.common.PullSpecifiedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.FriendValidateResponse>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.friendValidateList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/FriendValidateList',
      request,
      metadata || {},
      methodDescriptor_TeamAct_FriendValidateList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.PullAnnouncementListRequest,
 *   !proto.im.PullAnnouncementListResponse>}
 */
const methodDescriptor_TeamAct_PullAnnouncementList = new grpc.web.MethodDescriptor(
  '/im.TeamAct/PullAnnouncementList',
  grpc.web.MethodType.UNARY,
  message_pb.PullAnnouncementListRequest,
  message_pb.PullAnnouncementListResponse,
  /**
   * @param {!proto.im.PullAnnouncementListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.PullAnnouncementListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.PullAnnouncementListRequest,
 *   !proto.im.PullAnnouncementListResponse>}
 */
const methodInfo_TeamAct_PullAnnouncementList = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.PullAnnouncementListResponse,
  /**
   * @param {!proto.im.PullAnnouncementListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.PullAnnouncementListResponse.deserializeBinary
);


/**
 * @param {!proto.im.PullAnnouncementListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.PullAnnouncementListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.PullAnnouncementListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.pullAnnouncementList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/PullAnnouncementList',
      request,
      metadata || {},
      methodDescriptor_TeamAct_PullAnnouncementList,
      callback);
};


/**
 * @param {!proto.im.PullAnnouncementListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.PullAnnouncementListResponse>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.pullAnnouncementList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/PullAnnouncementList',
      request,
      metadata || {},
      methodDescriptor_TeamAct_PullAnnouncementList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.GetMemberRequest,
 *   !proto.common.ReturnTeamMemberInfo>}
 */
const methodDescriptor_TeamAct_GetMember = new grpc.web.MethodDescriptor(
  '/im.TeamAct/GetMember',
  grpc.web.MethodType.UNARY,
  common_common_pb.GetMemberRequest,
  common_common_pb.ReturnTeamMemberInfo,
  /**
   * @param {!proto.common.GetMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnTeamMemberInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.GetMemberRequest,
 *   !proto.common.ReturnTeamMemberInfo>}
 */
const methodInfo_TeamAct_GetMember = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnTeamMemberInfo,
  /**
   * @param {!proto.common.GetMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnTeamMemberInfo.deserializeBinary
);


/**
 * @param {!proto.common.GetMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnTeamMemberInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnTeamMemberInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.getMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/GetMember',
      request,
      metadata || {},
      methodDescriptor_TeamAct_GetMember,
      callback);
};


/**
 * @param {!proto.common.GetMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnTeamMemberInfo>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.getMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/GetMember',
      request,
      metadata || {},
      methodDescriptor_TeamAct_GetMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.TeamAddFriendRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_AddFriend = new grpc.web.MethodDescriptor(
  '/im.TeamAct/AddFriend',
  grpc.web.MethodType.UNARY,
  common_common_pb.TeamAddFriendRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.TeamAddFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.TeamAddFriendRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_AddFriend = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.TeamAddFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.TeamAddFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.addFriend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/AddFriend',
      request,
      metadata || {},
      methodDescriptor_TeamAct_AddFriend,
      callback);
};


/**
 * @param {!proto.common.TeamAddFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.addFriend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/AddFriend',
      request,
      metadata || {},
      methodDescriptor_TeamAct_AddFriend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.TeamMemberMuteRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_MuteMembers = new grpc.web.MethodDescriptor(
  '/im.TeamAct/MuteMembers',
  grpc.web.MethodType.UNARY,
  common_common_pb.TeamMemberMuteRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.TeamMemberMuteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.TeamMemberMuteRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_MuteMembers = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.TeamMemberMuteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.TeamMemberMuteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.muteMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/MuteMembers',
      request,
      metadata || {},
      methodDescriptor_TeamAct_MuteMembers,
      callback);
};


/**
 * @param {!proto.common.TeamMemberMuteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.muteMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/MuteMembers',
      request,
      metadata || {},
      methodDescriptor_TeamAct_MuteMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.MuteTeamRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_TeamAct_MuteTeam = new grpc.web.MethodDescriptor(
  '/im.TeamAct/MuteTeam',
  grpc.web.MethodType.UNARY,
  common_common_pb.MuteTeamRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.MuteTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.MuteTeamRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_TeamAct_MuteTeam = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.MuteTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.MuteTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TeamActClient.prototype.muteTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TeamAct/MuteTeam',
      request,
      metadata || {},
      methodDescriptor_TeamAct_MuteTeam,
      callback);
};


/**
 * @param {!proto.common.MuteTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.TeamActPromiseClient.prototype.muteTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TeamAct/MuteTeam',
      request,
      metadata || {},
      methodDescriptor_TeamAct_MuteTeam);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.SubscribeClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.SubscribePromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.SubscribeRequest,
 *   !proto.common.MsgInfo>}
 */
const methodDescriptor_Subscribe_Subscribe = new grpc.web.MethodDescriptor(
  '/im.Subscribe/Subscribe',
  grpc.web.MethodType.SERVER_STREAMING,
  message_pb.SubscribeRequest,
  common_common_pb.MsgInfo,
  /**
   * @param {!proto.im.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.MsgInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.SubscribeRequest,
 *   !proto.common.MsgInfo>}
 */
const methodInfo_Subscribe_Subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.MsgInfo,
  /**
   * @param {!proto.im.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.MsgInfo.deserializeBinary
);


/**
 * @param {!proto.im.SubscribeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.common.MsgInfo>}
 *     The XHR Node Readable Stream
 */
proto.im.SubscribeClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/im.Subscribe/Subscribe',
      request,
      metadata || {},
      methodDescriptor_Subscribe_Subscribe);
};


/**
 * @param {!proto.im.SubscribeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.common.MsgInfo>}
 *     The XHR Node Readable Stream
 */
proto.im.SubscribePromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/im.Subscribe/Subscribe',
      request,
      metadata || {},
      methodDescriptor_Subscribe_Subscribe);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.MsgActClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.MsgActPromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.SendMsgRequest,
 *   !proto.common.ReturnSendMsg>}
 */
const methodDescriptor_MsgAct_SendMsg = new grpc.web.MethodDescriptor(
  '/im.MsgAct/SendMsg',
  grpc.web.MethodType.UNARY,
  common_common_pb.SendMsgRequest,
  common_common_pb.ReturnSendMsg,
  /**
   * @param {!proto.common.SendMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnSendMsg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.SendMsgRequest,
 *   !proto.common.ReturnSendMsg>}
 */
const methodInfo_MsgAct_SendMsg = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnSendMsg,
  /**
   * @param {!proto.common.SendMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnSendMsg.deserializeBinary
);


/**
 * @param {!proto.common.SendMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnSendMsg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnSendMsg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.MsgActClient.prototype.sendMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.MsgAct/SendMsg',
      request,
      metadata || {},
      methodDescriptor_MsgAct_SendMsg,
      callback);
};


/**
 * @param {!proto.common.SendMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnSendMsg>}
 *     A native promise that resolves to the response
 */
proto.im.MsgActPromiseClient.prototype.sendMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.MsgAct/SendMsg',
      request,
      metadata || {},
      methodDescriptor_MsgAct_SendMsg);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.SessionActClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.SessionActPromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.HandleMsgRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_SessionAct_DeleteMsg = new grpc.web.MethodDescriptor(
  '/im.SessionAct/DeleteMsg',
  grpc.web.MethodType.UNARY,
  common_common_pb.HandleMsgRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.HandleMsgRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_SessionAct_DeleteMsg = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.HandleMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.SessionActClient.prototype.deleteMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.SessionAct/DeleteMsg',
      request,
      metadata || {},
      methodDescriptor_SessionAct_DeleteMsg,
      callback);
};


/**
 * @param {!proto.common.HandleMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.SessionActPromiseClient.prototype.deleteMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.SessionAct/DeleteMsg',
      request,
      metadata || {},
      methodDescriptor_SessionAct_DeleteMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.NotifyMsgRequest,
 *   !proto.im.NotifyMsgResponse>}
 */
const methodDescriptor_SessionAct_Notify = new grpc.web.MethodDescriptor(
  '/im.SessionAct/Notify',
  grpc.web.MethodType.UNARY,
  message_pb.NotifyMsgRequest,
  message_pb.NotifyMsgResponse,
  /**
   * @param {!proto.im.NotifyMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.NotifyMsgResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.NotifyMsgRequest,
 *   !proto.im.NotifyMsgResponse>}
 */
const methodInfo_SessionAct_Notify = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.NotifyMsgResponse,
  /**
   * @param {!proto.im.NotifyMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.NotifyMsgResponse.deserializeBinary
);


/**
 * @param {!proto.im.NotifyMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.NotifyMsgResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.NotifyMsgResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.SessionActClient.prototype.notify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.SessionAct/Notify',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Notify,
      callback);
};


/**
 * @param {!proto.im.NotifyMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.NotifyMsgResponse>}
 *     A native promise that resolves to the response
 */
proto.im.SessionActPromiseClient.prototype.notify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.SessionAct/Notify',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Notify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.HandleMsgRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_SessionAct_Read = new grpc.web.MethodDescriptor(
  '/im.SessionAct/Read',
  grpc.web.MethodType.UNARY,
  common_common_pb.HandleMsgRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.HandleMsgRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_SessionAct_Read = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.HandleMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.SessionActClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.SessionAct/Read',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Read,
      callback);
};


/**
 * @param {!proto.common.HandleMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.SessionActPromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.SessionAct/Read',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.RecallRequest,
 *   !proto.im.RecallResponse>}
 */
const methodDescriptor_SessionAct_Recall = new grpc.web.MethodDescriptor(
  '/im.SessionAct/Recall',
  grpc.web.MethodType.UNARY,
  message_pb.RecallRequest,
  message_pb.RecallResponse,
  /**
   * @param {!proto.im.RecallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.RecallResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.RecallRequest,
 *   !proto.im.RecallResponse>}
 */
const methodInfo_SessionAct_Recall = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.RecallResponse,
  /**
   * @param {!proto.im.RecallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.RecallResponse.deserializeBinary
);


/**
 * @param {!proto.im.RecallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.RecallResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.RecallResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.SessionActClient.prototype.recall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.SessionAct/Recall',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Recall,
      callback);
};


/**
 * @param {!proto.im.RecallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.RecallResponse>}
 *     A native promise that resolves to the response
 */
proto.im.SessionActPromiseClient.prototype.recall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.SessionAct/Recall',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Recall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.HandleSessionRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_SessionAct_DeleteSession = new grpc.web.MethodDescriptor(
  '/im.SessionAct/DeleteSession',
  grpc.web.MethodType.UNARY,
  common_common_pb.HandleSessionRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.HandleSessionRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_SessionAct_DeleteSession = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.HandleSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.SessionActClient.prototype.deleteSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.SessionAct/DeleteSession',
      request,
      metadata || {},
      methodDescriptor_SessionAct_DeleteSession,
      callback);
};


/**
 * @param {!proto.common.HandleSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.SessionActPromiseClient.prototype.deleteSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.SessionAct/DeleteSession',
      request,
      metadata || {},
      methodDescriptor_SessionAct_DeleteSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.HandleSessionRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_SessionAct_Top = new grpc.web.MethodDescriptor(
  '/im.SessionAct/Top',
  grpc.web.MethodType.UNARY,
  common_common_pb.HandleSessionRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.HandleSessionRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_SessionAct_Top = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.HandleSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.SessionActClient.prototype.top =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.SessionAct/Top',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Top,
      callback);
};


/**
 * @param {!proto.common.HandleSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.SessionActPromiseClient.prototype.top =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.SessionAct/Top',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Top);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.HandleSessionRequest,
 *   !proto.common.ReturnCode>}
 */
const methodDescriptor_SessionAct_Mute = new grpc.web.MethodDescriptor(
  '/im.SessionAct/Mute',
  grpc.web.MethodType.UNARY,
  common_common_pb.HandleSessionRequest,
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.HandleSessionRequest,
 *   !proto.common.ReturnCode>}
 */
const methodInfo_SessionAct_Mute = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnCode,
  /**
   * @param {!proto.common.HandleSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnCode.deserializeBinary
);


/**
 * @param {!proto.common.HandleSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.SessionActClient.prototype.mute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.SessionAct/Mute',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Mute,
      callback);
};


/**
 * @param {!proto.common.HandleSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnCode>}
 *     A native promise that resolves to the response
 */
proto.im.SessionActPromiseClient.prototype.mute =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.SessionAct/Mute',
      request,
      metadata || {},
      methodDescriptor_SessionAct_Mute);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.UploadClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.UploadPromiseClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.TestServiceClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.TestServicePromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.GetYunXinTidRequest,
 *   !proto.common.ReturnYunXinTid>}
 */
const methodDescriptor_TestService_GetYunXinTid = new grpc.web.MethodDescriptor(
  '/im.TestService/GetYunXinTid',
  grpc.web.MethodType.UNARY,
  common_common_pb.GetYunXinTidRequest,
  common_common_pb.ReturnYunXinTid,
  /**
   * @param {!proto.common.GetYunXinTidRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnYunXinTid.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.GetYunXinTidRequest,
 *   !proto.common.ReturnYunXinTid>}
 */
const methodInfo_TestService_GetYunXinTid = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.ReturnYunXinTid,
  /**
   * @param {!proto.common.GetYunXinTidRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.ReturnYunXinTid.deserializeBinary
);


/**
 * @param {!proto.common.GetYunXinTidRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.ReturnYunXinTid)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.ReturnYunXinTid>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.TestServiceClient.prototype.getYunXinTid =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.TestService/GetYunXinTid',
      request,
      metadata || {},
      methodDescriptor_TestService_GetYunXinTid,
      callback);
};


/**
 * @param {!proto.common.GetYunXinTidRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.ReturnYunXinTid>}
 *     A native promise that resolves to the response
 */
proto.im.TestServicePromiseClient.prototype.getYunXinTid =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.TestService/GetYunXinTid',
      request,
      metadata || {},
      methodDescriptor_TestService_GetYunXinTid);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.ServerClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.ServerPromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.Empty,
 *   !proto.common.Empty>}
 */
const methodDescriptor_Server_Ping = new grpc.web.MethodDescriptor(
  '/im.Server/Ping',
  grpc.web.MethodType.UNARY,
  common_common_pb.Empty,
  common_common_pb.Empty,
  /**
   * @param {!proto.common.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.Empty,
 *   !proto.common.Empty>}
 */
const methodInfo_Server_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.Empty,
  /**
   * @param {!proto.common.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ServerClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Server/Ping',
      request,
      metadata || {},
      methodDescriptor_Server_Ping,
      callback);
};


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.Empty>}
 *     A native promise that resolves to the response
 */
proto.im.ServerPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Server/Ping',
      request,
      metadata || {},
      methodDescriptor_Server_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.LoginRequest,
 *   !proto.im.LoginResponse>}
 */
const methodDescriptor_Server_Login = new grpc.web.MethodDescriptor(
  '/im.Server/Login',
  grpc.web.MethodType.UNARY,
  message_pb.LoginRequest,
  message_pb.LoginResponse,
  /**
   * @param {!proto.im.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.LoginRequest,
 *   !proto.im.LoginResponse>}
 */
const methodInfo_Server_Login = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.LoginResponse,
  /**
   * @param {!proto.im.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.im.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ServerClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Server/Login',
      request,
      metadata || {},
      methodDescriptor_Server_Login,
      callback);
};


/**
 * @param {!proto.im.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.im.ServerPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Server/Login',
      request,
      metadata || {},
      methodDescriptor_Server_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.LoginRequest,
 *   !proto.im.LoginResponse>}
 */
const methodDescriptor_Server_Logout = new grpc.web.MethodDescriptor(
  '/im.Server/Logout',
  grpc.web.MethodType.UNARY,
  message_pb.LoginRequest,
  message_pb.LoginResponse,
  /**
   * @param {!proto.im.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.LoginRequest,
 *   !proto.im.LoginResponse>}
 */
const methodInfo_Server_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.LoginResponse,
  /**
   * @param {!proto.im.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.im.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ServerClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Server/Logout',
      request,
      metadata || {},
      methodDescriptor_Server_Logout,
      callback);
};


/**
 * @param {!proto.im.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.im.ServerPromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Server/Logout',
      request,
      metadata || {},
      methodDescriptor_Server_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.HeartBeatRequest,
 *   !proto.im.HeartBeatResponse>}
 */
const methodDescriptor_Server_HeartBeat = new grpc.web.MethodDescriptor(
  '/im.Server/HeartBeat',
  grpc.web.MethodType.UNARY,
  message_pb.HeartBeatRequest,
  message_pb.HeartBeatResponse,
  /**
   * @param {!proto.im.HeartBeatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.HeartBeatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.HeartBeatRequest,
 *   !proto.im.HeartBeatResponse>}
 */
const methodInfo_Server_HeartBeat = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.HeartBeatResponse,
  /**
   * @param {!proto.im.HeartBeatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.HeartBeatResponse.deserializeBinary
);


/**
 * @param {!proto.im.HeartBeatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.HeartBeatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.HeartBeatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ServerClient.prototype.heartBeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Server/HeartBeat',
      request,
      metadata || {},
      methodDescriptor_Server_HeartBeat,
      callback);
};


/**
 * @param {!proto.im.HeartBeatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.HeartBeatResponse>}
 *     A native promise that resolves to the response
 */
proto.im.ServerPromiseClient.prototype.heartBeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Server/HeartBeat',
      request,
      metadata || {},
      methodDescriptor_Server_HeartBeat);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.RtcClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.RtcPromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.RtcRoomRequest,
 *   !proto.common.RtcRoomResponse>}
 */
const methodDescriptor_Rtc_Room = new grpc.web.MethodDescriptor(
  '/im.Rtc/Room',
  grpc.web.MethodType.UNARY,
  common_common_pb.RtcRoomRequest,
  common_common_pb.RtcRoomResponse,
  /**
   * @param {!proto.common.RtcRoomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.RtcRoomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.common.RtcRoomRequest,
 *   !proto.common.RtcRoomResponse>}
 */
const methodInfo_Rtc_Room = new grpc.web.AbstractClientBase.MethodInfo(
  common_common_pb.RtcRoomResponse,
  /**
   * @param {!proto.common.RtcRoomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_common_pb.RtcRoomResponse.deserializeBinary
);


/**
 * @param {!proto.common.RtcRoomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.common.RtcRoomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.RtcRoomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.RtcClient.prototype.room =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Rtc/Room',
      request,
      metadata || {},
      methodDescriptor_Rtc_Room,
      callback);
};


/**
 * @param {!proto.common.RtcRoomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.RtcRoomResponse>}
 *     A native promise that resolves to the response
 */
proto.im.RtcPromiseClient.prototype.room =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Rtc/Room',
      request,
      metadata || {},
      methodDescriptor_Rtc_Room);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.ContrastClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.ContrastPromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.GetVersionsRequest,
 *   !proto.im.GetVersionsResponse>}
 */
const methodDescriptor_Contrast_GetVersions = new grpc.web.MethodDescriptor(
  '/im.Contrast/GetVersions',
  grpc.web.MethodType.UNARY,
  message_pb.GetVersionsRequest,
  message_pb.GetVersionsResponse,
  /**
   * @param {!proto.im.GetVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.GetVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.GetVersionsRequest,
 *   !proto.im.GetVersionsResponse>}
 */
const methodInfo_Contrast_GetVersions = new grpc.web.AbstractClientBase.MethodInfo(
  message_pb.GetVersionsResponse,
  /**
   * @param {!proto.im.GetVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  message_pb.GetVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.im.GetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.GetVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.GetVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ContrastClient.prototype.getVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Contrast/GetVersions',
      request,
      metadata || {},
      methodDescriptor_Contrast_GetVersions,
      callback);
};


/**
 * @param {!proto.im.GetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.GetVersionsResponse>}
 *     A native promise that resolves to the response
 */
proto.im.ContrastPromiseClient.prototype.getVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Contrast/GetVersions',
      request,
      metadata || {},
      methodDescriptor_Contrast_GetVersions);
};


module.exports = proto.im;

