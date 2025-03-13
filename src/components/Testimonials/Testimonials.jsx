import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <section class="Home-Section-7">
        <div class="container">
          <div class="Home-Section-7-testimonial">
            <div class="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden">
              <div
                class="swiper-wrapper"
                style={{
                  transitionDuration: "300ms",
                  transform: "translate3d(-673px, 0px, 0px)",
                }}
              >
                <div
                  class="swiper-slide swiper-slide-active"
                  style={{ width: "623px", marginRight: "50px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
