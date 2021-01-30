global.config = require("./config.json");
const express = require("express");
const cors = require("cors");
const booksController= require("./controllers/book-controller")

const server= express();

server.use(cors());
server.use(express.json());
server.use("/api/books", booksController);

server.listen(3003, ()=> console.log('Listing on 3003....'))