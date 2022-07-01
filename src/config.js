import dotenv from "dotenv";
dotenv.config();

export const config = {
    port: Number(process.env.SERVER_PORT) || 4000,
    host: process.env.SERVER_HOST || "0.0.0.0",
};
