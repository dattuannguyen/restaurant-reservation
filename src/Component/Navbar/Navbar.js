import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" relative bg-[#020E14] w-full text-white md:px-14 md:py-5 px-7 py-5">
            <div className=" flex justify-between items-center w-full">
                <a href='/' className="text-white font-cabinet-grotesk text-5xl cursor-pointer ">1997.</a>
                <div className="hidden md:flex  flex-row gap-20  space-x-4">
                    <Link to="/" className="font-plein text-lg text-[#D5D5D5] hover:text-white  active:text-white focus:text-white">Home</Link>
                    <Link to="/menu" className="font-plein text-lg text-[#D5D5D5] hover:text-white  active:text-white focus:text-white">Menu</Link>
                    <Link to="/reservation" className="font-plein text-lg text-[#D5D5D5] hover:text-white active:text-white focus:text-white">Reservation</Link>
                    <Link to="/contact" className="font-plein text-lg text-[#D5D5D5] hover:text-white focus:text-white">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <Link to="/" className="block px-2 py-2 text-lg text-[#D5D5D5] hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/menu" className="block px-2 py-2 text-lg text-[#D5D5D5] hover:text-white" onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link to="/reservation" className="block px-2 py-2 text-lg text-[#D5D5D5] hover:text-white" onClick={() => setIsOpen(false)}>Reservation</Link>
                    <Link to="/contact" className="block px-2 py-2 text-lg text-[#D5D5D5] hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
