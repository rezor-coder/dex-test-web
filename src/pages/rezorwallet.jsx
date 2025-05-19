import React, { useState } from "react";

import Walletnavbar from '../components/Walletnavbar';
import Footer from "../components/Footer";
import SbForm from "../components/Forms/SubscribeForm";

import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";


const RezorWallet = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [status, setStatus] = useState({ status: "", msg: "" });
  const [loading, setLoading] = useState("");

  const [activeIndex, setActiveIndex] = useState(1);

  const setActive = (index) => {
    setActiveIndex(index);
  };

  // const handleFormSubmit = (data) => {
  //   console.log("Form Data Submitted:", data);
  // };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.email != "") {
      setLoading(true);
    }
    const url =
      "https://gmteoqbjt5.execute-api.us-east-1.amazonaws.com" +
      "/src/server/V1/emailSubsription";
    try {
      const response = await axios
        .post(url, formData, {
          headers: { "Content-Type": "application/json" },
        })
        .finally(() => {
          setLoading(false);
        });

      console.log("response");
      console.log(response.data);
      setStatus({ status: response?.data?.status, msg: response?.data?.msg });
      setFormData({ email: "" });

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ status: undefined, msg: error.response.data.msg });
    }

  };


  return (
    <>
      <div className="main-wrapper">
        <div className="crypto-app-div pt-lg-3 ps-lg-3 pe-lg-3 pt-0 pt-md-3  pb-0">
          <div className="container navbar-container px-0">
            {/* <Walletnavbar /> */}
            <NavBar />
          </div>

          <div className="container main-container crypto-div-container mt-3">
            <div className="crypto-app-bg rounded-4 position-relative text-center text-lg-start">
              <div className="background-vector"></div>
              <div className="row">
                <div className="col-lg-10 crypto-col">
                  <h2 className="primary-font fw-semibold h2_crypto">
                    The <span>Only Crypto App</span>
                    <br />
                    You’ll Need.
                  </h2>
                  <p className="primary-font paragraph mt-4">
                    Supercharge your crypto experience with Rezor Wallet!
                  </p>
                  <a href="https://play.google.com/store/apps/details?id=com.rezor" className='btn-download' target="_blank">
                    <button
                      type="button"

                      className="download_button bg-transparent fw-bold primary-font d-flex rounded-3 align-items-center justify-content-between px-4 py-3 mx-auto mx-lg-0"
                    >
                      Download{" "}
                      <img
                        src="/assets/images/RezorWalletImages/first-section/arrow-down.svg"
                        className="img-fluid"
                        alt="arrow-down"
                      />{" "}
                    </button>
                  </a>
                </div>
                <div className="col-lg-4"></div>
              </div>
              <div className="wallet-hand">
                <img
                  src="/assets/images/RezorWalletImages/first-section/swap_element_2_1.png"
                  className="img-fluid"
                  alt="wallet-hand"
                />
              </div>
              <div className="scan-code">
                <img
                  src="/assets/images/RezorWalletImages/first-section/scan-code-ipad.png"
                  className="img-fluid"
                  alt="Scan Code"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container section-container">
          <div className="rezor-wallet position-relative">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-5 col-xl-4 col-10 col-sm-8 pe-0">
                <h1 className="primary-font fw-semibold discover_h1">
                  <span className="gradient-text">Discover</span>
                  <img
                    src="/assets/images/RezorWalletImages/second-section/stars.svg"
                    alt="Sparkle Icon"
                    className="sparkle-icon ms-2"
                  />
                  <br />
                  Rezor Wallet
                </h1>
              </div>
              <div className="col-md-5 col-lg-6 col-xl-7 ps-xl-5 col-2 col-sm-4 p-0">
                <div className="gradient-line"></div>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="rezor-wallet-box mt-lg-5 text-center text-sm-start">
                  <h4 className="primary-font fw-medium wallet-box-h2">
                    Complete Funds
                    <br /> Control
                  </h4>
                  <p className="primary-font wallet-box-p mt-3">
                    Rezor wallet non-custodial wallet
                    <br /> ensures that you always remain
                    <br /> in control of your funds.
                  </p>
                  <div className="box-icon mt-4 icon_1_wallet">
                    <img
                      src="/assets/images/RezorWalletImages/second-section/wallet_box_1.svg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="rezor-wallet-box mt-lg-5 text-center text-sm-start">
                  <h4 className="primary-font fw-medium wallet-box-h2">
                    Uninterrupted
                    <br /> Swapping
                  </h4>
                  <p className="primary-font wallet-box-p mt-3">
                    Utilize Rezor Swap to seamlessly
                    <br /> swap a variety of cryptocurrencies
                    <br /> without intermediaries.
                  </p>
                  <div className="box-icon mt-4 icon_2_wallet">
                    <img
                      src="/assets/images/RezorWalletImages/second-section/wallet_box_new_2.svg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="rezor-wallet-box mt-lg-5 text-center text-sm-start">
                  <h4 className="primary-font fw-medium wallet-box-h2">
                    Simplified Daily
                    <br /> Spending
                  </h4>
                  <p className="primary-font wallet-box-p mt-3">
                    Make everyday transactions using
                    <br /> crypto with the virtual SaitaCard- a<br /> crypto
                    debit card integrated.
                  </p>
                  <div className="box-icon mt-4 icon_3_wallet">
                    <img
                      src="/assets/images/RezorWalletImages/second-section/wallet_box_3.svg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div> */}

              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="rezor-wallet-box mt-lg-5 text-center text-sm-start">
                  <h4 className="primary-font fw-medium wallet-box-h2">
                    Streamlined Crypto
                    <br /> Trading
                  </h4>
                  <p className="primary-font wallet-box-p mt-3">
                    Trade cryptocurrencies effortlessly with Rezor
                    <br /> Wallet’s user-friendly interface, ensuring a<br />{" "}
                    hassle-free trading experience.
                  </p>
                  <div className="box-icon mt-4 icon_4_wallet">
                    <img
                      src="/assets/images/RezorWalletImages/second-section/wallet_box_new_3.svg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="rezor-wallet-box wallet-margin  text-center text-sm-start">
                  <h4 className="primary-font fw-medium wallet-box-h2">
                    Effortless Digital
                    <br /> Transfers
                  </h4>
                  <p className="primary-font wallet-box-p mt-3">
                    Send and receive digital
                    <br /> currencies effortlessly in just a<br /> few simple
                    steps.
                  </p>
                  <div className="box-icon mt-4 icon_5_wallet">
                    <img
                      src="/assets/images/RezorWalletImages/second-section/wallet_box_new_4.svg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 col-lg-4 col-sm-6 d-sm-flex d-none stars_col_image">
                <img
                  src="/assets/images/RezorWalletImages/second-section/stars-2_mobile.svg"
                  className="img-fluid"
                  alt="Stars"
                />
              </div> */}
            </div>

            <div className="stars_img position-absolute">
              <img
                src="/assets/images/RezorWalletImages/second-section/stars-2.svg"
                className="img-fluid"
                alt="Stars"
              />
            </div>
          </div>
        </div>

        <div className="container section-container">
          <div className="get-started marg-1em">
            <div className="row align-items-center">
              <div className="col-lg-6 ps-lg-0">
                <div className="get-started-img text-center text-lg-start">
                  <img
                    src="/assets/images/RezorWalletImages/third-section/get_started_new_desktop.svg"
                    className="img-fluid"
                    alt="Get Started"
                  />
                </div>
              </div>
              <div className="col-lg-6 ps-lg-4 ps-xl-5">
                <h1 className="primary-font fw-semibold get_started_h1">
                  Get started
                  <br />
                  <span className="gradient-text-today">Today!</span>
                </h1>
                <div className="ul-list-get-started">
                  <ul className="">
                    <li className="primary-font mb-3">
                      Download the app Rezor Wallet on Android.
                    </li>
                    <li className="primary-font mb-3">
                      Allow notifications to stay updated with the app.
                    </li>
                    <li className="primary-font mb-3">
                      Create a non-custodial wallet or import an existing one
                      using your security phrase.
                    </li>
                    <li className="primary-font mb-3">
                      Select your preferred language.
                    </li>
                    <li className="primary-font">
                      And start exploring the ease of crypto!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container section-container">
          <div className="digital-transfers">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators mx-md-3 me-sm-0 me-lg-1 me-2 justify-content-end mb-0">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  className="slide-2"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/assets/images/RezorWalletImages/fouth-section/transfers.svg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption text-center">
                    <h2 className="fw-bold primary-font mb-0 carousel_caption_h2">
                      From seamless <br />
                      digital transfers
                    </h2>
                    <h2 className="fw-semibold primary-font mb-0 carousel_caption_h2">
                      to your favorite
                      <br />{" "}
                      trading coins,
                    </h2>
                    <h1 className="fw-semibold primary-font mb-0 carousel_caption_h1">
                      it’s all here!
                    </h1>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/RezorWalletImages/fouth-section/transfers.svg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption text-center">
                    <h2 className="fw-bold primary-font mb-0 carousel_caption_h2">
                      From seamless <br />
                      digital transfers
                    </h2>
                    <h2 className="fw-semibold primary-font mb-0 carousel_caption_h2">
                      to your favorite{" "}
                      <br />
                      trading coins,
                    </h2>
                    <h1 className="fw-semibold primary-font mb-0 carousel_caption_h1">
                      it’s all here!
                    </h1>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/RezorWalletImages/fouth-section/transfers.svg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption text-center">
                    <h2 className="fw-bold primary-font mb-0 carousel_caption_h2">
                      From seamless
                      <br /> digital transfers
                    </h2>
                    <h2 className="fw-semibold primary-font mb-0 carousel_caption_h2">
                      to your favorite{" "}
                      <br />
                      trading coins,
                    </h2>
                    <h1 className="fw-semibold primary-font mb-0 carousel_caption_h1">
                      it’s all here!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container section-container">
          <div className="begin-crypto">
            <div className="row align-items-lg-center flex-column-reverse flex-lg-row">
              <div className="col-lg-6 text-center text-lg-start">
                <h3 className="begin-crypto-h3 primary-font fw-semibold">
                  Begin your crypto experience.
                </h3>
                <h1 className="begin-crypto-h1 primary-font fw-semibold">
                  With a touch of brilliance.
                </h1>
                <p className="primary-font fw-medium color-paragraph mt-xl-5 mt-4">
                  Experience protection unlike anywhere else with
                  <br /> multiple layers of security and native biometric
                  reading.
                </p>
                <p className="primary-font fw-medium color-paragraph mt-lg-4 mt-3 pb-4 pb-lg-0">
                  Your search for the perfect crypto app ends here. From
                  <br /> trading crypto, instant transfers, and coin swapping to
                  <br /> everyday shopping, experience the ease of everything in
                  <br /> one place.
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.rezor" target="_blank">
                  <button
                    type="button"
                    className="crypto-download bg-transparent fw-bold primary-font d-flex rounded-3 align-items-center justify-content-between px-4 py-3 mx-auto mx-lg-0"
                  >
                    Download{" "}
                    <img
                      src="/assets/images/RezorWalletImages/first-section/arrow-down.svg"
                      className="img-fluid"
                      alt="arrow-down"
                    />{" "}
                  </button>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="begin-crypto-img text-center text-lg-end">
                  <img
                    src="/assets/images/RezorWalletImages/fifth-section/crypto-experience-desktop.svg"
                    className="img-fluid"
                    alt="crypto-experience"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container section-container">
          <div className="get-in-touch">
            <div className="row align-items-lg-center">
              <div className="col-lg-6">
                <div className="get_in_touch_img text-center text-lg-start">
                  <img
                    src="/assets/images/RezorWalletImages/sixth-section/get_in_touch.png"
                    className="img-fluid touch-img1"
                    alt="get in touch"
                  />
                  <div className="get-in-touch-handshake">
                    <img
                      src="/assets/images/RezorWalletImages/sixth-section/get-in-touch-handshake.svg"
                      className="img-fluid"
                      alt="gen in touch handshake"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="get_in_touch_content text-center text-lg-start mt-5 mt-lg-0">
                  <h3 className="primary-font fw-semibold get_in_touch_h3">
                    Get in touch
                  </h3>
                  <p className="primary-font mt-3 get_in_touch_p">
                    Connect with an expert for latest updates on Rezor Wallet.
                  </p>
                  <div className="form-div mt-5">
                    {status.status != "" && !status.status && (
                      <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                        style={{ zIndex: "9999" }}
                      >
                        {status.msg}
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                          onClick={() => setStatus({ status: "", msg: "" })}
                        ></button>
                      </div>
                    )}

                    {status.status != "" && status.status && (
                      <div
                        className="alert alert-success alert-dismissible fade show"
                        role="alert"
                        style={{ zIndex: "9999" }}
                      >
                        {status.msg}
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                          onClick={() => setStatus({ status: "", msg: "" })}
                        ></button>
                      </div>
                    )}
                    <form className="floating_form" onSubmit={handleFormSubmit}>
                      <div className="form-floating mb-5 primary-font">
                        {/* <input
                          type="email"
                          className="form-control primary-font fw-medium"
                          id="floatingInput"
                          placeholder="name@example.com"
                        /> */}
                        <input
                          type="email"
                          className="form-control"
                          id="name"
                          name="email"
                          placeholder=" Enter Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {/* <label for="floatingInput">Email address</label> */}
                      </div>
                      {loading !== "" && loading ? (
                        <button className="form_button fw-medium font-geist d-flex align-items-center justify-content-between" type="button" disabled>
                          Loading...
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </button>) : (
                        <button
                          type="submit"
                          className="btn btn_send fw-medium primary-font d-flex rounded-3 align-items-center justify-content-between px-4 py-3 mx-auto mx-lg-0 text-white"
                        >
                          Send Message{" "}
                          <img
                            src="/assets/images/RezorWalletImages/sixth-section/send.png"
                            className="img-fluid"
                            alt="send"
                          />{" "}
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default RezorWallet;
