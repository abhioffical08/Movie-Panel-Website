import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // Moved inside the component

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/auth/login', {
                email,
                password,
            });

            // Handle successful login
            setMessage('Login successful!');
            localStorage.setItem('token', response.data.token);
            navigate('/home'); // Navigate to the home page after login

        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed');
        }
    };

    return (
    <div className="glow">

        <div className='login-container'id='glow'>
            <h2>Login</h2>
            <form className='auth-form' onSubmit={handleLogin} >
                <div>
                    <label>Email :</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password :</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='btn' type="submit">Login</button>

                <div className='check'>
                    <input type="checkbox" id="login-check"/>
                    <label> Remember Me</label>
                </div>

                <label className='lab'>
                    Don't have an account? 
                </label>
                <Link to="/register" className="register-link">

                    <button className="btn" id='main'>Register</button>
                </Link>
            </form>
            {message && <p>{message}</p>}
        </div>


 </div>
    );
};

export default Login;
