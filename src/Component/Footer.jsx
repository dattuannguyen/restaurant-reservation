import React from "react"
import footer from "../assets/images/footer.jpeg";
import facebook from "../assets/images/facebook.png"
import insta from "../assets/images/insta2.png"
import "animate.css"
import { Fade } from "react-awesome-reveal";
const Footer = () =>{
    return(
        <>
            <div>
                <div
                    className="bg-cover h-[700px] flex justify-center items-center "
                    style={{
                        backgroundImage: `linear-gradient(rgba( 0, 0, 0.3), rgba( 0,0, 0, 0.6)), url(${footer})` ,
                    }}
                >

                        <div className="text-white flex justify-center items-center flex-col gap-4">
                            <Fade direction="down" duration={1500}>
                            <h1 className="text-white font-cabinet-grotesk text-3xl">1997.</h1>
                            <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]"> 1997. Restaurant - Vietnamese Street Food</p>
                            <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]">Beilingerstr. 42 , 86316 Friedberg </p>
                            <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]">(+49) 123456789</p>
                            <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]">1997.restaurant@gmail.com</p>
                            <div className="flex  gap-4 pt-6">
                                <img src={facebook} alt="" className="w-12 h-12 bg-white rounded-full"/>
                                <img src={insta} alt="" className="w-12 h-12 bg-white rounded-full"/>
                            </div>
                            </Fade>
                        </div>


                </div>
            </div>
        </>
    )
}

export default Footer