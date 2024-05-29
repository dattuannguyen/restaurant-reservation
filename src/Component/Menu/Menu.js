import React, { useEffect, useState } from 'react';
import bookingImg from "../../assets/images/booking-hero.jpg";
import {Fade} from "react-awesome-reveal";
import Footer from "../Footer";

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]); // Holds all the menu items fetched from the JSON file.
    const [filteredItems, setFilteredItems] = useState([]); // Holds the menu items filtered by the selected tag.
    const [selectedTag, setSelectedTag] = useState('all'); // Holds the currently selected tag for filtering

    useEffect(() => {
        fetch('/menuItems.json')
            .then((response) => response.json())
            .then((data) => {
                setMenuItems(data);
                setFilteredItems(data);
            })
            .catch((error) => console.error('Error fetching menu items:', error));
    }, []);

    // handleTagClick function updates the selectedTag and filters the menuItems based on the selected tag.
    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        if (tag === 'all') {
            setFilteredItems(menuItems);
        } else {
            setFilteredItems(menuItems.filter(item => item.tags.includes(tag)));
        }
    };

    // tags array is created from the unique tags in menuItems, including an 'all' tag for showing all items.
    const tags = [...new Set(menuItems.flatMap(item => item.tags)), 'all'];

    return (
        <>
            <div>
                <div
                    className="bg-cover h-56 flex flex-row "
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba( 0, 0, 0.5)), url(${bookingImg})` ,
                    }}
                >
                    <div className="flex items-center text-white font-plein text-4xl md:px-14 px-7">
                        <h1>Menu.</h1>
                    </div>
                </div>
            </div>

            <div className="md:p-14 p-4 bg-[#020E14] min-h-screen">
                <h2 className="md:text-7xl text-5xl font-telma mb-6 text-white">Welcome to our 1997. Menu! </h2>
                <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5] mb-8" >Explore our delicious selection of authentic Vietnamese street food, made with the finest ingredients. Take a look and enjoy!</p>
                <div className="flex flex-wrap md:justify-center mb-6">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            className={`px-4 py-2 m-2 rounded ${
                                selectedTag === tag ? 'bg-[#911D10] text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {filteredItems.map((item, index) => (
                        <Fade key={index} >
                            <div className="bg-white p-6 rounded-lg shadow-md hover:cursor-pointer flex flex-col h-full transform hover:scale-105 transition ease-out duration-700">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-2xl font-plein mb-2">{item.name}</h3>
                                    <p className="text-gray-700 font-body text-lg mb-4 flex-grow">{item.description}</p>
                                    <p className="text-lg font-bold">{item.price}</p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Menu;

