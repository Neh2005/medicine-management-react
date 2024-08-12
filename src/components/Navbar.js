import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeUser } from './store/authSlice'; // Ensure the path is correct
import './Navbar.css';

function Navbar() {
    const user = useSelector((store) => store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function logout() {
        if (user) {
            axios.post('https://medicalstore.mashupstack.com/api/logout', {}, {
                headers: { 'Authorization': `Bearer ${user.token}` }
            }).then(() => {
                dispatch(removeUser());
                navigate('/login');
            }).catch(err => {
                console.error('Failed to logout:', err);
                if (err.response && err.response.status === 401) {
                    dispatch(removeUser());
                    navigate('/Login');
                } else {
                    alert('Failed to logout. Please try again.');
                }
            });
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </button>
            <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link to="/Actions" onClick={() => setIsMenuOpen(false)}>Medicine cart</Link></li>
                <li><Link to="/Patientnames" onClick={() => setIsMenuOpen(false)}>Patient Names</Link></li>
                {user ? (
                    <li><span className="nav-link logout" onClick={logout}>Logout</span></li>
                ) : (
                    <>
                        <li><Link to="/Login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                        <li><Link to="/Signup" onClick={() => setIsMenuOpen(false)}>Sign up</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
