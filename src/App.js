// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreatePost from './components/Actions/CreateMedicine';
import ViewPost from './components/Actions/ViewMedicine';
import EditPost from './components/Actions/EditMedicine';
import ListPosts from './components/Actions/ListMedicine';
import Crud from './components/Actions/Patientnames';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Navbar */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        {/* Routes with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
        path="/Actions/medicine/CreateMedicine"
        element={
        <>
          <Navbar />
          <CreatePost />
        </>
      }
    />
        <Route
        path="/Actions"
        element={
        <>
          <Navbar />
          <ListPosts />
        </>
      }
    />
      <Route
        path="/Actions/medicine/:postId/view"
        element={
        <>
          <Navbar />
          <ViewPost />
        </>
      }
    />
        <Route
        path="/Actions/medicine/:postId/edit"
        element={
        <>
          <Navbar />
          <EditPost />
        </>
      }
    />
        <Route
          path="/Patientnames"
          element={
            <>
              <Navbar />
              <Crud />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
