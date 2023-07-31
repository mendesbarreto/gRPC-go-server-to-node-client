// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chuck_norris_fact_pb = require('./chuck_norris_fact_pb.js');

function serialize_api_v1_chucknorris_GetRandomJokeRequest(arg) {
  if (!(arg instanceof chuck_norris_fact_pb.GetRandomJokeRequest)) {
    throw new Error('Expected argument of type api.v1.chucknorris.GetRandomJokeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_chucknorris_GetRandomJokeRequest(buffer_arg) {
  return chuck_norris_fact_pb.GetRandomJokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_chucknorris_GetRandomJokeResponse(arg) {
  if (!(arg instanceof chuck_norris_fact_pb.GetRandomJokeResponse)) {
    throw new Error('Expected argument of type api.v1.chucknorris.GetRandomJokeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_chucknorris_GetRandomJokeResponse(buffer_arg) {
  return chuck_norris_fact_pb.GetRandomJokeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChuckNorrisFactServiceService = exports.ChuckNorrisFactServiceService = {
  getRandomFact: {
    path: '/api.v1.chucknorris.ChuckNorrisFactService/GetRandomFact',
    requestStream: false,
    responseStream: false,
    requestType: chuck_norris_fact_pb.GetRandomJokeRequest,
    responseType: chuck_norris_fact_pb.GetRandomJokeResponse,
    requestSerialize: serialize_api_v1_chucknorris_GetRandomJokeRequest,
    requestDeserialize: deserialize_api_v1_chucknorris_GetRandomJokeRequest,
    responseSerialize: serialize_api_v1_chucknorris_GetRandomJokeResponse,
    responseDeserialize: deserialize_api_v1_chucknorris_GetRandomJokeResponse,
  },
};

exports.ChuckNorrisFactServiceClient = grpc.makeGenericClientConstructor(ChuckNorrisFactServiceService);
