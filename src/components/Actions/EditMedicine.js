import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import './EditMedicine.css'; // Import the CSS file for custom styling
import checkAuth from '../auth/checkAuth';

function EditMedicine() {
    const { postId } = useParams(); // Get the medicine ID from the URL
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { user } = useAuth(); // Retrieve user information from auth context

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
            if (response.status === 200) {
                const medicine = response.data;
                setName(medicine.name || '');
                setCompany(medicine.company || '');
                setExpiryDate(medicine.expiry_date || '');
            } else {
                setError('No data found for this medicine.');
            }
        })
        .catch(error => {
            setError('Error fetching medicine details.');
            console.error('Error fetching medicine:', error);
        });
    }, [postId, user]);

    function updateMedicine() {
        if (!user) {
            setError('User not authenticated');
            return;
        }

        axios.post(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            name: name,
            company: company,
            expiry_date: expiryDate
        }, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        .then(response => {
            if (response.status === 200) {
                navigate('/Actions'); // Redirect to the medicine list page
            } else {
                setError('Failed to update medicine.');
            }
        })
        .catch(error => {
            setError('Error updating medicine.');
            console.error('Error updating medicine:', error);
        });
    }

    return (
        <div className="edit-medicine-container">
            <div className="edit-medicine-card">
                <h1 className="edit-medicine-text-center">Edit Medicine</h1>
                {error && <div className="edit-medicine-error-message">{error}</div>}
                <div className="edit-medicine-form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="edit-medicine-form-control"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="edit-medicine-form-group">
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        className="edit-medicine-form-control"
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                    />
                </div>
                <div className="edit-medicine-form-group">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input
                        type="date"
                        id="expiryDate"
                        className="edit-medicine-form-control"
                        value={expiryDate}
                        onChange={(event) => setExpiryDate(event.target.value)}
                    />
                </div>
                <div className="edit-medicine-form-group text-right">
                    <button className="edit-medicine-btn" onClick={updateMedicine}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default checkAuth(EditMedicine);
