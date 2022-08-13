import { createServer } from "http";

const server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end("Am I Node, Deno or Bun?");
});

server.listen(3000, () => console.log("Server running on port 3000"));
