import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PostListItem.css'; // Import the CSS file for PostListItem

function PostListItem({ post, refresh }) {
    // Function to delete a post
    const deletePost = () => {
        if (window.confirm('Are you sure you want to delete this medicine?')) {
            axios.delete(`https://medicalstore.mashupstack.com/api/medicine/${post.id}`)
                .then(response => {
                    alert(response.data.message);
                    refresh(); // Refresh the list after deletion
                })
                .catch(error => {
                    alert('There was an error deleting the medicine.');
                    console.error('Error deleting medicine:', error);
                });
        }
    };

    return (
        <div className="post-list-item">
            <div className="post-list-item-header">
                <h6>{post.name}</h6>
            </div>
            <div className="post-list-item-body">
                <p><strong>Company:</strong> {post.company}</p>
                <p><strong>Expiry Date:</strong> {post.expiry_date}</p>
            </div>
            <div className="post-list-item-buttons">
                <Link to={`/Actions/medicine/${post.id}/view`} className="btn btn-info btn-sm">
                    View
                </Link>
                <Link to={`/Actions/medicine/${post.id}/edit`} className="btn btn-warning btn-sm">
                    Edit
                </Link>
                <button
                    onClick={deletePost}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default PostListItem;