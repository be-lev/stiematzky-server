const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const booksLogic = require("../business-logic-layer/book-logic");

router.get("/", async (request, response) => {
  try {
    const books = await booksLogic.getAllBooksAsync();
    response.json(books);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

router.post("/", async (request, response) => {
  try {
    const book = request.body;
    const addedbook = await booksLogic.addBookAsync(book);
    response.status(201).send(addedbook);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

router.get("/generes", async(request,response)=>{
    try{
       const generes = await booksLogic.getAllGeneresAsync();
       response.json(generes) 
    }catch(err){
        response.status(500).send(err.message);
    }
})

module.exports = router;