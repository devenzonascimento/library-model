import { fastify, FastifyInstance } from "fastify";
import { fastifyCors } from "@fastify/cors";

const server: FastifyInstance = fastify();

server.register(fastifyCors, {
  origin: true,
});

server.get("/", () => {
  return "SERVER ON!";
});

const start = async () => {
  try {
    await server.listen({ port: 3333, host: "0.0.0.0" });
    console.log(`🔥 Server is running on http://192.168.0.109:3333 🔥`);
  } catch (err) {
    server.log.error(err);
  }
};

start();
