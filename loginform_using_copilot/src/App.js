import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    timestamp: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    const data = { ...formData, timestamp };
    // Store data in JSON file (you can use an API call or local storage)
    console.log(data);
    setFormSubmitted(true);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormSuccess(false);
    }, 5000);
  };

  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormFieldChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormFieldChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleFormFieldChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {formSubmitted && (
        <div className={`toast ${formSuccess ? 'success' : 'failure'}`}>
          {formSuccess ? 'Form submitted successfully!' : 'Form submission failed!'}
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th hidden>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.email}</td>
            <td>{formData.password}</td>
            <td>{formData.timestamp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;