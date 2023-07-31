import { Server, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

let protoFilePath = __dirname + "/../../golang/proto/chuck_norris_fact.proto";
let protoDefinitions = loadSync(protoFilePath, {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const chuckNorrisFactService =
  loadPackageDefinition(protoDefinitions).api.v1.chucknorris
    .ChuckNorrisFactService;

console.log(chuckNorrisFactService);

function mian() {}
