import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../auth/AuthContext'; // Import your auth context hook
import { Link } from 'react-router-dom';
import './ListMedicine.css'; // Import your CSS file
import PostListItem from './PostListItem'; // Import the PostListItem component
import checkAuth from '../auth/checkAuth';

function ListMedicines() {
    const [medicines, setMedicines] = useState([]);
    const [filteredMedicines, setFilteredMedicines] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState('');
    const { user } = useAuth(); // Retrieve the user token from auth context

    // Function to fetch medicines from the API
    const fetchMedicines = () => {
        if (!user) {
          
            return;
        }

        axios.get('https://medicalstore.mashupstack.com/api/medicine', {
            headers: {
                Authorization: `Bearer ${user.token}` // Use token from auth context
            }
        })
        .then(response => {
            setMedicines(response.data);
            setFilteredMedicines(response.data); // Initialize filteredMedicines with all the fetched medicines
        })
        .catch(error => {
            setError('There was an error fetching the medicines.');
            console.error('Error fetching medicines:', error);
        });
    };

    useEffect(() => {
        fetchMedicines();
    }, [user]);

    // Function to handle search input changes
    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Function to handle search
    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim() === "") {
            setFilteredMedicines(medicines);
        } else {
            const filteredItems = medicines.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredMedicines(filteredItems);
        }
    };

    return (
        <div className="list-medicines-container">
            <h1 className="text-center">List of Medicines</h1>
            {error && <div className="error-message">{error}</div>}
            
            <div className="search-container mb-4">
                <form onSubmit={handleSearch}>
                    <label htmlFor="searchInput">Search Medicine: </label>
                    <input
                        id="searchInput"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                        className="form-control"
                        placeholder="Search by name..."
                    />
                    <button className="btn btn-green mt-2" type="submit">
                        Search
                    </button>
                </form>
            </div>
            
            <div className="add-medicine-container mb-4">
                <Link to="/Actions/medicine/CreateMedicine" className="btn btn-info no-underline">
                    Add Medicine
                </Link>
            </div>
            
            <div className="medicine-list">
                {filteredMedicines.length > 0 ? (
                    filteredMedicines.map((medicine) => (
                        <PostListItem 
                            key={medicine.id}
                            post={medicine}
                            refresh={fetchMedicines} // Pass the fetchMedicines function for refreshing the list
                        />
                    ))
                ) : (
                    <div className="text-center">No medicines found</div>
                )}
            </div>
        </div>
    );
}

export default checkAuth(ListMedicines);
