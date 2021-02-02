const dal = require("../data-access-layer/dal");

async function getAllBooksAsync() {
  const sql = `SELECT bookId, G.bookType, name, description , price , stock  
    FROM  books  AS B 
    JOIN genres as G 
    on B.genre = G.genre`;

  const books = await dal.executeAsync(sql);
  return books;
}

async function addBookAsync(book) {
  const sql = `INSERT INTO BOOKS VALUES(
        DEFAULT,
        '${book.genre}',
        '${book.name}',
        '${book.description}',
        ${book.price},
        ${book.stock})`;
    const info = await dal.executeAsync(sql);
    book.bookId = info.insertId;

    book.name= await getBookType(book.genre)

    return book
}

async function getBookType(genre) {
    const sql = `SELECT bookType 
    FROM genres 
    WHERE genre = ${genre}`;
    const genres = await dal.executeAsync(sql);
    return genres[0].bookType
}

async function getAllGeneresAsync() {
    const sql = `SELECT * FROM genres`
    const genres = await dal.executeAsync(sql);
    return genres
}

module.exports = {
    getAllBooksAsync,
    addBookAsync,
    getAllGeneresAsync

}