import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import the components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TransactionForm from './components/TransactionForm';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path ="/transactions" element ={<TransactionForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};


export default App;
