//env stuff should be at the top of the entry point of the project
const dotenv = require("dotenv").config();

const express = require("express");
const cors = require("cors");
//make sure to set a fallback port
const port = process.env.PORT || 4000;

//path ships with node, so no need to install anything - allows doing things with urls
const path = require("path");

console.log("hello world");
console.log(__dirname);
console.log(process.env.LADY);
console.log(process.env.FOO);
console.log(process.env.ALWAYS);
console.log(process.env.PORT);

const app = express();

app.use(cors());
app.use(express.json());
//teaches express where static assets are
app.use(express.static(path.join(__dirname, "client/build")));

//underscore is good for when you don't need a parameter in function code but still need to list one
//api routes
app.use("/api/*", (_, res) => {
  res.json({ data: "hello world" });
});

//client routes
app.use("*", (_, res) => {
  //send index.html to the client
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
