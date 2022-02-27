import React from "react";
import '../Components/WhyTravelogged.css';

const WhyTravelogged = () => {
    return (
        <div className="whytravelogged-container">
            <div className="headings flex flex-col justify-center w-65 m-auto pt-10 font-serif text-center">
                <h1 className="text-4xl font-semibold mt-5">Why Travelogged</h1>
                <h2 className="text-2xl mt-4">Travelogged is new age technology driven Travel Company. We are specialised in Group Departures at affordable prices.</h2>
            </div>
            <div className="flex flex-row justify-evenly gap-5 mt-15 ml-40">
                <div className="flex mt-20">
                    <img className="img-happycustomers ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Dz0qlhhdPWaslZZk9WfzhW3sz-G4MHXvig&usqp=CAU" />
                </div>
                <div className="whytravelogged-icons font-serif flex flex-col gap-5 pt-10">
                    <div className="icons flex flex-row">
                        <img src="https://img.icons8.com/doodle/2x/good-quality-1.png" />
                        <h1 className="text-xl font-semibold text-center">500+ REVIEWS</h1>
                    </div>
                    <div className="icons flex flex-row">
                        <img src="https://img.icons8.com/doodle/2x/ok.png" />
                        <h1 className="text-xl font-semibold text-center"> 120+ GROUP DEPARTURES</h1>
                    </div>
                    <div className="icons flex flex-row">
                        <img src="https://img.icons8.com/doodle/2x/conference-call.png" />
                        <h1 className="text-xl font-semibold text-center"> 2000 + HAPPY TRAVELLERS</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyTravelogged;