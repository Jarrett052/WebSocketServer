const WebSocket = require("ws");

const socketPort = 5000;

const server = new WebSocket.Server({ port: socketPort });

server.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    socket.send(`You said: ${message}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log(new Date() + ": socket server is running on port: " + socketPort);
