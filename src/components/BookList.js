
import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, searchTerm, addToCart }) => {
    // Filter books based on the search term
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="book-list">
            {filteredBooks.map((book) => (
                <BookItem key={book.id} book={book} addToCart={addToCart} /> 
            ))}
        </div>
    );
};

export default BookList;
