import React from "react";
import '../Components/HomePageItinerary.css';
import { BiBus } from "react-icons/bi";

const HomePageItinerary = () => {
    return (
        <div className="itinerary-container">
            <h1 className="flex justify-center font-serif text-4xl font-semibold text-center mb-20"> Kedarnath Itinerary </h1>
            <div>
                <div className="flex flex-col">
                    <div className="day-0 flex flex-row pl-20">
                        <div class="d-flex ">
                            <div class="vr"></div>
                            <BiBus className=" h-10 w-10" />
                        </div>
                        <div className="days-content flex flex-col space-x-7 mr-5">
                            <h1 className="font-serif font-semibold text-3xl ">Day 0 : Departure From Delhi</h1>
                            <ul class="list-disc font-serif text-xl pt-3">
                                <li>We meet at Kaushambi Metro Station in Delhi at 6PM and Start out trip with full zeal and excitement.</li>
                                <li className="pt-2">Pit Stop in between for Dinner (not on us) at around 11 PM.</li>
                            </ul>
                        </div>
                        <img className="img-day-0" src="https://ucarecdn.com/9c55b1b6-f87b-4263-9a55-3bb7de0f9609/" />
                    </div>
                    <div className="day-1 flex flex-row pl-20 pt-20">
                        <div class="d-flex ">
                            <div class="vr"></div>
                            <BiBus className=" h-10 w-10" />
                        </div>
                        <div className="days-content flex flex-col space-x-7 mr-5">
                            <h1 className="font-serif font-semibold text-3xl ">Day 1: Reach Guptkashi</h1>
                            <ul class="list-disc font-serif text-xl pt-3">
                                <li>Approx 14 hours of Journey to Guptkashi, (with multiple pit-stops)</li>
                                <li className="pt-2">We will Reach Guptkashi by noon.</li>
                                <li className="pt-2">On arrival at Guptkashi check-in hotel. Rest of the day at leisure. Overnight stay at hotel </li>
                            </ul>
                        </div>
                        <img className="img-day-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwCSLuCDpWZztf4ZA9XYwK94KFH17XDfJEQ&usqp=CAU" />
                    </div>
                    <div className="day-2 flex flex-row pl-20 pt-20">
                        <div class="d-flex ">
                            <div class="vr"></div>
                            <BiBus className=" h-10 w-10" />
                        </div>
                        <div className="days-content flex flex-col space-x-7 mr-5">
                            <h1 className="font-serif font-semibold text-3xl ">Day 2: Sonprayag-Kedarnath</h1>
                            <ul class="list-disc font-serif text-xl pt-3">
                                <li>Early morning (5 AM) after breakfast check out from the hotel and drive to Sonprayag. From where, you will start your 20 km trek to Kedarnath.</li>
                                <li className="pt-2">On arrival check in at the hotel. Freshen-up and proceed for Darshan. Take part in evening Aarti.</li>
                                <li className="pt-2">Dinner and Overnight at hotel. </li>
                            </ul>
                        </div>
                        <img className="img-day-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3p8NP5q46XwvSRRturJD5KMj5EwY0NAg6A&usqp=CAU"/>
                    </div>
                    <div className="day-3 flex flex-row pl-20 pt-20">
                        <div class="d-flex ">
                            <div class="vr"></div>
                            <BiBus className=" h-10 w-10" />
                        </div>
                        <div className="days-content flex flex-col space-x-7 mr-5">
                            <h1 className="font-serif font-semibold text-3xl ">Day 3 : Kedarnath- Guptkashi</h1>
                            <ul class="list-disc font-serif text-xl pt-3">
                                <li>Wake up early in the morning, freshen up and have breakfast.</li>
                                <li className="pt-2">Visit - Bhairav Temple and start your trek down to Gaurikund.</li>
                                <li className="pt-2">Drive back to Guptkashi.</li>
                                <li className="pt-2">Dinner, Rest and Overnight Stay.</li>
                            </ul>
                        </div>
                        <img className="img-day-0" src="https://ucarecdn.com/532cba91-fa0c-4463-86b2-e1205539f9ee/-/crop/1847x1155/0,0/-/preview/"/>
                    </div>
                    <div className="day-4 flex flex-row pl-20 pt-20">
                        <div class="d-flex ">
                            <div class="vr"></div>
                            <BiBus className=" h-10 w-10" />
                        </div>
                        <div className="days-content flex flex-col space-x-7 mr-5 mb-20">
                            <h1 className="font-serif font-semibold text-3xl ">Day 4 : Return with Happy Memories | Rishikesh</h1>
                            <ul class="list-disc font-serif text-xl pt-3">
                                <li>Wake up early in the morning, freshen up and have breakfast. </li>
                                <li className="pt-2">Start your return Journey to Delhi.</li>
                                <li className="pt-2">Take a stop in mid at Rishikesh. Visit Laxman Jhula, Ram Jhula. Take Part in Evening Ganga Aarti.</li>
                                <li className="pt-2">After that, start your return journey to Delhi.</li>
                            </ul>
                        </div>
                        <img className="img-day-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-YyGPWv3x0voCDsmN9-azR8IvNcpTw6wOg&usqp=CAU"/>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default HomePageItinerary;