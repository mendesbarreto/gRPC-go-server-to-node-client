#!/bin/bash

BASEDIR=$(dirname "$0")
PROTO_DEST="./src/modules/proto/"

# Generate Javascript
# yarn grpc_tools_node_protoc \
# --js_out=import_style=commonjs,binary:./src/modules/proto/ \
# 	--grpc_out=grpc_js:${PROTO_DEST} \
# 	--proto_path="$(pwd)/../golang/proto" \
# 	"$(pwd)/../golang/proto/chuck_norris_fact.proto"

echo "Creating folders if not exists"
mkdir -p ${PROTO_DEST}

# Generate Typscript
yarn grpc_tools_node_protoc \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--ts_out=${PROTO_DEST} \
	--proto_path=../golang/proto/ \
	../golang/proto/*.proto
