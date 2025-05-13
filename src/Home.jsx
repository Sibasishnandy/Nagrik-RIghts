import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  // Function to handle when a suggested question is clicked
  const handleSuggestedQuestionClick = (question) => {
    setInputValue(question);
  };

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
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
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

      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="intro-section text-center mb-4">
              <h1>Know Your Legal Rights in India</h1>
              <p className="lead">Ask questions about constitutional rights, laws, and legal procedures in simple language.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div id="sidebar">
              <h5 className="text-center mb-3">Legal Categories</h5>
              <div className="category-list">
                <button className="category-btn active" data-category="constitution">
                  <i className="fas fa-scroll"></i> Constitutional Rights
                </button>
                <button className="category-btn" data-category="criminal">
                  <i className="fas fa-gavel"></i> Criminal Law
                </button>
                <button className="category-btn" data-category="civil">
                  <i className="fas fa-handshake"></i> Civil Law
                </button>
                <button className="category-btn" data-category="family">
                  <i className="fas fa-users"></i> Family Law
                </button>
                <button className="category-btn" data-category="consumer">
                  <i className="fas fa-shopping-cart"></i> Consumer Rights
                </button>
                <button className="category-btn" data-category="labor">
                  <i className="fas fa-briefcase"></i> Labor Laws
                </button>
                <button className="category-btn" data-category="property">
                  <i className="fas fa-home"></i> Property Laws
                </button>
                <button className="category-btn" data-category="women">
                  <i className="fas fa-venus"></i> Women's Rights
                </button>
                <button className="category-btn" data-category="rti">
                  <i className="fas fa-info-circle"></i> RTI Act
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div id="chat-container">
              <div id="chat-header">
                <h5><i className="fas fa-robot"></i> Legal Assistant</h5>
                <p className="typing-indicator"><span>Legal Assistant is typing</span></p>
              </div>
              <div id="chat-box">
                <div className="message bot">
                  <div className="message-content">
                    <p>Namaste! I'm your legal awareness assistant. I can help you understand your constitutional rights and important laws in India in simple language.</p>
                    <p>You can:</p>
                    <ul>
                      <li>Ask about specific constitutional rights</li>
                      <li>Learn about criminal procedures and rights</li>
                      <li>Get information about civil laws and remedies</li>
                      <li>Understand family laws, consumer rights, and more</li>
                    </ul>
                    <p>How can I assist you today?</p>
                  </div>
                </div>
                <div className="message user">
                  <div className="message-content">
                    <p>What are my fundamental rights as an Indian citizen?</p>
                  </div>
                </div>
                <div className="message bot">
                  <div className="message-content">
                    <p>The Constitution of India guarantees 6 fundamental rights to all citizens:</p>
                    <ol>
                      <li><strong>Right to Equality (Articles 14-18):</strong> Equality before law, prohibition of discrimination, equal opportunity in public employment.</li>
                      <li><strong>Right to Freedom (Articles 19-22):</strong> Freedom of speech, assembly, movement, etc., with reasonable restrictions.</li>
                      <li><strong>Right against Exploitation (Articles 23-24):</strong> Prohibits trafficking, forced labor, child labor.</li>
                      <li><strong>Right to Freedom of Religion (Articles 25-28):</strong> Freedom to practice and propagate any religion.</li>
                      <li><strong>Cultural and Educational Rights (Articles 29-30):</strong> Protection of minorities, right to establish educational institutions.</li>
                      <li><strong>Right to Constitutional Remedies (Article 32):</strong> Right to approach Supreme Court for enforcement of fundamental rights.</li>
                    </ol>
                    <p>Would you like to know more about any specific right?</p>
                  </div>
                </div>
              </div>
              <div id="chat-input-area">
                <form id="chat-form">
                  <div className="input-group">
                    <input 
                      type="text" 
                      id="message-input" 
                      className="form-control" 
                      placeholder="Type your legal question here..." 
                      autocomplete="off"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)} // Update input field value
                    />
                    <button type="submit" className="btn btn-send">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
                <div className="suggested-questions">
                  <span 
                    className="badge" 
                    onClick={() => handleSuggestedQuestionClick("What is the Right to Information Act?")}
                  >
                    What is the Right to Information Act?
                  </span>
                  <span 
                    className="badge" 
                    onClick={() => handleSuggestedQuestionClick("How to file an FIR?")}
                  >
                    How to file an FIR?
                  </span>
                  <span 
                    className="badge" 
                    onClick={() => handleSuggestedQuestionClick("Rights during arrest")}
                  >
                    Rights during arrest
                  </span>
                  <span 
                    className="badge" 
                    onClick={() => handleSuggestedQuestionClick("Consumer protection laws")}
                  >
                    Consumer protection laws
                  </span>
                </div>
              </div>
            </div>
            
            <div className="disclaimer mt-3">
              <p><i className="fas fa-exclamation-circle"></i> Disclaimer: This chatbot provides general legal information for educational purposes only and should not be considered legal advice. Please consult a qualified lawyer for specific legal issues.</p>
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
              <p className="copyright">&copy; 2025 Nagrik RIghts. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
