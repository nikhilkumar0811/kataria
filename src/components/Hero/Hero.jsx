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
// import .
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
      {/* next section */}
      <section class="home-section-new-home-category">
        <div class="container">
          <div class="home-section-new-home-details-con-main">
            <div class="home-section-head-main-con">
              <h2>Top Selling Collections</h2>
              <h3>SHOP BY CATEGORY</h3>
            </div>
            <div class="home-section-second-main-new-category-con">
              <div class="row">
                <div class="col-md-3 col-sm-6 col-6">
                  <div class="home-section-second-main-new-category-main-con">
                    <a href="/product-detail-page/zig-zig-embroidery-work-jacket-jodhpuri">
                      <div class="home-section-second-main-new-category-image-con">
                        <img
                          src="../../../public/Jodhpuri.jpeg"
                          alt="Rajputana Sherwani"
                        />
                      </div>
                      <div class="home-section-second-main-new-category-details">
                        <div class="home-section-second-main-new-category-details-con">
                          <h2>Jodhpuri</h2>
                          <h3>
                            <span>Jodhpuri</span>
                          </h3>
                          <div class="home-section-first-main-new-category-con-image-details-btn-con">
                            <button>Shop Now</button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-6">
                  <div class="home-section-second-main-new-category-main-con">
                    <a href="/product-detail-page/black-color-jacket-indowestern-set">
                      <div class="home-section-second-main-new-category-main-con">
                        <div class="home-section-second-main-new-category-image-con">
                          <img src="../../../public/Indowestern.jpeg" />
                        </div>
                        <div class="home-section-second-main-new-category-details">
                          <div class="home-section-second-main-new-category-details-con">
                            <h2>Indowestern</h2>
                            <h3>
                              <span>Indowestern</span>
                            </h3>
                            <div class="home-section-first-main-new-category-con-image-details-btn-con">
                              <button>Shop Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-6">
                  <div class="home-section-second-main-new-category-main-con">
                    <a href="/product/t-shirt">
                      <div class="home-section-second-main-new-category-main-con">
                        <div class="home-section-second-main-new-category-image-con">
                          <img src="../../../public/Kurtapyjama.jpeg" />
                        </div>
                        <div class="home-section-second-main-new-category-details">
                          <div class="home-section-second-main-new-category-details-con">
                            <h2>Kurta Pyjama</h2>
                            <h3>
                              <span>Kurta Pyjama</span>
                            </h3>
                            <div class="home-section-first-main-new-category-con-image-details-btn-con">
                              <button>Shop Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-6">
                  <div class="home-section-second-main-new-category-main-con">
                    <a href="/product-detail-page/teal-blue-color-velvet-kurta-with-long-jacket-set">
                      <div class="home-section-second-main-new-category-main-con">
                        <div class="home-section-second-main-new-category-image-con">
                          <img src="../../../public/Kurtapyjamajacket.jpeg" />
                        </div>
                        <div class="home-section-second-main-new-category-details">
                          <div class="home-section-second-main-new-category-details-con">
                            <h2>Kurta pyjama jacket</h2>
                            <h3>
                              <span>Kurta pyjama jacket</span>
                            </h3>
                            <div class="home-section-first-main-new-category-con-image-details-btn-con">
                              <button>Shop Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rdsection */}
      <section class="mt-2">
        <div class="container">
          <div class="home-section-head-main-con">
            <h3 class="prodcut-head-name">Elevate Your Style</h3>
          </div>
          {/* <div class="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden">
            <div
              class="swiper-wrapper"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                class="swiper-slide swiper-slide-active"
                style={{
                  width: "286.5px",
                  marginRight: "50px",
                }}
              >
                <a href="/product-detail-page/maroon-color-kurta-with-dupatta-daman-embroidery-work">
                  <div class="producct-main-card-body-con">
                    <div class="producct-main-card-body">
                      <div
                        class="main-card-product reletive"
                        style={{
                          backgroundImage:
                            "url('https://skdm.in/server/kataria/api/upload/zz1.avif')",
                          width: "100%",
                          backgroundSize: "cover",
                          margin: "10px 0px",
                          backgroundPosition: "center center",
                        }}
                      ></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}

          <section class="home-section-new-home-category">
            <div class="container">
              <div class="home-section-new-home-details-con-main">
                <div class="home-section-second-main-new-category-con">
                  <div class="row">
                    <div class="col-md-3 col-sm-6 col-6">
                      <div class="home-section-second-main-new-category-main-con">
                        <a href="/product-detail-page/zig-zig-embroidery-work-jacket-jodhpuri">
                          <div class="home-section-second-main-new-category-image-con">
                            <img
                              src="../../../public/Jodhpuri.jpeg"
                              alt="Rajputana Sherwani"
                            />
                          </div>
                          <div class="home-section-second-main-new-category-details">
                            <div class="home-section-second-main-new-category-details-con">
                              {/* <h2>Jodhpuri</h2> */}
                              {/* <h3>
                                <span>Jodhpuri</span>
                              </h3> */}
                              <div class="home-section-first-main-new-category-con-image-details-btn-con">
                                <a class="card-product-shop-now">Shop Now</a>

                                <div class="clothCard-product-deatils-main-con">
                                  <span class="clothCard-product-title">
                                    MAROON COLOR KURTA WITH DUPATTA AND DAMAN
                                    EMBROIDERY WORK.
                                  </span>
                                  <div class="clothCard-product-deatils-main-con-price">
                                    <div class="clothCard-product-deatils-main-con-mainprice">
                                      <label> RS. 6027 INR </label>
                                    </div>
                                    <div class="clothCard-product-deatils-main-con-offerprice">
                                      <label> RS. 8995 INR </label>
                                    </div>
                                  </div>
                                  <div class="clothCard-product-detials-main-con-offer-per">
                                    <h4>(33% OFF)</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6">
                      <div class="home-section-second-main-new-category-main-con">
                        <a href="/product-detail-page/black-color-jacket-indowestern-set">
                          <div class="home-section-second-main-new-category-main-con">
                            <div class="home-section-second-main-new-category-image-con">
                              <img src="../../../public/Indowestern.jpeg" />
                            </div>
                            <div class="home-section-second-main-new-category-details">
                              <div class="home-section-second-main-new-category-details-con">
                                {/* <h2>Indowestern</h2> */}
                                {/* <h3>
                                  <span>Indowestern</span>
                                </h3> */}
                                <div class="home-section-first-main-new-category-con-image-details-btn-con">
                                  <a class="card-product-shop-now">Shop Now</a>
                                  <div class="clothCard-product-deatils-main-con">
                                    <span class="clothCard-product-title">
                                      MAROON COLOR KURTA WITH DUPATTA AND DAMAN
                                      EMBROIDERY WORK.
                                    </span>
                                    <div class="clothCard-product-deatils-main-con-price">
                                      <div class="clothCard-product-deatils-main-con-mainprice">
                                        <label> RS. 6027 INR </label>
                                      </div>
                                      <div class="clothCard-product-deatils-main-con-offerprice">
                                        <label> RS. 8995 INR </label>
                                      </div>
                                    </div>
                                    <div class="clothCard-product-detials-main-con-offer-per">
                                      <h4>(33% OFF)</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6">
                      <div class="home-section-second-main-new-category-main-con">
                        <a href="/product/t-shirt">
                          <div class="home-section-second-main-new-category-main-con">
                            <div class="home-section-second-main-new-category-image-con">
                              <img src="../../../public/Kurtapyjama.jpeg" />
                            </div>
                            <div class="home-section-second-main-new-category-details">
                              <div class="home-section-second-main-new-category-details-con">
                                {/* <h2>Kurta Pyjama</h2> */}
                                {/* <h3>
                                  <span>Kurta Pyjama</span>
                                </h3> */}
                                <div class="home-section-first-main-new-category-con-image-details-btn-con">
                                  <a class="card-product-shop-now">Shop Now</a>
                                  <div class="clothCard-product-deatils-main-con">
                                    <span class="clothCard-product-title">
                                      MAROON COLOR KURTA WITH DUPATTA AND DAMAN
                                      EMBROIDERY WORK.
                                    </span>
                                    <div class="clothCard-product-deatils-main-con-price">
                                      <div class="clothCard-product-deatils-main-con-mainprice">
                                        <label> RS. 6027 INR </label>
                                      </div>
                                      <div class="clothCard-product-deatils-main-con-offerprice">
                                        <label> RS. 8995 INR </label>
                                      </div>
                                    </div>
                                    <div class="clothCard-product-detials-main-con-offer-per">
                                      <h4>(33% OFF)</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6">
                      <div class="home-section-second-main-new-category-main-con">
                        <a href="/product-detail-page/teal-blue-color-velvet-kurta-with-long-jacket-set">
                          <div class="home-section-second-main-new-category-main-con">
                            <div class="home-section-second-main-new-category-image-con">
                              <img src="../../../public/Kurtapyjamajacket.jpeg" />
                            </div>
                            <div class="home-section-second-main-new-category-details">
                              <div class="home-section-second-main-new-category-details-con">
                                {/* <h2>Kurta pyjama jacket</h2> */}
                                {/* <h3>
                                  <span>Kurta pyjama jacket</span>
                                </h3> */}
                                <div class="home-section-first-main-new-category-con-image-details-btn-con">
                                  <a class="card-product-shop-now">Shop Now</a>
                                  <div class="clothCard-product-deatils-main-con">
                                    <span class="clothCard-product-title">
                                      MAROON COLOR KURTA WITH DUPATTA AND DAMAN
                                      EMBROIDERY WORK.
                                    </span>
                                    <div class="clothCard-product-deatils-main-con-price">
                                      <div class="clothCard-product-deatils-main-con-mainprice">
                                        <label> RS. 6027 INR </label>
                                      </div>
                                      <div class="clothCard-product-deatils-main-con-offerprice">
                                        <label> RS. 8995 INR </label>
                                      </div>
                                    </div>
                                    <div class="clothCard-product-detials-main-con-offer-per">
                                      <h4>(33% OFF)</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section class="section-icons-main">
        <div class="container">
          <div class="section-icons-main-details-con">
            <div class="row">
              <div class="col-3">
                <div class="section-icons-details-main-con">
                  <div class="section-icons-details-main-con-images">
                    <div class="section-icons-details-con-images">
                      <img
                        src="/public/free-alteration.png"
                        alt="free_alteration_at_store"
                      />
                    </div>
                  </div>
                  <div class="section-icons-details-info-main-con">
                    <h3>free alteration at store</h3>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="section-icons-details-main-con">
                  <div class="section-icons-details-main-con-images">
                    <div class="section-icons-details-con-images">
                      <img
                        src="/public/premium-quality.png"
                        alt="free_alteration_at_store"
                      />
                    </div>
                  </div>
                  <div class="section-icons-details-info-main-con">
                    <h3>premium quality</h3>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="section-icons-details-main-con">
                  <div class="section-icons-details-main-con-images">
                    <div class="section-icons-details-con-images">
                      <img
                        src="/public/designer-wear-brand.png"
                        alt="free_alteration_at_store"
                      />
                    </div>
                  </div>
                  <div class="section-icons-details-info-main-con">
                    <h3>designer wear brand</h3>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="section-icons-details-main-con">
                  <div class="section-icons-details-main-con-images">
                    <div class="section-icons-details-con-images">
                      <img
                        src="/public/download.png"
                        alt="free_alteration_at_store"
                      />
                    </div>
                  </div>
                  <div class="section-icons-details-info-main-con">
                    <h3>secure payment</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section class="home-section-new-home-category">
          <div class="container">
            <div class="home-section-new-home-details-con-main">
              <div class="home-section-head-main-con">
                <h3>FESTIVE HUES</h3>
              </div>
              <div class="home-section-second-main-new-category-con">
                <div class="row-video d-flex">
                  <div class="col-6-1">
                    <div class="home-section-section-main-con-category-video-main-con">
                      <div class="home-section-section-main-con-category-video-con">
                        <video width="100%" height="auto" loop controls>
                          <source src="/kataria-reel1.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div class="col-6-1">
                    <div class="home-section-section-main-con-category-video-main-con">
                      <div class="home-section-section-main-con-category-video-con">
                        <video width="100%" height="auto" loop controls>
                          <source src="/kataria-reel2.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
{
  /* <a href="/product-detail-page/maroon-color-kurta-with-dupatta-daman-embroidery-work">
                  <div class="producct-main-card-body-con">
                    <div class="producct-main-card-body">
                      <div
                        className="main-card-product relative"
                        style={{
                          backgroundImage: `url("../../../public/Kurtapyjama.jpeg")`,
                          width: "100%",
                          backgroundSize: "cover",
                          margin: "10px 0px",
                          backgroundPosition: "center center",
                        }}
                      >
                        <img src="../../../public/Kurtapyjamajacket.jpeg" />

                        <a class="card-product-shop-now">Shop Now</a>
                        <div class="clothCard-product-deatils-main-con">
                          <span class="clothCard-product-title">
                            MAROON COLOR KURTA WITH DUPATTA AND DAMAN EMBROIDERY
                            WORK.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a> */
}
