import React from 'react';

const BookItem = ({ book, addToCart, onDelete, onEdit }) => {
    return (
        <div className="book-item">
            <img src={book.image_url} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>Price: ${book.price.toFixed(2)}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => onDelete(book.id)}>Delete</button>
        </div>
    );
};

export default BookItem;
