import { startServer } from "./server";

(async function main() {
    console.log("Starting up!");

    await startServer();

    console.log("All done, zoom zoom!");
})();
