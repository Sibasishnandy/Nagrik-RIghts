import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
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
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">Resources</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <div className="container my-5">
        <div className="text-center mb-4">
          <h2>About Nagrik RIghts</h2>
          <p className="lead">Empowering citizens through legal knowledge</p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>Our Mission</h4>
            <p>
              Nagrik RIghts aims to bridge the gap between legal language and everyday citizens. Our chatbot and resources help individuals understand their rights and responsibilities under Indian law in a simple and accessible way.
            </p>
            <h4>Our Vision</h4>
            <p>
              A legally aware society where every citizen understands and exercises their rights with confidence, leading to a more informed and empowered India.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <img src="https://img.freepik.com/free-vector/law-justice-concept_23-2148581748.jpg" alt="Legal Awareness" className="img-fluid rounded shadow" />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h4>Our Team</h4>
            <p>
              Nagrik RIghts is built by a passionate group of students and developers who believe in using technology for social good. From legal research to chatbot integration, our team collaborates to ensure the platform is informative, reliable, and user-friendly.
            </p>
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
