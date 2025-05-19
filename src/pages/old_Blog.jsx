import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <div className="main">
        <div className="hero-bg-color">
          <div className="hero-section position-relative banerbg">
            <NavBar />

            <div className="container mt-5 blogTopContainer position-relative">
              <h1 className="text-white">Blog/Articles</h1>
              <h6 className="text-white my-4">
                We write stuff from time to time that might <br /> be
                interesting
              </h6>

              <div className="d-flex align-items-center gap-3 buttonContainer">
                <div>Blockchain</div>
                <div>Rezor</div>
                <div>Bitcoin</div>
                <div>Crypto</div>
                <div>Blockchain</div>
                <div>Saitama</div>
                <div>Security</div>
                <div>Saitama</div>
                <div>Bitcoin</div>
                <div>News</div>
              </div>
              <div className="blogContainerButton d-none d-sm-block">
                <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between">
                  Explore all
                  <span className="icon">
                    <img
                      src="assets/images/flash-circle.png"
                      className="img-fluid"
                      width="20px"
                      height="20px"
                    />
                  </span>
                </button>
              </div>
              <div className="blogContainerButtonMobile d-block d-sm-none"> 
                  <span className="icon">
                    <img
                      src="assets/images/flash-circle.png"
                      className="img-fluid"
                      width="100%" 
                    />
                  </span> 
              </div>
            </div>
          </div>
        </div>

        <div className="container custom-container">
          <div className="row">
            <div className="rezor_blog_content text-center mt-5 d-lg-none d-block">
              <h2 className="font-geist fw-semibold">Rezor Blog Space</h2>
              <p className="font-geist fw-medium mt-4">A Web3 Knowledge Hub</p>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="assets/images/blog_subtract.png"
                  className="img-fluid blog_img"
                />
                <div className="blog_box">
                  <p className="date font-geist">22 Feb, 2024 | Rezor Blogs</p>
                  <h4 className="font-geist">
                    Everything you need to know about the dynamic world of ...
                  </h4>
                  <p className="font-geist fw-light description_blog mt-4">
                    The onboarding process for the Syfter app was carefully
                    designed to guide users effortlessly into its financial ...
                  </p>
                  <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between mt-5">
                    Know More
                    <span className="icon">
                      <img
                        src="assets/images/unique_products/message-question.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="assets/images/blog_subtract.png"
                  className="img-fluid blog_img"
                />
                <div className="blog_box">
                  <p className="date font-geist">22 Feb, 2024 | Rezor Blogs</p>
                  <h4 className="font-geist">
                    Everything you need to know about the dynamic world of ...
                  </h4>
                  <p className="font-geist fw-light description_blog mt-4">
                    The onboarding process for the Syfter app was carefully
                    designed to guide users effortlessly into its financial ...
                  </p>
                  <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between mt-5">
                    Know More
                    <span className="icon">
                      <img
                        src="assets/images/unique_products/message-question.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="assets/images/blog_subtract.png"
                  className="img-fluid blog_img"
                />
                <div className="blog_box">
                  <p className="date font-geist">22 Feb, 2024 | Rezor Blogs</p>
                  <h4 className="font-geist">
                    Everything you need to know about the dynamic world of ...
                  </h4>
                  <p className="font-geist fw-light description_blog mt-4">
                    The onboarding process for the Syfter app was carefully
                    designed to guide users effortlessly into its financial ...
                  </p>
                  <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between mt-5">
                    Know More
                    <span className="icon">
                      <img
                        src="assets/images/unique_products/message-question.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="assets/images/blog_subtract.png"
                  className="img-fluid blog_img"
                />
                <div className="blog_box">
                  <p className="date font-geist">22 Feb, 2024 | Rezor Blogs</p>
                  <h4 className="font-geist">
                    Everything you need to know about the dynamic world of ...
                  </h4>
                  <p className="font-geist fw-light description_blog mt-4">
                    The onboarding process for the Syfter app was carefully
                    designed to guide users effortlessly into its financial ...
                  </p>
                  <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between mt-5">
                    Know More
                    <span className="icon">
                      <img
                        src="assets/images/unique_products/message-question.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="assets/images/blog_subtract.png"
                  className="img-fluid blog_img"
                />
                <div className="blog_box">
                  <p className="date font-geist">22 Feb, 2024 | Rezor Blogs</p>
                  <h4 className="font-geist">
                    Everything you need to know about the dynamic world of ...
                  </h4>
                  <p className="font-geist fw-light description_blog mt-4">
                    The onboarding process for the Syfter app was carefully
                    designed to guide users effortlessly into its financial ...
                  </p>
                  <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between mt-5">
                    Know More
                    <span className="icon">
                      <img
                        src="assets/images/unique_products/message-question.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="assets/images/blog_subtract.png"
                  className="img-fluid blog_img"
                />
                <div className="blog_box">
                  <p className="date font-geist">22 Feb, 2024 | Rezor Blogs</p>
                  <h4 className="font-geist">
                    Everything you need to know about the dynamic world of ...
                  </h4>
                  <p className="font-geist fw-light description_blog mt-4">
                    The onboarding process for the Syfter app was carefully
                    designed to guide users effortlessly into its financial ...
                  </p>
                  <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between mt-5">
                    Know More
                    <span className="icon">
                      <img
                        src="assets/images/unique_products/message-question.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="assets/images/blog_subtract.png"
                  className="img-fluid blog_img"
                />
                <div className="blog_box">
                  <p className="date font-geist">22 Feb, 2024 | Rezor Blogs</p>
                  <h4 className="font-geist">
                    Everything you need to know about the dynamic world of ...
                  </h4>
                  <p className="font-geist fw-light description_blog mt-4">
                    The onboarding process for the Syfter app was carefully
                    designed to guide users effortlessly into its financial ...
                  </p>
                  <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between mt-5">
                    Know More
                    <span className="icon">
                      <img
                        src="assets/images/unique_products/message-question.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="assets/images/blog_subtract.png"
                  className="img-fluid blog_img"
                />
                <div className="blog_box">
                  <p className="date font-geist">22 Feb, 2024 | Rezor Blogs</p>
                  <h4 className="font-geist">
                    Everything you need to know about the dynamic world of ...
                  </h4>
                  <p className="font-geist fw-light description_blog mt-4">
                    The onboarding process for the Syfter app was carefully
                    designed to guide users effortlessly into its financial ...
                  </p>
                  <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between mt-5">
                    Know More
                    <span className="icon">
                      <img
                        src="assets/images/unique_products/message-question.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="assets/images/blog_subtract.png"
                  className="img-fluid blog_img"
                />
                <div className="blog_box">
                  <p className="date font-geist">22 Feb, 2024 | Rezor Blogs</p>
                  <h4 className="font-geist">
                    Everything you need to know about the dynamic world of ...
                  </h4>
                  <p className="font-geist fw-light description_blog mt-4">
                    The onboarding process for the Syfter app was carefully
                    designed to guide users effortlessly into its financial ...
                  </p>
                  <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between mt-5">
                    Know More
                    <span className="icon">
                      <img
                        src="assets/images/unique_products/message-question.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-3 justify-content-center align-items-center paginationContainer">
          <div className="  activePage"> 1</div>
          <div className="  "> 2</div>
          <div className=" nextPageContainer ">
            <p className="m-0 p-0">Next</p>
            <img
              src="assets/images/nextPage.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
