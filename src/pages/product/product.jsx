// import React from "react";
// import "./product.css";

// const Product = () => {
//   return (
//     <div>
//       <nav class="breadcrumbs" aria-label="Breadcrumb">
//         <div class="container" bis_skin_checked="1">
//           <ol
//             class="items flex flex-wrap pt-4 pb-4 text-15 text-black leading-18 tracking-tightest"
//             itemtype="https://schema.org/BreadcrumbList"
//           >
//             <li
//               class="item flex home"
//               itemprop="itemListElement"
//               itemtype="https://schema.org/ListItem"
//             >
//               <a
//                 itemtype="https://schema.org/WebPage"
//                 href="/"
//                 itemprop="item"
//                 itemid=""
//                 class="no-underline"
//                 title="Go to Home Page"
//               >
//                 <span itemprop="name">Home</span>
//               </a>
//               <span itemprop="position" content="1"></span>
//             </li>
//             <li
//               class="item flex category2016"
//               itemprop="itemListElement"
//               itemtype="https://schema.org/ListItem"
//             >
//               <span aria-hidden="true" class="text-B2ADAD px-1.5">
//                 /
//               </span>
//               <a
//                 itemtype="https://schema.org/WebPage"
//                 href="/collections/kurta-pajama-for-men"
//                 itemprop="item"
//                 itemid="ethnic.html"
//                 class="no-underline"
//                 title=""
//               >
//                 <span itemprop="name">Product</span>
//               </a>
//               <span itemprop="position" content="2"></span>
//             </li>
//           </ol>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Product;

import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <ol
            className="items flex-wrap pt-4 pb-4 text-15 text-black leading-18 tracking-tightest"
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              className="item flex home"
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <a
                itemType="https://schema.org/WebPage"
                href="/"
                itemProp="item"
                className="no-underline"
                title="Go to Home Page"
              >
                <span itemProp="name">Home</span>
              </a>
              <span itemProp="position" content="1"></span>
            </li>
            <li
              className="item flex category2016"
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <span aria-hidden="true" className="separator">
                /
              </span>
              <a
                itemType="https://schema.org/WebPage"
                href="/collections/kurta-pajama-for-men"
                itemProp="item"
                className="no-underline"
                title=""
              >
                <span itemProp="name">Product</span>
              </a>
              <span itemProp="position" content="2"></span>
            </li>
          </ol>
        </div>
      </nav>

      <section>
        <div class="container">
          <div class="main-product-page">
            <div class="product-page-filter-left">
              <h5>FILTERS</h5>
              <div class="accordion">
                <div class="accordion-item">
                  <hr />
                  <div class="container accordion-header">
                    <button
                      type="button"
                      aria-expanded="false"
                      class="accordion-button collapsed"
                    >
                      <h6 class="accordion-title">Price</h6>
                    </button>
                  </div>
                  <div class="accordion-collapse collapse">
                    <div class="container accordion-body">
                      <div>
                        <div class="ant-slider css-3rel02 ant-slider-horizontal">
                          <div class="ant-slider-rail"></div>
                          <div
                            class="ant-slider-track ant-slider-track-1 ant-slider-track-draggable"
                            style={{ left: 0, width: "100%" }}
                          ></div>
                          <div class="ant-slider-step"></div>
                          <div
                            class="ant-slider-handle ant-slider-handle-1"
                            tabindex="0"
                            role="slider"
                            aria-valuemin="0"
                            aria-valuemax="25000"
                            aria-valuenow="0"
                            aria-orientation="horizontal"
                            style={{
                              left: "0%",
                              transform: "translateX(-50%)",
                            }}
                          ></div>
                          <div
                            class="ant-slider-handle ant-slider-handle-2"
                            tabindex="0"
                            role="slider"
                            aria-valuemin="0"
                            aria-valuemax="25000"
                            aria-valuenow="25000"
                            aria-orientation="horizontal"
                            style={{
                              left: "100%",
                              transform: "translateX(-50%)",
                            }}
                          ></div>
                        </div>
                        <div>Selected Price Range: ₹0 - ₹25000</div>
                        <button class="btn text-center filter-apply-btn mb-2">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <hr />
                  <div class="container accordion-header">
                    <button
                      type="button"
                      aria-expanded="false"
                      class="accordion-button collapsed"
                    >
                      <h6 class="accordion-title">Sub Categories</h6>
                    </button>
                  </div>
                  <div class="accordion-collapse collapse">
                    <div class="container accordion-body">
                      <div class="main-sub-categories-list">
                        <a href="/collections/kurta-pajama-for-men">
                          <span>All Products</span>
                        </a>
                        <a href="/collections/jacket">
                          <span>JODHPURI</span>
                        </a>
                        <a href="/collections/t-shirt">
                          <span>KURTA</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div class="product-page-filter-right">
              <ul class="ant-pagination user-list-pagination css-3rel02">
                <li
                  title="Previous Page"
                  class="ant-pagination-prev ant-pagination-disabled"
                  aria-disabled="true"
                >
                  <button
                    class="ant-pagination-item-link"
                    type="button"
                    tabindex="-1"
                    disabled
                  >
                    <span
                      role="img"
                      aria-label="left"
                      class="anticon anticon-left"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="left"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                      </svg>
                    </span>
                  </button>
                </li>
                <li
                  title="1"
                  class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                  tabindex="0"
                >
                  <a rel="nofollow">1</a>
                </li>
                <li
                  title="2"
                  class="ant-pagination-item ant-pagination-item-2"
                  tabindex="0"
                >
                  <a rel="nofollow">2</a>
                </li>
                <li
                  title="Next Page"
                  class="ant-pagination-next"
                  aria-disabled="false"
                  tabindex="0"
                >
                  <button
                    class="ant-pagination-item-link"
                    type="button"
                    tabindex="-1"
                  >
                    <span
                      role="img"
                      aria-label="right"
                      class="anticon anticon-right"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="right"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div class="product-cart-list-main-product-main-con">
            <h4>Designer Ethnic Wear for The Best Man</h4>
            <p class="designer-ethnic-wear">
              Looking for the perfect outfit for your Yaar Ki Shaadi? We got you
              covered. Kataria's has the best collection of designer ethnic
              men’s wear that will make you look like the most handsome best man
              at your brother’s wedding. Men’s fashion has come a long way in
              the past years. From plain kurtas to fancy silhouettes, men’s
              fashion trends have become more experimental and fun. It is time
              to ditch the boring blacks and blues and jump into a world of
              lively hues this season.
            </p>
            <div class="product-page-details-btn-main-ocn">
              <button>More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
