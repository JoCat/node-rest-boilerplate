import fastify from "fastify";
import fastifyCors from "fastify-cors";
import { routes } from "./src/routes.js";
import { config } from "./src/config.js";

const app = fastify();
app.register(routes);
app.register(fastifyCors);

try {
    await app.listen(config.SERVER_PORT, config.SERVER_ADDR);
    console.log(`Server started on port ${config.SERVER_PORT}`);
} catch (error) {
    console.error(error);
    process.exit(1);
}
