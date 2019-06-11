const booksLoaded = (newBooks) => {
return {
    type: 'BOOKS_LOADED',
    payloads: newBooks
 };
};

export {
    booksLoaded
};