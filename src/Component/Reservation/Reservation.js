import React from "react";
import bookingImg from "../../assets/images/booking-hero.jpg"
import {Home} from "lucide-react"
import Form from "../Form";
import Form1 from "../Form1"
import Footer from "../Footer";
import 'animate.css';
import {Fade} from "react-awesome-reveal";

const Reservation = () =>{
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
                         <h1>Reservation.</h1>
                     </div>
                </div>
                <div className="h-dvh bg-[#0c0500] md:px-14 px-7 py-5 md:py-14 flex md:flex-row flex-col w-full justify-between ">
                    {/*left side of the reservation*/}
                    <Fade direction="left" className="text-white md:w-1/3  flex md:items-center">
                        <div>
                            <h1 className='font-cabinet-grotesk md:text-5xl text-3xl'>Reserve Your Table Today!</h1>
                            <br/>
                            <br/>
                            <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]">
                                Experience the authentic flavors of Vietnamese street food at 1997. Restaurant. Secure your spot now for an unforgettable dining experience.
                                Whether it's a special occasion or a casual meal, we invite you to book a table and savor the best of our cuisine.
                                Don't wait – make your reservation today!
                            </p>
                            <br/>
                            <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]">
                                Reserve a table at 1997. Restaurant by phone or online with us. We look forward to seeing you!
                            </p>
                            <br/>
                            <div className="flex gap-4">
                                <Home/>
                                <p className="font-body md:text-lg text-base text-wrap text-[#D5D5D5]">Restaurant: +49 123456789</p>
                            </div>
                        </div>
                    </Fade>
                    {/*right side of the reservation*/}
                    <div className="flex">
                        <div className=" relative items-center flex md:max-w-[700px] w-[800px]  justify-center  animate__animated animate__slideInUp">
                            <Form/>
                            {/*<Form1/>*/}
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Reservation