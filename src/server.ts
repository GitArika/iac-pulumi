import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

const server = fastify();

server.register(fastifyCors, {
  origin: "*",
});

server.get("/env", async () => {
  return JSON.stringify(process.env, null, 2);
});

server.get("/health", async () => {
  return "ok";
});

server.listen({ host: "0.0.0.0", port: 3333 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("HTTP server running!");
});
