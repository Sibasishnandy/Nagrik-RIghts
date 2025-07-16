import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const trimmedData = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    message: formData.message.trim()
  };

  try {
    const response = await fetch('http://localhost:5000/feedback_api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log("Received from backend:", data);

    if (response.ok && data.status === 'success') {
      alert(data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Something went wrong: ' + (data.message || 'Unexpected error'));
    }
  } catch (error) {
    console.error('Error during submission:', error);
    alert('Failed to send message. Please try again later.');
  }
};




  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fas fa-balance-scale"></i> Nagrik RIghts
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">Resources</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="container my-5">
        <div className="text-center mb-4">
          <h2>Contact Us</h2>
          <p className="lead">Have questions or suggestions? We'd love to hear from you.</p>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
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
                <label className="form-label">Your Message</label>
                <textarea 
                  className="form-control" 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-map-marker-alt"></i> Reach Us</h5>
                <p><strong>Email:</strong> nagrikrights@gmail.com</p>
                <p><strong>Phone:</strong> +91-6289440897</p>
                <p><strong>Address:</strong> Serampore , West Bengal </p>

                <h6 className="mt-4">Follow us on</h6>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-facebook fa-lg me-3"></i></a>
                  <a href="#"><i className="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#"><i className="fab fa-instagram fa-lg me-3"></i></a>
                  <a href="#"><i className="fab fa-youtube fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Nagrik RIghts</h5>
              <p>Empowering citizens through legal awareness and education</p>
            </div>
            <div className="col-md-4">
              <h5>Important Links</h5>
              <ul className="footer-links">
                <li><a href="#">Ministry of Law & Justice</a></li>
                <li><a href="#">Supreme Court of India</a></li>
                <li><a href="#">National Legal Services Authority</a></li>
                <li><a href="#">e-Courts Services</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Connect With Us</h5>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p>&copy; 2025 Nagrik RIghts. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
