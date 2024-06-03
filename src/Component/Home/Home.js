import React from "react";
import background2 from "../../assets/images/hero.jpg"
import 'animate.css';
import { Link } from 'react-router-dom';
import {Fade} from "react-awesome-reveal";
import about from "../../assets/images/about-hero.jpeg"
import Footer from "../Footer";

const Home = () =>{
    return (
        <>
            <div className="flex md:flex-row flex-col-reverse gap-5 justify-between bg-[#020E12] h-dvh md:px-14 px-7 ">
                <Fade direction="left" className="flex items-center">
                    <div className="text-white md:w-[720px] w-fit m-4 items-center flex">
                        <div className="flex flex-col">
                            <h1 className="font-telma md:text-7xl text-4xl text-[#D5D5D5]">1997. Restaurant </h1>
                            <br/>
                            <br/>
                            <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]">
                                Experience the vibrant flavors of Vietnamese street food, crafted with high-quality ingredients and a passion for authenticity.
                                At 1997. Restaurant, we bring the bustling streets of Vietnam to your table, offering a culinary journey that delights the senses and honors tradition.
                                Enjoy a taste of Vietnam, elevated to perfection.
                            </p>
                            <br/>
                            <button className="border-2 py-3 rounded-2xl hover:bg-[#911D10] ">
                                <Link to="/reservation" className="font-plein text-lg text-[#D5D5D5]">Reservation</Link>
                            </button>
                        </div>
                    </div>
                </Fade>
                <img src={background2} alt="" className="md:w-1/2 md:h-dvh w-full h-[450px] rounded-3xl"/>
            </div>
            <div className="h-dvh bg-[#020E12] md:px-14 px-7 py-5 grid md:grid-cols-2 grid-cols-1  ">
                <div className=" flex items-center ">
                    <img src={about} alt="" className="md:w-full md:h-[600px] w-full h-[250px] rounded-3xl justify-center flex transform hover:scale-105 transition ease-out duration-700"/>
                </div>
                <div className="text-white w-fit  items-center flex md:m-20">
                    <Fade direction="right">
                        <div className="flex flex-col">
                            <div>
                                <h1 className="text-white font-telma md:text-7xl text-4xl border-b-4 border-[#911D10] pb-2 inline-block">About us </h1>
                            </div>
                            <br/>
                            <br/>
                            <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]">
                                Welcome to 1997. Restaurant! Our passionate team brings the vibrant flavors of Vietnamese street food to your table.
                                Founded by food enthusiasts and tech experts, we focus on <span className="md:text-3xl text-2xl text-[#911D10]">high-quality </span>high-quality ingredients and authentic recipes.
                                Our chefs craft each dish with <span className="md:text-5xl text-3xl font-cabinet-grotesk"> fresh, locally-sourced ingredients </span>, ensuring every bite is delicious and nutritious.
                            </p>

                            <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]">
                                Come to 1997. Restaurant for an unforgettable culinary experience where tradition meets modernity.
                            </p>
                            <br/>
                            <div className="flex justify-between">
                                <p className="flex items-center">-></p>
                                <button className="border-2 py-3 rounded-2xl hover:bg-[#911D10] ">
                                    <Link to="/menu" className="font-plein text-lg text-[#D5D5D5] md:px-32 px-20">Our menu</Link>
                                </button>
                                <p className="flex items-center">{'<-'} </p>
                            </div>
                        </div>

                    </Fade>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Home