import { createPromiseClient } from "@bufbuild/connect";
import { Eliza } from "./gen/eliza_connect";
import { createConnectTransport } from "@bufbuild/connect-web";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
})

async function main() {
  const client = createPromiseClient(Eliza, transport);
  const res = await client.say({ sentence: "I feel" })
  console.log(res)
}

void main();
