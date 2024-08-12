import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; // Import the auth context hook
import './CreateMedicine.css';
import checkAuth from "../auth/checkAuth";

function CreateMedicine() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    // Correctly destructure user from useAuth
    const { user } = useAuth();

    if (!user) {
        return <div>Loading...</div>; // Optionally show a loading state or redirect if user is not authenticated
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!name || !company || !expiryDate) {
            setError('All fields are required');
            return;
        }
        
        axios.post('https://medicalstore.mashupstack.com/api/medicine', {
            name,
            company,
            expiry_date: expiryDate
        }, {
            headers: {
                Authorization: `Bearer ${user.token}` // Use token from auth context
            }
        })
        .then(response => {
            navigate('/Actions'); // Adjust the navigation path as needed
        })
        .catch(error => {
            setError('There was an error creating the medicine.');
            console.error('Error creating medicine:', error);
        });
    }

    return (
        <div className="create-medicine-container">
            <h1 className="text-center">Create New Medicine</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name"
                        type="text" 
                        className="form-control"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input 
                        id="company"
                        type="text" 
                        className="form-control"
                        value={company} 
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input 
                        id="expiryDate"
                        type="date" 
                        className="form-control"
                        value={expiryDate} 
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group text-center">
                    <button
                        type="submit"
                        className="btn-submit"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default checkAuth(CreateMedicine);
