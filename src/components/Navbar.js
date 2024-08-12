import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeUser } from './store/authSlice'; // Ensure the path is correct
import './Navbar.css';

function Navbar() {
    const user = useSelector((store) => store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout() {
        if (user) {
            axios.post('https://demo-blog.mashupstack.com/api/logout', {}, {
                headers: { 'Authorization': `Bearer ${user.token}` }
            }).then(() => {
                dispatch(removeUser());
                navigate('/login');
            }).catch(err => {
                console.error('Failed to logout:', err);
                if (err.response && err.response.status === 401) {
                    // Token might be invalid or expired, force logout
                    dispatch(removeUser());
                    navigate('/Login');
                } else {
                    alert('Failed to logout. Please try again.');
                }
            });
        }
    }

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Actions">Medicine cart</Link></li>
                <li><Link to="/Patientnames">Patient Names</Link></li>
                {user ? (
                    <>
                        <li><span className="nav-link" onClick={logout}>Logout</span></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/Signup">Sign up</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
