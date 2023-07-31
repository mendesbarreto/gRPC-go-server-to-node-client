// package: api.v1.chucknorris
// file: chuck_norris_fact.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as chuck_norris_fact_pb from "./chuck_norris_fact_pb";

interface IChuckNorrisFactServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRandomFact: IChuckNorrisFactServiceService_IGetRandomFact;
}

interface IChuckNorrisFactServiceService_IGetRandomFact extends grpc.MethodDefinition<chuck_norris_fact_pb.GetRandomJokeRequest, chuck_norris_fact_pb.GetRandomJokeResponse> {
    path: "/api.v1.chucknorris.ChuckNorrisFactService/GetRandomFact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chuck_norris_fact_pb.GetRandomJokeRequest>;
    requestDeserialize: grpc.deserialize<chuck_norris_fact_pb.GetRandomJokeRequest>;
    responseSerialize: grpc.serialize<chuck_norris_fact_pb.GetRandomJokeResponse>;
    responseDeserialize: grpc.deserialize<chuck_norris_fact_pb.GetRandomJokeResponse>;
}

export const ChuckNorrisFactServiceService: IChuckNorrisFactServiceService;

export interface IChuckNorrisFactServiceServer {
    getRandomFact: grpc.handleUnaryCall<chuck_norris_fact_pb.GetRandomJokeRequest, chuck_norris_fact_pb.GetRandomJokeResponse>;
}

export interface IChuckNorrisFactServiceClient {
    getRandomFact(request: chuck_norris_fact_pb.GetRandomJokeRequest, callback: (error: grpc.ServiceError | null, response: chuck_norris_fact_pb.GetRandomJokeResponse) => void): grpc.ClientUnaryCall;
    getRandomFact(request: chuck_norris_fact_pb.GetRandomJokeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chuck_norris_fact_pb.GetRandomJokeResponse) => void): grpc.ClientUnaryCall;
    getRandomFact(request: chuck_norris_fact_pb.GetRandomJokeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chuck_norris_fact_pb.GetRandomJokeResponse) => void): grpc.ClientUnaryCall;
}

export class ChuckNorrisFactServiceClient extends grpc.Client implements IChuckNorrisFactServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getRandomFact(request: chuck_norris_fact_pb.GetRandomJokeRequest, callback: (error: grpc.ServiceError | null, response: chuck_norris_fact_pb.GetRandomJokeResponse) => void): grpc.ClientUnaryCall;
    public getRandomFact(request: chuck_norris_fact_pb.GetRandomJokeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chuck_norris_fact_pb.GetRandomJokeResponse) => void): grpc.ClientUnaryCall;
    public getRandomFact(request: chuck_norris_fact_pb.GetRandomJokeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chuck_norris_fact_pb.GetRandomJokeResponse) => void): grpc.ClientUnaryCall;
}
