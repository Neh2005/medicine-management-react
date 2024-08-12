// src/components/Actions/ViewMedicine.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import './ViewMedicine.css'; // Import CSS file for styling if necessary
import checkAuth from '../auth/checkAuth';

function ViewMedicine() {
    const { postId } = useParams(); // Get the medicine ID from the URL
    const [medicine, setMedicine] = useState(null);
    const [error, setError] = useState('');
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            setError('User not authenticated');
            return;
        }

        axios.get(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        .then(response => {
            setMedicine(response.data);
        })
        .catch(error => {
            setError('Error fetching medicine details.');
            console.error('Error fetching medicine:', error);
        });
    }, [postId, user]);

    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="view-medicine-container">
            <div className="view-medicine-card">
                <h1 className="text-center">View Medicine</h1>
                {medicine ? (
                    <div>
                        <div className="form-group">
                            <label>Name:</label>
                            <p>{medicine.name}</p>
                        </div>
                        <div className="form-group">
                            <label>Company:</label>
                            <p>{medicine.company}</p>
                        </div>
                        <div className="form-group">
                            <label>Expiry Date:</label>
                            <p>{medicine.expiry_date}</p>
                        </div>
                        <button className="btn btn-info" onClick={() => navigate('/Actions')}>Back to List</button>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default checkAuth(ViewMedicine);
