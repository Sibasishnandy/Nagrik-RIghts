import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Namaste! I'm your legal awareness assistant. I can help you understand your constitutional rights and important laws in India in simple language.\n\nYou can:\n- Ask about specific constitutional rights\n- Learn about criminal procedures and rights\n- Get information about civil laws and remedies\n- Understand family laws, consumer rights, and more\n\nHow can I assist you today?`,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat when a new message is added
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSuggestedQuestionClick = (question) => {
    setInputValue(question);
    setTimeout(() => {
      document.getElementById('chat-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const res = await fetch('https://nagrik-rights-basic1.onrender.com/ask_gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputValue })
      });

      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [...prev, { sender: 'bot', text: `Sorry, I could not understand your query. (${data.error})` }]);
      } else {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.response }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error contacting server.' }]);
    } finally {
      setIsTyping(false);
      setInputValue('');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fas fa-balance-scale"></i> Nagrik Rights
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/resources">Resources</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-4">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1>Know Your Legal Rights in India</h1>
            <p className="lead">Ask questions about constitutional rights, laws, and legal procedures in simple language.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div id="sidebar">
              <h5 className="text-center mb-3">Legal Categories</h5>
              <div className="category-list">
                <button className="category-btn active"><i className="fas fa-scroll"></i> Constitutional Rights</button>
                <button className="category-btn"><i className="fas fa-gavel"></i> Criminal Law</button>
                <button className="category-btn"><i className="fas fa-handshake"></i> Civil Law</button>
                <button className="category-btn"><i className="fas fa-users"></i> Family Law</button>
                <button className="category-btn"><i className="fas fa-shopping-cart"></i> Consumer Rights</button>
                <button className="category-btn"><i className="fas fa-briefcase"></i> Labor Laws</button>
                <button className="category-btn"><i className="fas fa-home"></i> Property Laws</button>
                <button className="category-btn"><i className="fas fa-venus"></i> Women's Rights</button>
                <button className="category-btn"><i className="fas fa-info-circle"></i> RTI Act</button>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div id="chat-container">
              <div id="chat-header">
                <h5><i className="fas fa-robot"></i> Legal Assistant</h5>
                {isTyping && <p className="typing-indicator"><span>Legal Assistant is typing...</span></p>}
              </div>

              <div id="chat-box" ref={chatBoxRef}>
                {messages.map((msg, idx) => (
                  <div className={`message ${msg.sender}`} key={idx}>
                    <div className="message-content">
                      {msg.text.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div id="chat-input-area">
                <form id="chat-form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Type your legal question here..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      autoComplete="off"
                    />
                    <button type="submit" className="btn btn-send">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>

                <div className="suggested-questions mt-3">
                  <span className="badge" onClick={() => handleSuggestedQuestionClick("What is the Right to Information Act?")}>What is the Right to Information Act?</span>
                  <span className="badge" onClick={() => handleSuggestedQuestionClick("How to file an FIR?")}>How to file an FIR?</span>
                  <span className="badge" onClick={() => handleSuggestedQuestionClick("Rights during arrest")}>Rights during arrest</span>
                  <span className="badge" onClick={() => handleSuggestedQuestionClick("Consumer protection laws")}>Consumer protection laws</span>
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
              <h5>Nagrik Rights</h5>
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
              <p>&copy; 2025 Nagrik Rights. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
