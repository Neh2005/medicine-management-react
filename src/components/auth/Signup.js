import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import './Signup.css'; // Import the CSS file

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function registerUser() {
        const user = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConf
        }
        axios.post('https://medicalstore.mashupstack.com/api/register', user)
            .then(response => {
                setErrorMessage('');
                navigate('/');
            })
            .catch(error => {
                if (error.response.data.errors) {
                    setErrorMessage(Object.values(error.response.data.errors).join(' '));
                } else {
                    setErrorMessage('Failed to connect to api');
                }
            });
    }

    return (
        <div>
            <Navbar />
            <div className="register-container">
                <div className="register-form">
                    <h1>Register</h1>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
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
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={passwordConf}
                            onChange={(event) => setPasswordConf(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            className="register-btn-primary float-right"
                            onClick={registerUser}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
