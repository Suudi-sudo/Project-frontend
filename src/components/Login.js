
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        try {
            await axios.post('http://127.0.0.1:8000/users', { username, email, password });
            alert("User registered successfully!");
            // Optionally clear form fields or redirect after successful registration
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <div className="login">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Login;
