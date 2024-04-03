// Form.js

import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    degree: '',
    section: '',
    phoneNumber: '',
    address: '',
    profilePic: null // Added for profile picture
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'profilePic' ? files[0] : value // Handle profile picture separately
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Roll Number:</label>
          <input type="text" className="form-control" name="rollNumber" value={formData.rollNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Degree:</label>
          <input type="text" className="form-control" name="degree" value={formData.degree} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Section:</label>
          <input type="text" className="form-control" name="section" value={formData.section} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Profile Picture:</label>
          <input type="file" className="form-control-file m-2" name="profilePic" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Form;
