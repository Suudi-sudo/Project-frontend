
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList from './components/BookList';
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import BookForm from './components/BookForm'; // Import the new form component
import axios from 'axios'; 
import './App.css'; 

const App = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [cart, setCart] = useState([]);
   const [books, setBooks] = useState([]);
   const [bookToEdit, setBookToEdit] = useState(null);

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

   // Function to delete a book
   const deleteBook = async (id) => {
       try {
           await axios.delete(`http://127.0.0.1:8000/books/${id}`);
           setBooks(books.filter(book => book.id !== id));
       } catch (error) {
           console.error("Error deleting book:", error);
       }
   };

   // Function to save changes after adding or updating a book
   const saveBookChanges = async () => {
       try {
           const response = await axios.get('http://127.0.0.1:8000/books');
           setBooks(response.data);
           setBookToEdit(null); // Reset the edit state after saving changes
       } catch (error) {
           console.error("Error fetching updated books:", error);
       }
   };

   return (
       <Router>
           <div className="App">
               <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
               <Routes>
                   <Route 
                       path="/" 
                       element={
                           <>
                            <BookForm bookToEdit={bookToEdit} onSave={saveBookChanges} />
                               <BookList 
                                   books={books} 
                                   searchTerm={searchTerm} 
                                   addToCart={addToCart} 
                                   onDelete={deleteBook} 
                                   onEdit={setBookToEdit}
                               />
                              
                           </>
                       } 
                   />
                   {/* Other routes */}
                   <Route path="/login" element={<Login />} />
                   <Route path="/cart" element={<Cart cart={cart} />} />
               </Routes>
               <Footer />
           </div>
       </Router>
   );
};

export default App;
