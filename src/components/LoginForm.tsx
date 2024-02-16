import React, { FC, useContext, useState } from 'react';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import './LoginForm.css'; // Import the CSS file for styling

const LoginForm: FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { store } = useContext(Context);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogin = async () => {
        try {
            await store.login(username, password);
            navigate('/dashboard'); // Redirect to '/dashboard' after successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="centered-container"> 
            <div className="input-container">
                <input
                    className="input-field"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    placeholder="Username"
                />
            </div>
            <div className="input-container">
                <input
                    className="input-field"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button className="button" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;
