const express = require("express");
const http = require("http");
const ws = require("ws");
const path = require("path");
 
const app = express();
app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => { res.sendFile(path.join(__dirname, "index.html")) });
 
const httpServer = http.createServer(app);
const wss = new ws.Server({ server: httpServer });
wss.on("connection", (wss) => { console.log("connected") });
 
const port = process.env.PORT || 3000;
httpServer.listen(port, () => { console.log("Server started. Port: ", port) });