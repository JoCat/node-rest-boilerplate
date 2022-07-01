import fastify from "fastify";
import fastifyCors from "@fastify/cors";

import { routes } from "./src/routes.js";
import { config } from "./src/config.js";

const app = fastify();
app.register(routes);
app.register(fastifyCors);

try {
    const address = await app.listen(config);
    console.log(`Server started on ${address}`);
} catch (error) {
    console.error(error);
    process.exit(1);
}
