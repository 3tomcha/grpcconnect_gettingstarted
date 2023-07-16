import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import routes from "./connect"
import { readFileSync } from "fs";

async function main() {
  const server = fastify({
    https2: true,
    https: {
      key: readFileSync("localhost+2-key.pem", "utf8"),
      cert: readFileSync("localhost+2.pem", "utf8")
    }
  });
  await server.register(fastifyConnectPlugin, {
    routes
  });
  server.get("/", (_, reply) => {
    reply.type("text/plain")
    reply.send("Hello, world!")
  })
  await server.listen({ host: "localhost", port: 8443 });
  console.log("server is listening at", server.addresses())
}

void main();