import React from "react";
import '../Components/SocialMedia.css';

const SocialMedia = () => {
    return(
        <div className="socialmedia-container">
            <div className="headings flex flex-col justify-center w-65 m-auto font-serif text-center">
            <h1 className="text-4xl font-semibold mt-5">Check out our Social Media to know more</h1>
            </div>
            <div className="socialmedia-icons font-serif flex flex-row justify-center gap-5 pt-12 m-auto">
                <div className="flex flex-col">
                    <a className="icons" href="https://www.instagram.com/travelogged.in/?hl=en">
                    <img src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670125.png?token=exp=1645966901~hmac=0c556a7a2d57695bf1f64201b4e295ea"/>
                    </a>
                </div>
                <div className="flex flex-col">
                    <a className="icons" href="https://www.facebook.com/Travelogged.in.India/">
                    <img src="https://cdn-icons.flaticon.com/png/128/1377/premium/1377223.png?token=exp=1645964676~hmac=ebe5af4056b9ac1c07de4e63a469a141"/>
                    </a>
                </div>
                <div className="icons flex flex-col">
                    <a className="icons" href="#">
                    <img src="https://cdn-icons-png.flaticon.com/128/185/185988.png"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;