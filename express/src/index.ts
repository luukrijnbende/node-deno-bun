import express from "express";

const server = express();

server.get("/", (req, res) => res.send("Am I Node, Deno or Bun?"));

server.listen(3000, () => console.log("Server running on port 3000"));
