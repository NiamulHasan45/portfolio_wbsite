import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="../../asset/niamul.jpg" class="max-w-sm mx-auto rounded-lg shadow-2xl" />
                    {/* <img src="../../asset/niamul.jpg" class="max-w-sm rounded-lg shadow-2xl" /> */}

                    <div className='w-50 p-10'>
                        <div className='flex justify-center'>
                        <h1 class="text-5xl font-bold name-title"> Niamul Hasan</h1>
                        </div>
                        <p class="py-6">Experienced web developer with a strong background in developing website for a diverse clientele.</p>
                        <button className='btn btn-accent text-primary'><a href="https://doc-0k-34-docs.googleusercontent.com/docs/securesc/9qa0r02k030qmelg153j8mavil1ofsq3/ekenghq7abbqa11uiun5e845p4jrdhj7/1654748400000/07835365104291608963/07835365104291608963/1eAAN2da72B6qBNvpAg_4bNHuaybdfHPY?e=download&ax=ACxEAsbafqeEAYggT4zoedZYN5lv1pOKA7n7-oGXLf-MiGMVqoCfgY0-oIb42fJg1gCk7GAeEVZCdf8oVhocib38QTTT_AhYk3xcwCefV7Z1ZZU9UlMa_SnpF4qBsQAa4WcNKEcQSIsgbVs2cEJJHEDGggaLLSIrSW_7Z3tZuTYa6-tAA4Pvlxdi5Fi3TEDbt1InSRfqPHbEkOUJeXQG1dzsE7RZXswzfNaPwQLYwsnhTJKC8igrbWJtFGKFn9_X2aeTRpvplYPLXoT7dLGVcbdRSzSOUmcg-4tcVHrpCcrfe_i-ygizX5UiTGr7-GZOj903braD4_0FDvvQA8HonwSOb-VIzc_2zETvsE-zIwphfsVhGD6griLeklT00gwXkyybKVeb8SNm0asoyM9Y8R9OOmVgegI_hxE2z9YhbVC74cg4ZvBiIvp70tY7DmqsQPpwLjr1ucI9ZGNm8gz45GawMWP5Jj2K2nXDzxBI8jZja0gJmNvieEXIqyyOOMu7Iwh0RCkaytYKRs6Wh7SYu1Xa2_g-8GSOdnSv5K0br1mvIiG3VERxmmh3qWzAZ6B4DPF9ivvN13Q8vGy1zFOOXZpia7GYobwHOCyOrlViUSSBmfI5EQEVPKuAPv-AI6Qmi2R5eHz1HrkdgRqvl-6bQ7OHJWR1fMq4QFRf9jpnns2wwDLqBPAuFBodSpXOPGRqC92HQa4g7gOCzlNMUELrXC6PekS8KioVoCYOOJTXlSvicp4x9QNTJXMtAY5qGQSD69gPWiarL9QwxqH2A-25E4g&authuser=0&nonce=81klld4jcndpe&user=07835365104291608963&hash=fe116g9t20vo5pjgniei1ad37o414o05">Download My Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;