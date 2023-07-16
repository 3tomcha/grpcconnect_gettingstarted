import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import routes from "./connect"

async function main() {
  const server = fastify();
  await server.register(fastifyConnectPlugin, {
    routes
  });
  server.get("/", (_, reply) => {
    reply.type("text/plain")
    reply.send("Hello, world!")
  })
  await server.listen({ host: "localhost", port: 8080 });
  console.log("server is listening on http://localhost:8080")
}

void main();