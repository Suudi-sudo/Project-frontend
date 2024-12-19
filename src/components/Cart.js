// src/components/Cart.js
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust path as necessary.
import axios from 'axios';

const Cart = ({ cart }) => {
    const { user } = useContext(AuthContext); // Get user information from context.
    const loggedInUserId = user ? user.id : null; // Assuming user object has an id property.

    const placeOrder = async (bookId) => {
        if (!loggedInUserId) {
            alert("You must be logged in to place an order.");
            return;
        }

        const orderData = {
            user_id: loggedInUserId, 
            book_id: bookId,          
            quantity: 1               
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/orders/', orderData);
            alert("Order placed successfully!");
            console.log("Order response:", response.data); // Log the response for debugging
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Failed to place order. Please try again.");
        }
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} - ${item.price}
                            <button onClick={() => placeOrder(item.id)}>Place Order</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
