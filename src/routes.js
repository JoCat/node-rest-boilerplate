import { main } from "./controllers/main.js";

export async function routes(app) {
    app.get("/", main);
}
