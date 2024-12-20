
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookForm = ({ bookToEdit, onSave }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (bookToEdit) {
            setTitle(bookToEdit.title);
            setAuthor(bookToEdit.author);
            setPrice(bookToEdit.price);
            setImageUrl(bookToEdit.image_url);
            setDescription(bookToEdit.description);
        } else {
            // Reset form fields when not editing
            setTitle('');
            setAuthor('');
            setPrice(0);
            setImageUrl('');
            setDescription('');
        }
    }, [bookToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookData = { title, author, price: parseFloat(price), image_url: imageUrl, description };

        try {
            if (bookToEdit) {
                // Update existing book
                await axios.put(`http://127.0.0.1:8000/books/${bookToEdit.id}`, bookData);
            } else {
                // Create new book
                await axios.post('http://127.0.0.1:8000/books/', bookData);
            }
            onSave(); // Refresh the book list after saving
        } catch (error) {
            console.error("Error saving book:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Book Title" 
                required 
            />
            <input 
                type="text" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Author" 
                required 
            />
            <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                placeholder="Price" 
                required 
            />
            <input 
                type="text" 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
                placeholder="Image URL" 
                required 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
                required 
            />
            
            <button type="submit">{bookToEdit ? 'Update' : 'Add'} Book</button>
        </form>
    );
};

export default BookForm;
