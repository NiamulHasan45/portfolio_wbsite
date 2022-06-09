import React from 'react';
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';


const ContactMe = () => {
    const handleSubmit = event => {
        event.preventDefault();

        emailjs.sendForm("service_1hdqdkg", 'template_kaode4p', event.target, 'KfEqiVpfG2g2r4Vbv')
            .then((result) => {
                toast("Sent successfully", result.text);
            }, (error) => {
                console.log("Try again", error.text);
            });
        event.target.reset();
    }
    return (
        <div>
            <h1 className='text-4xl text-accent font-bold'>CONTACT ME</h1>
            <form className='lg:w-1/2 p-20 mx-auto'
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <button
                        className="bg-accent text-black active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                    >
                        Send a message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;