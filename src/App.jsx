import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Loginpage from './Loginpage'; // The login component we created
import './Style.css'
function MainWrapper() {
  return <Home/>;
}
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWrapper />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}