import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle.jsx/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export default function Testimonial() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div  className="mt-20 mb-20">
      <section>
        <SectionTitle
          subheading={"what our client say"}
          heading={"testimonials"}
        ></SectionTitle>
      </section>
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="ml-20 mr-20  flex flex-col items-center space-y-4 ">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <p>{review.details}</p>
                <h3 className="text-3xl uppercase text-center text-yellow-300 mt-3">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
