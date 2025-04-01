import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="top-swiper">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          speed={600}
          allowTouchMove={false}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="home-auto-scroller">35 years of legacy</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-auto-scroller">Quality assurance</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-auto-scroller">
              flat 33% off on all products (INAUGURAL OFFER)
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <nav className="navbar">
        <button
          type="button"
          className={`hamburger-button ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="cross-icon"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <div className="menu-content">
            <div className="menu-login-item">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 496 512"
                width="24px"
                height="24px"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
              </svg>
              <button onClick={handleLoginClick}>Login</button>
            </div>

            <div className="menu-divider"></div>

            <ul className="menu-list">
              <a href="/Hero">HOME</a>
              <div className="menu-divider"></div>
              <a href="/product">ALL PRODUCTS</a>
              <div className="menu-divider"></div>
              <div className="jod ">
                <li>-JODHPURI</li>
                <div className="menu-divider"></div>
                <li>-KURTA</li>
                <div className="menu-divider"></div>
              </div>

              <li>ABOUT US</li>
              <div className="menu-divider"></div>

              <li>TERMS & CONDITIONS</li>
              <div className="menu-divider"></div>

              <li>PRIVACY POLICY</li>
              <div className="menu-divider"></div>

              <li>CONTACT US</li>
              <div className="menu-divider"></div>
            </ul>

            <div className="navbar-social-media-container">
              <div className="navbar-social-media-inner-div">
                <div className="navbar-social-media-in">
                  <a
                    href="https://www.facebook.com/share/5AbV8V5VJQ6tCDfL/?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                </div>
                <div className="navbar-social-media-in">
                  <a
                    href="https://www.instagram.com/katariashubli?igsh=MWQ1dGtyOTQzeTd3cA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                    >
                      <path d="M18 3h-12c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zm2.2 12h-12c-.6 0-1-.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 .6-.4 1-1 1z" />
                    </svg>
                  </a>
                </div>
                <div className="navbar-social-media-in">
                  <a
                    href="https://wa.me/+919321032490"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </a>
                </div>
                <div className="navbar-social-media-in">
                  <a
                    href="tel:+919321032490"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                    >
                      <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480z" />
                    </svg>
                  </a>
                </div>
                <div className="navbar-social-media-in">
                  <a
                    href="https://in.pinterest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 384 512"
                      height="1em"
                      width="1em"
                    >
                      <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <img src="/logo.png" alt="logo image" className="logo-img" />

        <div className="right-section">
          <div className="auth-dropdown">
            Sign In/Sign Up
            <div className="dropdown-content">
              <div className="dropdown-item">Sign In</div>
              <div className="dropdown-item">Sign Up</div>
            </div>
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            className="cart-icon"
          >
            <path d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55 69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6zM176 144a80 80 0 0 1 160 0v16H176z"></path>
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
