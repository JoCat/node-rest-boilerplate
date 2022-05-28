import dotenv from "dotenv";
dotenv.config();

export const config = {
    SERVER_PORT: process.env.SERVER_PORT || 4000,
    SERVER_ADDR: process.env.SERVER_ADDR || "0.0.0.0",
};
