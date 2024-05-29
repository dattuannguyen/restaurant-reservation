import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [checkInTime, setCheckInTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState(1);
    const [telephone, setTelephone] = useState('');


    // Function to handle form submission
    // const handleSubmit = async (e) => {
    async function handleSubmit(e){
        e.preventDefault();
        const webHookURL = 'https://hooks.slack.com/services/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';

        const data = {
            "text": `New Reservation:\nTime: ${checkInTime}\nName: ${name}\nEmail: ${email}\nSeats: ${numberOfSeats}\nTelephone: ${telephone}`
        };

        let res = await axios.post(webHookURL,JSON.stringify(data),{
            withCredentials:false,
            transformRequest: [(data, headers) => {
                // delete headers.post["Content-Type"]
                return data
            }]

        })

        if (res.status === 200){
            alert("success")
        }else {
            alert("fail")
        }
    };

    return (
        <div className="w-full mx-auto mt-8 md:pr-14">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="checkInTime" className="block font-plein text-lg text-[#D5D5D5]">
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
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-2"
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
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-2"
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
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-2"
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
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-2"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        required
                    />
                </div>
                <div className="mt-5">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#911D10] hover:bg-[#806020] hover:text-black"
                    >
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;

