import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import MoveRightIcon from '../componets/MoveRightIcon';

const Contact = () => {
    const [recruiterDetail, setRecruiterDetail] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

        const templateParams = {
            from_name: recruiterDetail.name,
            from_email: recruiterDetail.email,
            to_name: 'Sunny Mishra',
            message: recruiterDetail.message
        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response)=>{
            alert('Email sent successfully');
            setRecruiterDetail({
                name: '',
                email: '',
                message: ''
            })
            console.log(response.text,' : ', response.status);
        }).catch((error)=>{
            alert('Facing error to reach Sunny');
            console.error(error.text, ' : ',error.status);
        })
    }

    return (
        <section className="flex flex-col md:flex-row items-center justify-center page p-5">

            <div className="md:w-1/2 text-left mb-6 md:mb-0">
                <h1 className="text-6xl md:text-left text-center xl:text-8xl font-bold text-white">Let's <br /> Get <br /> In Touch</h1>
            </div>

            <div className="md:w-2/3 bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={recruiterDetail.name}
                            onChange={(e) => setRecruiterDetail({ ...recruiterDetail, name: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 md:text-sm"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={recruiterDetail.email}
                            onChange={(e) => setRecruiterDetail({ ...recruiterDetail, email: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 md:text-sm"
                            placeholder="Your Email ID"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={recruiterDetail.message}
                            onChange={(e) => setRecruiterDetail({ ...recruiterDetail, message: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 md:text-sm resize-none"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <MoveRightIcon/>
        </section>
    );
}

export default Contact;
