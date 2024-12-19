// src/components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            id: Date.now(), // Generate a unique ID
            title,
            author,
            price: parseFloat(price),
        };
        onSubmit(newBook);
        // Reset form fields
        setTitle('');
        setAuthor('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Author" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                required 
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
