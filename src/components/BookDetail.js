// src/components/BookDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../data/books';

const BookDetail = () => {
    const { id } = useParams();
    const book = booksData.find((b) => b.id === parseInt(id));

    if (!book) {
        return <div>Book not found!</div>;
    }

    return (
        <div className="book-detail">
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            <img src={book.cover} alt={book.title} />
            <p>{book.description}</p>
            <p>Price: ${book.price}</p>
            {/* Add functionality for ordering here */}
           
        </div>
    );
};

export default BookDetail;
