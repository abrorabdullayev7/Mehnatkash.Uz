const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const { enforceSingleAdminFromEnv } = require("./services/adminBootstrap");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", platform: "UstaTop", date: new Date().toISOString() });
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/services", require("./routes/services"));
app.use("/api/bookings", require("./routes/bookings"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/recommendations", require("./routes/recommendations"));

io.on("connection", (socket) => {
  socket.on("join_room", (roomId) => {
    socket.join(roomId);
  });

  socket.on("send_message", ({ roomId, message }) => {
    io.to(roomId).emit("receive_message", message);
  });

  socket.on("disconnect", () => {});
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB(process.env.MONGO_URI);
  await enforceSingleAdminFromEnv();
  server.listen(PORT, () => {
    console.log(`UstaTop backend listening on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Server start error:", error.message);
  process.exit(1);
});
