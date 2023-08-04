#!/bin/bash

BASEDIR=$(dirname "$0")
PROTO_DEST="./proto"

echo "Creating folders if not exists"
mkdir -p ${PROTO_DEST}

echo "Generate Golang code"
protoc proto/*.proto \
	--go_out=. \
	--go_opt=paths=source_relative \
	--go-grpc_out=. \
	--go-grpc_opt=paths=source_relative \
	--proto_path=.
