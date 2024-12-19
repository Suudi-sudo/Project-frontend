// src/components/BookItem.js
import React from 'react';
// import { Link } from 'react-router-dom'; 

const BookItem = ({ book, addToCart }) => {
    return (
        <div className="book-item">
            {book.image_url && <img src={book.image_url} alt={book.title} />}
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>${book.price}</p>
            <button onClick={() => addToCart(book)}>Order Now</button>
        </div>
    );
};

export default BookItem;
