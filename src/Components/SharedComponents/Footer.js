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
                    <a href="https://www.instagram.com/niamul45/"><i class="fab fa-instagram bottom"></i></a>
                    <a href="https://www.linkedin.com/in/niamul-hasan-14ba661b2/"><i class="fa fa-linkedin bottom"></i></a>
                    <a href="https://www.facebook.com/niamul.hasanrony.1"><i class="fab fa-facebook-square bottom"></i></a>
                    <a href="https://twitter.com/NiamulRony"><i class="fab fa-twitter-square bottom"></i></a>
                    <a href="https://www.youtube.com/channel/UClnB0TB4O7_tfKOpx-hSjsQ"><i class="fab fa-youtube bottom"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;