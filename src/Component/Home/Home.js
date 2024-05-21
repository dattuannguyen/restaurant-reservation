import React from "react";
import background2 from "../../assets/images/hero.jpg"
import 'animate.css';
import { Link } from 'react-router-dom';
import {Fade} from "react-awesome-reveal";

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
        </>
    );
}

export default Home