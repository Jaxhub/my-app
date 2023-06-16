import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This app is still in work in progress because of how busy I've been.</p>
            <p>The app can one create transactions and display them to the user.</p>
            <p>But I was not able to save the transactions.</p>
            <p>So I could not get to add any functionality to sort the data or delete it.</p>
            <p>But I will get to it eventually and I am very sorry for the barebones look.</p>
            <p>Normally I like to add some colors or pictures for the application</p>
            <br />
            <Link to="/">Home Page</Link>
        </div>
    );
}

export default AboutPage;