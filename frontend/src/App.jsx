import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Style.css'
import Home from './Home';
import Loginpage from './Loginpage';
import Resources from './Resources';
import Contact from './Contact';
import About from './About';
function MainWrapper() {
  return <Home/>;
}
export default function App() {
  return (
     <Router>
       <Routes>
        <Route path="/" element={<MainWrapper />} />
         <Route path="/login" element={<Loginpage />} />
         <Route path="/resources" element={<Resources />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
       </Routes>
     </Router>
  );
}