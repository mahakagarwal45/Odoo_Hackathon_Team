// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered:', form);
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Full Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Register;
