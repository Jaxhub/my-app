import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="App-link">
      <h1>Home Page</h1>
      <p>This is the home page of the application.</p>
      <p>Click on the links below to navigate to the other pages.</p>
      <Link to="/about">About Page</Link>
        <br />
        <br />
      <Link to="/transactions">Transactions</Link>
    </div>
  );
};

export default HomePage;
