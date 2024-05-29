import React from "react";
import bookingImg from "../../assets/images/booking-hero.jpg";
import {Fade} from "react-awesome-reveal";
import Footer from "../Footer";
const Contact = () =>{
    return(
        <>
            <div>
                <div
                    className="bg-cover h-56 flex flex-row "
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba( 0, 0, 0.5)), url(${bookingImg})` ,
                    }}
                >
                    <div className="flex items-center text-white font-plein text-4xl md:px-14 px-7">
                        <h1>Contact.</h1>
                    </div>
                </div>
                <div className="h-dvh bg-[#020E14] grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2">
                    <Fade direction="left" className="md:p-14 p-7 flex  items-center">
                        <div className="flex flex-col">
                            <h1 className="text-white font-telma text-7xl border-b-4 border-[#911D10] pb-2">Opening hours:</h1>
                            <p className="font-body md:text-2xl text-base text-wrap text-[#D5D5D5] pt-7">Monday to Friday 12:00 am – 11:30 pm</p>
                            <p className="font-body md:text-2xl text-base text-wrap text-[#D5D5D5]">Saturday to Sunday : 11:00 am - 10:00pm</p>
                        </div>
                    </Fade>

                    <div className="flex justify-center items-center bg-[#911D10]">
                        <div className="flex flex-col p-14 border-2 border-[#020E14] rounded-2xl">
                            <h1 className="text-[#020E14] font-cabinet-grotesk text-3xl">1997. Restaurant</h1>
                            <p className="font-body md:text-2xl text-base text-wrap text-[#020E14]">Beilingerstr.42 , 86316 Friedberg</p>
                            <p className="font-body md:text-2xl text-base text-wrap text-[#020E14]">(+49) 123456789</p>
                            <p className="font-body md:text-2xl text-base text-wrap text-[#020E14]">1997.restaurant@gmail.com</p>
                            <br/>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact