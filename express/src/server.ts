import express from "express";

const server = express();

server.get("/", (req, res) => res.send("Am I Node, Deno or Bun?"));

export async function startServer() {
    return new Promise((resolve, reject) =>
        server.listen(3000)
            .once("listening", resolve)
            .once("error", reject));
}
