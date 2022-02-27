import React from "react";
import '../Components/Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content font-serif flex flex-row justify-around gap-10 pt-12 m-auto">
                <div className="flex flex-col">
                    <img className="h-20 w-20 ml-9" src="https://ucarecdn.com/0d8c20e7-1552-4740-a1e0-8d0f96181239/" />
                    <h1 className="text-xl text-center">2022 Travelogged</h1>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold text-center">Company</h1>
                    <ul class="mt-3 gap-2">
                        <li>
                            <button><h1 className=" aboutus-btn text-md">About Us</h1></button>
                        </li>
                        <li>
                            <button><h1 className="blog-btn text-md hover:text-grey-400">Blog</h1></button>
                        </li>
                        <li>
                            <button><h1 className="testimonials-btn text-md hover:text-grey-400">Testimonials</h1></button>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold text-center">Support</h1>
                    <ul class="mt-3 gap-2">
                        <li>
                            <button><h1 className=" aboutus-btn text-md">Contact Us</h1></button>
                        </li>
                        <li>
                            <button><h1 className="blog-btn text-md hover:text-grey-400">Help Center</h1></button>
                        </li>
                    </ul>
                </div>
                <div className="icons flex flex-col">
                    <h1 className="text-2xl font-semibold text-center">Follow Us</h1>
                    <div className="flex flex-row justify-around">
                        <ul class="mt-3 gap-2">
                            <li>
                                <a className="icons" href="https://www.twitter.com">
                                    <img className="h-5 w-5" src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670127.png?token=exp=1645970828~hmac=7391106fa5fa2ce3b1e3669634d7c73c" />
                                </a>
                            </li>
                            <li>
                            <a className="icons" href="https://www.youtube.com">
                                    <img className="h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/185/185983.png" />
                                </a>
                            </li>
                            <li>
                            <a className="icons" href="https://www.linkedin.com">
                                    <img className="h-5 w-5" src="https://cdn-icons.flaticon.com/png/128/1377/premium/1377213.png?token=exp=1645971061~hmac=7b611bfbb38cd79e801faefe85baf0f9" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;