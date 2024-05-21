import React, { useState } from 'react';

const Form = () => {
    // State variables to store form data
    const [checkInTime, setCheckInTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState(1);
    const [telephone, setTelephone] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, like sending data to the server
        console.log('Form submitted:', { checkInTime, name, email, numberOfSeats, telephone });
    };

    return (
        <div className="w-full mx-auto mt-8 md:pr-14  ">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="checkInTime" className="block font-plein text-lg text-[#D5D5D5] ">
                        Check-in Time (ISO 8601)
                    </label>
                    <input
                        type="datetime-local"
                        id="checkInTime"
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-2"
                        value={checkInTime}
                        onChange={(e) => setCheckInTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name" className="block font-plein text-lg text-[#D5D5D5]">
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
                    <label htmlFor="email" className="block font-plein text-lg text-[#D5D5D5]">
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
                    <label htmlFor="numberOfSeats" className="block font-plein text-lg text-[#D5D5D5]">
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
                    <label htmlFor="telephone" className="block font-plein text-lg text-[#D5D5D5]">
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
    );
};

export default Form;
