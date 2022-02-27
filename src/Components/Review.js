import React from "react";
import '../Components/Review.css';

const Review = () => {
    return (
        <div className="review-container">
            <img className="bg-image absolute w-full" src="https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            <div className="headings flex flex-col justify-center w-65 m-auto font-serif text-center relative">
                <h1 className="text-3xl font-semibold mt-20">Some of the reviews from our happy customers</h1>
            </div>
            <div className="flex flex-row justify-center gap-10 relative">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text font-serif pt-20">I visited Manali with Travelogged and God it was wonderful. It was my first solo trip with them. In this Budget, this level of service was unbeliveable. It would have happily paid double for it!!</p>
                        <h2 className="flex flex-start pt-20">-@parularora0922</h2>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <p class="card-text font-serif pt-10">It was indeed one of the most wonderful experiences having my first trip with travelogged.in. Kedarnath was never that easy but these Guys made sure that we enjoy every each bit of it. Their Management and facilities were good. I would highly recommend and of course I am planning to travel with them super soon.</p>
                        <h2 className="flex flex-start pt-3">-@anmolhanss</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;