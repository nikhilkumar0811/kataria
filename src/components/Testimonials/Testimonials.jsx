import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Anita Iyer",
    text: "I’ve been a loyal customer of Katarias for years! Their service is warm and welcoming, and with 40 years of experience, they truly know how to deliver quality. Highly recommended for all your fashion needs!",
  },
  {
    name: "Anjali Rao",
    text: "The selection at Katarias is incredible! Whether I’m looking for a classic suit or stylish shirting, they have it all. The quality is consistently impressive. A must-visit store in Hubballi!",
  },
  {
    name: "Lakshmi Nambiar",
    text: "I love Katarias! Their range of suits and shirts is unbeatable, and the team is always eager to help. It’s my go-to place for stylish outfits and great service!",
  },
  {
    name: "Arvind Shetty",
    text: "I enjoy every visit to Katarias! Their collection of suits and shirts is unbeatable, and the team is always ready to help. It’s a great spot for finding stylish outfits!",
  },
  {
    name: "Karthik Varma",
    text: "I can’t recommend Katarias enough! Their exceptional service makes shopping enjoyable, and their 40 years in business really shows in the quality of their garments. Always a great experience!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <section className="Home-Section-7">
        <div className="container">
          <div className="Home-Section-7-testimonial">
            <Swiper
              className="mySwipertest"
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView="auto"
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000, // Change slide every 3 seconds
                disableOnInteraction: false, // Keep autoplay running after interaction
              }}
              speed={1000} // Adjust speed of transition
              loop={true} // Enables infinite loop
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: "623px",
                    marginRight: "50px",
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div className="testimonials main-home-section-testimonials grid section-padding">
                    <div
                      className="item fadeInUp"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="cont">
                        <p className="playfont">{testimonial.text}</p>
                      </div>
                      <div className="info">
                        <div className="author"></div>
                        <h6>{testimonial.name}</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
