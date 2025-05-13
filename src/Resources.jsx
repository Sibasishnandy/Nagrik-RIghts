import React from 'react';
import { Link } from 'react-router-dom';

export default function Resources() {
  return (
    <div>
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
                <a className="nav-link active" href="#">Resources</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-5">
        <div className="text-center mb-4">
          <h2>Legal Resources</h2>
          <p className="lead">Access official legal portals, documents, and awareness guides.</p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-university"></i> Government Portals</h5>
                <ul className="list-unstyled">
                  <li><a href="https://legislative.gov.in" target="_blank" rel="noreferrer">Ministry of Law & Justice</a></li>
                  <li><a href="https://main.sci.gov.in" target="_blank" rel="noreferrer">Supreme Court of India</a></li>
                  <li><a href="https://nalsa.gov.in" target="_blank" rel="noreferrer">National Legal Services Authority (NALSA)</a></li>
                  <li><a href="https://ecourts.gov.in" target="_blank" rel="noreferrer">e-Courts Services</a></li>
                  <li><a href="https://indiacode.nic.in" target="_blank" rel="noreferrer">India Code (All Indian Laws)</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-book"></i> Legal Guides</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Fundamental Rights Handbook (PDF)</a></li>
                  <li><a href="#">Guide to Filing an FIR</a></li>
                  <li><a href="#">Women’s Legal Rights in India</a></li>
                  <li><a href="#">Consumer Protection Act Summary</a></li>
                  <li><a href="#">Steps to Apply for RTI</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-info-circle"></i> Educational Videos & Media</h5>
                <p>We are curating videos and infographics to simplify legal topics for all citizens. Stay tuned!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
