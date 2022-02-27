import React from "react";
import '../Components/HomePage.css';
import HomePageItinerary from "./HomePageItinerary";
import Inclusions from "./Inclusions";
import ReviewCarousel from "./ReviewCarousel";
import WhyTravelogged from "./WhyTravelogged";

const HomePage = () => {
  return (
    <div class="display-container">
      <img className="image w-full absolute brightness-50" src="https://ucarecdn.com/df5853e5-e339-451a-89bb-1c055c9c8095/"></img>
      <div className="nav-container relative">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="flex mt-2 mx-5">
              <button className="flex flex-row gap-2 w-44 pb-2">
                <img className=" w-8 h-8 mt-2.5" src="https://ucarecdn.com/0d8c20e7-1552-4740-a1e0-8d0f96181239/" /><h1 className="mt-2.5 text-white text-2xl">Travelogged</h1></button>
            </div>
            <div>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo03" className="mr-20 mt-2">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
                  <li class="nav-item">
                    <button class="nav-link"><h1 className=" home-btn text-2xl text-white rounded hover:rounded-md transition-all">Home</h1></button>
                  </li>
                  <li class="nav-item">
                    <button class="nav-link"><h1 className="about-btn text-white text-2xl">About</h1></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="image-content flex flex-col justify-center w-65 m-auto pt-2 relative font-serif font-semibold text-white text-center">
        <h1 className="text-6xl stroke-4 ">Travelogged Kedarnath 2022</h1>
        <h2 className="text-3xl mt-5 ">Visit the "SWARG" on Earth- The Mighty Kedarnath Temple this 2022.</h2>
        <h2 className="text-2xl mt-7 ">Book Tickets now to avail 20% off! Limited Seats Remaining!</h2>
        <div className="flex flex-row justify-evenly align-center gap-5 w-96 m-auto pt-20">
          <button className="book-now-btn font-semibold text-xl rounded-full bg-sky-500 px-3 py-2">Book Now</button>
          <button className="book-now-btn font-semibold text-xl rounded-full bg-sky-500 px-3 py-2">Check Itinerary</button>
        </div>
      </div>
      <div className="itinerary-container">
        <HomePageItinerary />
      </div>
      <div className="inclusions-container">
        <Inclusions />
      </div>
      <div className="whytravelogged-container">
        <WhyTravelogged />
      </div>
      <div className="reviewcarousel-container">
        <ReviewCarousel />
      </div>
    </div>

  );
};

export default HomePage;