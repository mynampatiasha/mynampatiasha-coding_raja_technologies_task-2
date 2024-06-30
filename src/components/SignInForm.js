import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
 // Replace with your CSS file path

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory(); // Initialize useHistory hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here (e.g., API call to authenticate user)
    console.log('Sign In Data:', formData);
    
    // Assuming sign in is successful and user should be redirected to home page
    history.push('/'); // Redirect to home page after sign in
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
