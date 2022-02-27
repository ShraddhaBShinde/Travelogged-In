import React from "react";
import '../Components/Inclusions.css';

const Inclusions = () => {
    return(
        <div className="inclusions-container">
            <div className="headings flex flex-col justify-center w-65 m-auto font-serif text-center">
            <h1 className="text-4xl font-semibold mt-5">Inclusions</h1>
            <h2 className="text-2xl mt-4">We include everything in our plans which you might need while travelling!</h2>
            </div>
            <div className="inclusions-icons font-serif flex flex-row justify-between gap-10 pt-12 m-auto">
                <div className="icons flex flex-col">
                    <img src="https://img.icons8.com/doodle/2x/bus--v1.png"/>
                    <h1 className="text-xl font-semibold text-center">Transportation</h1>
                </div>
                <div className="icons flex flex-col">
                    <img src="https://img.icons8.com/doodle/344/tableware.png"/>
                    <h1 className="text-xl font-semibold text-center">Meals</h1>
                </div>
                <div className="icons flex flex-col">
                    <img src="https://img.icons8.com/doodle/2x/building.png"/>
                    <h1 className="text-xl font-semibold text-center">Stay</h1>
                </div>
                <div className="icons flex flex-col">
                    <img src="https://img.icons8.com/doodle/2x/where-to-quest.png"/>
                    <h1 className="text-xl font-semibold text-center">Tour Guide</h1>
                </div>
            </div>
            <button className="flex justify-center w-64 m-auto text-white font-semibold text-xl rounded-full bg-sky-500 px-3 py-2 shadow-lg">Download Itinerary</button>
        </div>
    )
}

export default Inclusions;