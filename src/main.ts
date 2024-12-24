import { Server } from "colyseus";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { createServer } from "http";
import express from "express";

const app = express();
const port = 2567;

app.use(express.static("public"));

const server = createServer(app);

const transport = new WebSocketTransport({
  server,
  pingInterval: 5000,
  pingMaxRetries: 3,
  verifyClient: (info, next) => {
    next(true);
  }
});

const gameServer = new Server({
  transport,
});

gameServer.listen(port);
console.log(`Server is running on http://localhost:${port}`);
