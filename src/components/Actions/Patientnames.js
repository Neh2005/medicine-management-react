import React, { useState } from 'react';
import './Patientnames.css';
import checkAuth from '../auth/checkAuth';

function Crud() {
    const [items, setItems] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "David" },
        { id: 3, name: "William" }
    ]);

    const [itemName, setItemName] = useState("");
    const [editId, setEditId] = useState(null);

    const handleInputChange = (event) => {
        setItemName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editId) {
            // Edit existing item
            setItems(items.map(item =>
                item.id === editId ? { ...item, name: itemName } : item
            ));
            setEditId(null);
        } else {
            // Add new item
            const newItem = {
                id: items.length + 1,
                name: itemName
            };
            setItems([...items, newItem]);
        }
        setItemName("");
    };

    const handleEdit = (id, name) => {
        setEditId(id);
        setItemName(name);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    return (
        <div className="crud-container">
            <div className="form-container">
                <h2>{editId ? 'Edit Patient' : 'Add Patient'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Enter Name</label>
                    <input 
                        type="text" 
                        value={itemName} 
                        onChange={handleInputChange} 
                        placeholder="Patient name..."
                    />
                    <button 
                        className="crud-btn crud-btn-success" 
                        type="submit"
                    >
                        {editId ? 'Update' : 'Add'}
                    </button>
                </form>
            </div>
            
            <div className="table-container">
                <table className="crud-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? (
                            items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button 
                                            className="crud-btn crud-btn-primary" 
                                            onClick={() => handleEdit(item.id, item.name)}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            className="crud-btn crud-btn-danger" 
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">No patients found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default checkAuth(Crud);
