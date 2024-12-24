import { Server } from "colyseus";
import { createServer } from "http";
import express from "express";

const app = express();
const port = 2567;

const server = createServer(app);

const gameServer = new Server({
    server,
});

gameServer.listen(port);
console.log(`Server is running on http://localhost:${port}`);
