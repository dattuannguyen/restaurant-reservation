import React, { useState } from 'react';
import axios from 'axios';
const Form1 = () => {
    const [selectedTime, setSelectedTime] = useState('');
    const [status, setStatus] = useState(null);
    // const [checkInTime, setCheckInTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState(1);
    const [telephone, setTelephone] = useState('');
    const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can handle the form submission, like sending data to the server
        console.log('Form submitted:', {selectedTime, name, email, numberOfSeats, telephone});
        const reservationData = {
            selectedTime,
            name,
            email,
            numberOfSeats,
            telephone,
        };
        const message = {
            text: `New Reservation:\nTime: ${selectedTime}\nName: ${name}\nEmail: ${email}\nSeats: ${numberOfSeats}\nTelephone: ${telephone}`
        };

        try {
            await axios.post(SLACK_WEBHOOK_URL, JSON.stringify(message), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert('Reservation successfully sent to Slack!');
        } catch (error) {
            console.error('Error submitting reservation:', error);
            alert('Failed to send reservation to Slack.');
        }
    }


    const checkAvailability = async (time) => {
        try {
            const response = await fetch(`http://localhost:3002/reservation?time=${time}`);
            return response.status;
        } catch (error) {
            console.error('Error checking availability:', error);
            return null;
        }
    };

    const handleTimeChange = async (event) => {
        const time = event.target.value;
        setSelectedTime(time);

        const availabilityStatus = await checkAvailability(time);
        setStatus(availabilityStatus);
    };


    return (
        <div className="p-14 bg-[#0c0500] h-fit rounded-3xl md:w-[600px] w-fit">
            <h1 className="text-4xl font-bold mb-8 text-white">Make a Reservation</h1>

            <div className="mb-6">
                <label htmlFor="time" className="block text-xl mb-2">Select a time:</label>
                <input
                    type="datetime-local"
                    id="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    className="p-2 border border-gray-300 bg-gray-200 rounded w-full"
                />
            </div>

            {status === 404 && (
                <p className="text-red-500 text-lg">Sorry, we don't have a table available at that time.</p>
            )}

            {status === 200 && (
                <div className="p-4 bg-white shadow-md rounded">
                    <h2 className="text-2xl font-bold mb-4">Reservation Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block font-plein text-lg text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-plein text-lg text-gray-600">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="numberOfSeats" className="block font-plein text-lg text-gray-600">
                                Number of Seats
                            </label>
                            <input
                                type="number"
                                id="numberOfSeats"
                                className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-2"
                                value={numberOfSeats}
                                onChange={(e) => setNumberOfSeats(parseInt(e.target.value))}
                                required
                                min="1"
                            />
                        </div>
                        <div>
                            <label htmlFor="telephone" className="block font-plein text-lg text-gray-600">
                                Telephone Number
                            </label>
                            <input
                                type="tel"
                                id="telephone"
                                className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-2"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-5">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#911D10] hover:bg-[#806020] hover:text-black "
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Form1;
