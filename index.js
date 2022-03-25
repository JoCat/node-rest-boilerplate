import fastify from "fastify";
import fastifyCors from "fastify-cors";
import { routes } from "./src/routes.js";
import { config } from "./src/config.js";

const app = fastify();
app.register(routes);
app.register(fastifyCors);

async function main() {
    try {
        await app.listen(config.SERVER_PORT, "0.0.0.0");
        console.log(`Server started on port ${config.SERVER_PORT}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
main();
