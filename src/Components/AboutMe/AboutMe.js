import React from 'react';

const AboutMe = () => {
    return (
        <div id='about'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="../../asset/contact.png" class="max-w-lg rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2 w-full mx-auto'>
                        <h1 class="text-3xl font-bold text-accent">Hi welcome</h1>
                        <p class="py-6">I am Md. Niamul Hasan and I help developing website by many technologies. I’ve alway been passionate about website development and I enjoy helping others to achieve their/your goals. Make sure to check out my recent projects here.
                        </p>
                        <h3 className='text-xl text-yellow-300'><span className='font-bold'>Expertise : </span>MERN stack, Javascript ES6, Firebase Authentication, Heroku, Firebase Hoisting.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;