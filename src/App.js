
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList from './components/BookList';
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import axios from 'axios'; 
import './App.css'; 

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const [books, setBooks] = useState([]);

    // Fetch books data from backend on component mount
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/books'); 
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    // Function to add item to cart
    const addToCart = (book) => {
        setCart((prevCart) => [...prevCart, book]);
        alert(`${book.title} has been added to your cart!`);
    };

    return (
        <Router>
            <div className="App">
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <BookList 
                                books={books} 
                                searchTerm={searchTerm} 
                                addToCart={addToCart} 
                            />} 
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart cart={cart} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
