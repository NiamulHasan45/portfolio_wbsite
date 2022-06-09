import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div class="footer-part bg-secondary">
                <h2 className='text-xl m-4'>Md. Niamul Hasan</h2>
                <p className='m-4'>Copyright &copy;2022 influencer products
                </p>
                <p className='m-4'>All right reserved</p>
                <div class="icons m-4">
                    <a href=""><i class="fab fa-instagram bottom"></i></a>
                    <a href=""><i class="fab fa-facebook-square bottom"></i></a>
                    <a href=""><i class="fab fa-twitter-square bottom"></i></a>
                    <a href=""><i class="fab fa-youtube bottom"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;