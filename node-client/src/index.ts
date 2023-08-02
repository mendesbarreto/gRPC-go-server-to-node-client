import { getChuckNorrisRandomFacts } from "./modules/chuck-facts/getChuckNorrisRandomFacts";

async function main() {
  const fact = await getChuckNorrisRandomFacts();
  console.log({ fact });
}

main();
