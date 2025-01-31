require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin:  ["https://unique-caramel-240257.netlify.app/"], 
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Chat App Backend is running!");
});

// Socket.IO setup
io.on("connection", (socket) => {
          console.log(`User connected: ${socket.id}`);
        
          socket.on("sendMessage", (data) => {
            io.emit("receiveMessage", data); // Broadcast message with sender name
          });
        
          socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
          });
        });
        

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


