// import React from "react";
// import "./Hero.css";

// const Hero = () => {
//   return (
//     <div className="hero">
//       <h2>Top Selling Collections</h2>
//       <h3>SHOP BY CATEGORY</h3>
//       <div className="hero-cards">{/* Add Category Cards here */}</div>
//     </div>
//   );
// };

// export default Hero;
// import
import React, { useEffect } from "react";
import "./Hero.css";
// import
const Hero = () => {
  useEffect(() => {
    let isMuted = false;
    const soundToggle = document.getElementById("soundToggle");
    const soundIcon = document.getElementById("soundIcon");

    const toggleSound = () => {
      isMuted = !isMuted;
      soundIcon.src = isMuted ? "mute-icon.png" : "unmute-icon.png";
      // Code to mute/unmute music goes here
    };

    soundToggle.addEventListener("click", toggleSound);

    return () => {
      soundToggle.removeEventListener("click", toggleSound);
    };
  }, []);

  return (
    // <div className="hero-section">
    <div className="content">
      <div class="audio">
        <audio>
          <source src="../../../public/demo.mp3" type="audio/mpeg"></source>
        </audio>
        <button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M264 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75 .66-.51A24 24 0 0 1 288 119.83v272.34a24 24 0 0 1-24 24zM352 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 352 336z"></path>
            <path d="M400 384a16 16 0 0 1-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 0 1 413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 0 1-13.88 8z"></path>
          </svg>
        </button>
      </div>

      <section class="new-home-banner-section">
        {/* <a href="/collections/kurta-pajama-for-men"> */}

        <div class="new-home-banner-main-con">
          <div class="new-home-banner-main-con-text-main-con">
            <h2>Katarias</h2>
            <h3>Now Live</h3>
            <div class="new-home-banner-main-con-text-para-main-con">
              <p>Explore the widest range</p>
              <p>of collection</p>
            </div>
            <div class="new-home-banner-main-con-btn-main-con">
              <button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"
                  ></path>
                </svg>{" "}
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        {/* </a> */}
      </section>
      {/* </div> */}

      <div className="sound-logo">
        <button id="soundToggle"></button>
      </div>
    </div>
  );
};

export default Hero;
