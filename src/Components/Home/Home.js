import React from 'react';
import { ToastContainer } from 'react-toastify';
import About from '../About/About';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div >
            <ToastContainer />
            <About></About>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;