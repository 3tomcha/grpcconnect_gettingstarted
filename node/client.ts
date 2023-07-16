import { createPromiseClient } from "@bufbuild/connect";
import { Eliza } from "./gen/eliza_connect";
import { createConnectTransport } from "@bufbuild/connect-web";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
  httpVersion: "1.1",
})

async function main() {
  const client = createPromiseClient(Eliza, transport);
  const res = await client.say({ sentence: "I feel happy" })
  console.log(res)
}

void main();
