import { credentials } from "@grpc/grpc-js";
import { ChuckNorrisFactServiceClient } from "../proto/chuck_norris_fact_grpc_pb";
import { GetRandomJokeRequest } from "../proto/chuck_norris_fact_pb";

const serverUrl = "localhost:50051";

export async function getChuckNorrisRandomFacts(): Promise<string> {
  const client = new ChuckNorrisFactServiceClient(
    serverUrl,
    credentials.createInsecure(),
  );

  return new Promise((resolve, reject) => {
    const request = new GetRandomJokeRequest();
    client.getRandomFact(request, (err, response) => {
      if (err) reject(err);
      else resolve(response.toObject().value);
    });
  });
}
