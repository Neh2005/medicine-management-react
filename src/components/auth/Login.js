import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import './Login.css'; // Ensure the unique classes are defined here
import { useDispatch } from 'react-redux';
import { setUser } from '../store/authSlice';
import checkGuest from './checkGuest';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    function attemptLogin() {
        axios.post('https://medicalstore.mashupstack.com/api/login', {
            email: email,
            password: password
        }).then(response => {
            setErrorMessage('')
            const user = {
                email: email,
                token: response.data.token
            };
            dispatch(setUser(user));
        }).catch(error => {
            if (error.response.data.errors) {
                setErrorMessage(Object.values(error.response.data.errors).join(' '))
            } else if (error.response.data.message) {
                setErrorMessage(error.response.data.message)
            } else {
                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <div className="login-form">
                    <h1>Login</h1>
                    {errorMessage && <div className="alert-danger">{errorMessage}</div>}
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button 
                            className="login-btn-primary" 
                            onClick={attemptLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkGuest(Login);
