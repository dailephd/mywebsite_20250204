"use client";
import { useState } from 'react';

export default function SendEmailPage() {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = () => {
        setSubject('');
        setEmail('');
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ subject, email, message }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                handleReset();
            } else {
                alert(data.error || 'Failed to send email. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 animate-fadeIn">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
                <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Contact Me</h3>
                <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter subject"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your message"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="reset"
                            className="bg-gray-500 hover:bg-gray-700 text-white text-xl font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
