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
                        <button className='btn btn-accent text-primary'><a href="https://doc-0k-34-docs.googleusercontent.com/docs/securesc/9qa0r02k030qmelg153j8mavil1ofsq3/19s00b20ajin7tlcpdf2qsfjofhbbkk4/1655284800000/07835365104291608963/07835365104291608963/1eAAN2da72B6qBNvpAg_4bNHuaybdfHPY?e=download&ax=ACxEAsa29Co-VYESiiCYFrTRe8P6b_M9cvibS9UbcUTPy4qfdZe7Rq61Ey9d1dBtiwcDAHdhH-VkonhC_CGtK5ENcLQdwPfnL30KnlyJEQGq83ZqpAxVuT4gPc1qI7h_aQB8Ldxw4xNDH35-4l2Lp5VhP8hGJ5EEq0r92s06-nInoWDeGursLOzmqjgs55f-2zd4t-C0vzhwxVNL7lpj-T0sklHdA8K6O_rpJdCRp8Svgk3XoR6d5i6m99XnLpZ2XDHg_7p_DcacpK7sK0AjkF2zgjkxTqU24a44Utw2Wv0q-mXTuDa9pMIsIV6LCkH7l0dP48d8b1xqIB0yUed1TDFvdmXSJ03bgidT0kYOi3HdhwaCtzHgdpXbwpdKGqsAYVpz3UDv5IOtrEBe8hGdLHj6FK9ZE41VD8t59_g1olpr2AX2rwnSgRq7U42KsFqzGe_GgrNIIETyJX0mVHWvZ2BnnCqFJD7f5cxdlry8-zpTQL9xOf9wCenntBaLdaIHi48IC34xq09XP4nItCX7xg1Uus7egKqYnO_KbM6xmltgPrTglAlcCUaYZBOwqHQ3MVG8AGn6ug2yfRWXKCPU4sTxrj5n1ILd5LejXJpMTGSu6Pl2dDjCSRAS6Pq1V9cHiL5uwyYmUadt-bKI25GewQ5Ppj3ybKl-gMlmgTUR9--gPAz7jnX4avsRL3RCsE89GNETNWwK_rYd4RQDKTORWMoIlIWnbqxDYzjg2OjMD7jBQsLtzBOkhG5vhouuT390ScssnqS49yfgL1jzRfwGNfg&authuser=0&nonce=valrvnhf9ccfq&user=07835365104291608963&hash=stiegbec1il198117vtl8885qkiv8r9p">Download My Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;