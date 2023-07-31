// package: api.v1.chucknorris
// file: chuck_norris_fact.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetRandomJokeRequest extends jspb.Message { 

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): string | undefined;
    setCategory(value: string): GetRandomJokeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRandomJokeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRandomJokeRequest): GetRandomJokeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRandomJokeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRandomJokeRequest;
    static deserializeBinaryFromReader(message: GetRandomJokeRequest, reader: jspb.BinaryReader): GetRandomJokeRequest;
}

export namespace GetRandomJokeRequest {
    export type AsObject = {
        category?: string,
    }
}

export class GetRandomJokeResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetRandomJokeResponse;
    getIconurl(): string;
    setIconurl(value: string): GetRandomJokeResponse;

    hasUrl(): boolean;
    clearUrl(): void;
    getUrl(): string | undefined;
    setUrl(value: string): GetRandomJokeResponse;
    getValue(): string;
    setValue(value: string): GetRandomJokeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRandomJokeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRandomJokeResponse): GetRandomJokeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRandomJokeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRandomJokeResponse;
    static deserializeBinaryFromReader(message: GetRandomJokeResponse, reader: jspb.BinaryReader): GetRandomJokeResponse;
}

export namespace GetRandomJokeResponse {
    export type AsObject = {
        id: string,
        iconurl: string,
        url?: string,
        value: string,
    }
}
