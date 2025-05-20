import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SbForm from "../components/Forms/SubscribeForm";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const setActive = (index) => {
    setActiveIndex(index);
  };

  const handleFormSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };
  var settings = {
    dots: true,
    dotsClass:"slick-dots slick-thumb custom-dots ",
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>
      <div className="main">
        <div className="hero-bg-color">
            <NavBar />
          <Slider {...settings} >
          <div className="hero-section position-relative">
            <div className="hero-section-text margin-top-150">
              <div className="container custom-container pt-5 text-xl-start text-center px-md-5">
                <div className="hero-section-mask">
                  <img
                    src="/assets/images/hero-section-new.svg"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="hero-ellipse-bottom">
                  <img
                    src="/assets/images/hero-ellipse-bottom.svg"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="hero-ellipse-top">
                  <img
                    src="/assets/images/hero-ellipse-top-right.svg"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="hero-ellipse-back">
                  <img
                    src="/assets/images/hero-img-back.svg"
                    className="img-fluid"
                  ></img>
                </div>
                <h1 className="fw-semibold font-geist">
                  Resilient by Design. <br />
                  <span className="blockchain_text blockchain_text_lg ">
                    Boundless by Nature.
                  </span>
                  <span className="blockchain_text blockchain_text_sm ">
                    Boundless by Nature.
                  </span>
                </h1>
                <p className="font-geist  margin-top-20 m-text">
                  Welcome to the hub of endless possibilities,
                  <br />
                  powered by Rezor's Layer 0 Blockchain
                </p>
                <div className="margin-top-40 d-flex flex-column flex-xl-row justify-content-start gap-3 align-items-center text-center">
                  <button className="border-0 community_button font-geist text-white text-decoration-none fw-bold">
                    Coming Soon
                  </button>

                  {/* <button className="whitepaper_button font-geist d-flex align-items-center gap-3 justify-content-center">
                    Whitepaper
                    <span className="icon ms-2">
                      <img
                        src="/assets/images/icons/document-download.svg"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
         
          <div className="hero-section hero-section1 position-relative">
          {/* <NavBar /> */}
            <div className="hero-section-text margin-top-150">
              <div className="container custom-container pt-5 text-xl-start text-center px-md-5">
                <div className="hero-section-mask pancake-mask">
                  <img
                    src="/assets/images/pancake-slider.svg"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="hero-ellipse-bottom">
                  <img
                    src="/assets/images/hero-ellipse-bottom.svg"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="hero-ellipse-top">
                  <img
                    src="/assets/images/hero-ellipse-top-right.svg"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="hero-ellipse-back">
                  <img
                    src="/assets/images/hero-img-back.svg"
                    className="img-fluid"
                  ></img>
                </div>
                <h1 className="fw-semibold font-geist pancake">
                  Rezor (RZR) is Available Now on  <br />
                  <span className="blockchain_text blockchain_text_lg ">
                  PancakeSwap.
                  </span>
                  <span className="blockchain_text blockchain_text_sm pancake_text ">
                  PancakeSwap.
                  </span>
                </h1>
                {/* <p className="font-geist  margin-top-20 m-text">
                  Welcome to the hub of endless possibilities,
                  <br />
                  powered by Rezor's Layer 0 Blockchain
                </p> */}
                <div className="mt-3 d-flex flex-column flex-xl-row justify-content-start gap-3 align-items-center text-center">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0x9D0d41Df4cA809dC16A9BFf646d3c6CbC4EbC707&inputCurrency=0x55d398326f99059fF775485246999027B3197955" className="border-0 community_button font-geist text-white text-decoration-none fw-bold position-relative" >
                    Trade Now
                  </a>

                  {/* <button className="whitepaper_button font-geist d-flex align-items-center gap-3 justify-content-center">
                    Whitepaper
                    <span className="icon ms-2">
                      <img
                        src="/assets/images/icons/document-download.svg"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          </Slider>
        </div>

        <div className="container custom-container">
          <div className="tomorrow-section margin-top-80">
            <div className="row">
              <div className="col-xl-6">
                <div className="tomorrow-section-content d-xl-none d-block text-center">
                  <h2 className="font-geist fw-semibold">
                    Designed for <br></br>
                    <span className="tomorrow-highlight">Tomorrow.</span>
                  </h2>
                </div>
                <div className="left-shape">
                  <img
                    src="/assets/images/tomorrow-design-section/tomorrow-design.png"
                    className="img-fluid leftShapeDesktop"
                  />
                  <img
                    src="/assets/images/tomorrow-design-section/tomorrow-designTab.png"
                    className="img-fluid leftShapeTab"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tomorrow-section-content">
                  <h2 className="font-geist fw-semibold d-xl-block d-none">
                    Designed for{" "}
                    <span className="tomorrow-highlight">Tomorrow.</span>
                  </h2>
                  <div className="feature-list">
                    <div
                      // className="feature-item d-flex active item1_img"
                      // onclick="setActive(this)"
                      className={`feature-item d-flex item1_img ${activeIndex === 1 ? "active" : ""
                        }`}
                      onClick={() => setActive(1)}
                    >
                      <div className="icon">
                        <img
                          src="/assets/images/tomorrow-design-section/icons/tomorrow_icon1.png"
                          alt="icon"
                          width="40px"
                        />
                      </div>
                      <div>
                        <h5 className="fw-medium font-geist text-black">
                          1. Sustainable Consensus Establishment
                        </h5>
                        <p className="font-geist">
                          Rezor employs an enhanced POS for blockchain
                          consensus, validating transactions and maintaining
                          node clarity and consistency.
                        </p>
                      </div>
                    </div>

                    <div
                      // className="feature-item d-flex item2_img"
                      // onclick="setActive(this)"
                      className={`feature-item d-flex item2_img ${activeIndex === 2 ? "active" : ""
                        }`}
                      onClick={() => setActive(2)}
                    >
                      <div className="icon">
                        <img
                          src="/assets/images/tomorrow-design-section/icons/tomorrow_icon2.png"
                          alt="icon"
                          width="40px"
                        />
                      </div>
                      <div>
                        <h5 className="fw-medium font-geist text-black">
                          2. Interoperability
                        </h5>
                        <p className="font-geist">
                          Rezor facilitates smooth sharing of data, knowledge,
                          and information among connected Layer 1 chains and<span> </span>
                          <br />
                          Layer 2 chains built upon them.
                        </p>
                      </div>
                    </div>

                    <div
                      // className="feature-item d-flex item3_img"
                      // onclick="setActive(this)"
                      className={`feature-item d-flex item3_img ${activeIndex === 3 ? "active" : ""
                        }`}
                      onClick={() => setActive(3)}
                    >
                      <div className="icon">
                        <img
                          src="/assets/images/tomorrow-design-section/icons/tomorrow_icon3.png"
                          alt="icon"
                          width="40px"
                        />
                      </div>
                      <div>
                        <h5 className="fw-medium font-geist text-black">
                          3. Latest Cryptographic Security
                        </h5>
                        <p className="font-geist">
                          Rezor secures the blockchain network with,
                          cryptographic algorithms and protocols, ensuring<span> </span>
                          <br />
                          privacy, transaction verification, and data integrity.
                        </p>
                      </div>
                    </div>

                    <div
                      // className="feature-item d-flex item4_img"
                      // onclick="setActive(this)"
                      className={`feature-item d-flex item4_img ${activeIndex === 4 ? "active" : ""
                        }`}
                      onClick={() => setActive(4)}
                    >
                      <div className="icon">
                        <img
                          src="/assets/images/tomorrow-design-section/icons/tomorrow_icon4.png"
                          alt="icon"
                          width="40px"
                        />
                      </div>
                      <div>
                        <h5 className="fw-medium font-geist text-black">
                          4. Distributed network
                        </h5>
                        <p className="font-geist">
                          A globally distributed network of nodes is connected
                          to
                          <br /> the blockchain ledger, allowing for
                          decentralised
                          <br /> information sharing and consensus.
                        </p>
                      </div>
                    </div>

                    <div
                      // className="feature-item d-flex item5_img"
                      // onclick="setActive(this)"
                      className={`feature-item d-flex item5_img ${activeIndex === 5 ? "active" : ""
                        }`}
                      onClick={() => setActive(5)}
                    >
                      <div className="icon">
                        <img
                          src="/assets/images/tomorrow-design-section/icons/tomorrow_icon5.png"
                          alt="icon"
                          width="40px"
                        />
                      </div>
                      <div>
                        <h5 className="fw-medium font-geist text-black">
                          5. Multiple scalability options
                        </h5>
                        <p className="font-geist">
                          Rezor's layer zero architecture connects with other
                          blockchains, addressing scalability through horizontal
                          scaling, sharding, and specialised chains.
                        </p>
                      </div>
                    </div>

                    <div
                      // className="feature-item d-flex item6_img"
                      // onClick={setActive(this)}
                      className={`feature-item d-flex item6_img ${activeIndex === 6 ? "active" : ""
                        }`}
                      onClick={() => setActive(6)}
                    >
                      <div className="icon">
                        <img
                          src="/assets/images/icons/whats_in_it_icon8.png"
                          alt="icon"
                          width="40px"
                        />
                      </div>
                      <div>
                        <h5 className="fw-medium font-geist text-black">
                          6. On-chain governance
                        </h5>
                        <p className="font-geist">
                          Token holders can propose and vote on network upgrades
                          without hard forks, promoting decentralised
                          decision-making.
                        </p>
                      </div>
                    </div>
                    <div
                      // className="feature-item d-flex item7_img"
                      // onclick="setActive(this)"
                      className={`feature-item d-flex item7_img ${activeIndex === 7 ? "active" : ""
                        }`}
                      onClick={() => setActive(7)}
                    >
                      <div className="icon">
                        <img
                          src="/assets/images/tomorrow-design-section/icons/cryptographic.png"
                          alt="icon"
                          width="40px"
                        />
                      </div>
                      <div>
                        <h5 className="fw-medium font-geist text-black">
                          7. Accelerating Web3 Adoption
                        </h5>
                        <p className="font-geist">
                          The Rezor ecosystem provides established dApps for a
                          quick transition to Web3, featuring unique UX and
                          abstraction. Dapps include Validator and Nominator
                          applications, Layer 0 and Layer 1 explorers, Mobile
                          wallet, Crypto Cards, Staking Pools, and Dex.
                        </p>
                      </div>
                    </div>

                    <div
                      // className="feature-item d-flex item8_img"
                      // onclick="setActive(this)"
                      className={`feature-item d-flex item8_img ${activeIndex === 8 ? "active" : ""
                        }`}
                      onClick={() => setActive(8)}
                    >
                      <div className="icon">
                        <img
                          src="/assets/images/tomorrow-design-section/icons/tomorrow_icon8.png"
                          alt="icon"
                          width="40px"
                        />
                      </div>
                      <div>
                        <h5 className="fw-medium font-geist text-black">
                          8. Peer-to-Peer (P2P) Architecture
                        </h5>
                        <p className="font-geist">
                          Rezor enables direct blockchain partner communication,
                          improving collaboration without intermediaries or
                          single points of failure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="whats_in_it margin-top-100">
            <div className="heading_whats_in_it">
              <h2 className="font-geist fw-semibold">What’s in it for you?</h2>
              <p className="font-geist ">
                Here’s everything you can do on
                <br />
                Rezor Blockchain. The possibilities are limitless!
              </p>
            </div>
            <div className="row row_whats_in_it">
              <div className="col-md-3">
                <div className="whats_in_it_box margin-top-50 whats_in_it_box_active box1_img">
                  <h5 className="fw-medium font-geist">
                    Build your own <br />
                    dApp
                  </h5>
                  <p className="font-geist ">
                    Easily create decentralized applications for various
                    industries.
                  </p>
                  <img
                    src="/assets/images/tomorrow-design-section/icons/cpu-charge.png"
                    className="img-fluid "
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="whats_in_it_box margin-top-50 box2_img">
                  <h5 className="fw-medium font-geist">
                    Integrate your <br />
                    Metamask wallet
                  </h5>
                  <p className="font-geist ">
                    Connect your Metamask wallet for secure transactions.
                  </p>
                  <img
                    src="/assets/images/tomorrow-design-section/icons/introperability.png"
                    className="img-fluid "
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="whats_in_it_box margin-top-50 box3_img">
                  <h5 className="fw-medium font-geist">
                    Develop unique cross- <br />
                    chain DeFi solutions
                  </h5>
                  <p className="font-geist ">
                    Create DeFi solutions spanning multiple blockchains.
                  </p>
                  <img
                    src="/assets/images/tomorrow-design-section/icons/cryptographic.png"
                    className="img-fluid "
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="whats_in_it_box margin-top-50 box4_img">
                  <h5 className="fw-medium font-geist">
                    Create interoperable <br />
                    NFTs
                  </h5>
                  <p className="font-geist ">
                    Mint NFTs that can be used across different platforms.
                  </p>
                  <img
                    src="/assets/images/icons/whats_in_it_icon4.png"
                    className="img-fluid "
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="whats_in_it_box margin-top-50 box5_img">
                  <h5 className="fw-medium font-geist">
                    Build & deploy parachain <br />
                    for specific use cases.
                  </h5>
                  <p className="font-geist ">
                    Customize and deploy parachains and tailor them for specific
                    needs.
                  </p>
                  <img
                    src="/assets/images/tomorrow-design-section/icons/tomorrow_icon2.png"
                    className="img-fluid "
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="whats_in_it_box margin-top-50 box6_img">
                  <h5 className="fw-medium font-geist">
                    Offer tools for Identity & <br />
                    Governance Solutions.
                  </h5>
                  <p className="font-geist ">
                    Provide users with tools for managing identity and
                    governance.
                  </p>
                  <img
                    src="/assets/images/icons/whats_in_it_icon6.png"
                    className="img-fluid "
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="whats_in_it_box margin-top-50 box7_img">
                  <h5 className="fw-medium font-geist">
                    Enable Self-sovereign <br />
                    Identities for users.
                  </h5>
                  <p className="font-geist ">
                    Give users control over their personal information.
                  </p>
                  <img
                    src="/assets/images/icons/whats_in_it_icon7.png"
                    className="img-fluid "
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="whats_in_it_box margin-top-50 box8_img">
                  <h5 className="fw-medium font-geist">
                    Employ Cross-chain <br />
                    Identity Management.
                  </h5>
                  <p className="font-geist ">
                    Manage identities across blockchains seamlessly.
                  </p>
                  <img
                    src="/assets/images/icons/whats_in_it_icon8.png"
                    className="img-fluid "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container d-flex justify-content-center align-items-center slider_dots mt-5">
          <div className="progress-indicator">
            <div className="circle active"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div> */}

        <div className="promo-lines margin-top-50 m">
          <div className="line-violet line">
            <div className="line-text font-geist">
              Our transaction rates and other important metrics.
            </div>
            <div className="line-text font-geist">
              Our transaction rates and other important metrics.
            </div>
          </div>
          <div className="line-red line">
            <div className="line-text text-white font-geist">
              Rezor: Resilient by Design. Boundless by Nature.
            </div>
            <div className="line-text text-white font-geist">
              Rezor: Resilient by Design. Boundless by Nature.
            </div>
          </div>
        </div>

        <div className="container custom-container mt-5">
          <div className="numbers_we_trust">
            <div className="numbers_bg_subtract position-relative">
              {/* <img src="/assets/images/numbers.svg" className="numbers_svg"></img> */}
              <p className="fw-light font-geist mb-0">
                Our transaction rates and other important metrics.
              </p>
              <h2 className="fw-semibold font-geist mb-0">
                In numbers we trust.
              </h2>
              <h3 className="fw-medium font-geist text-black">
                Incomparable in delivery & <br />
                Unmatched in numbers
              </h3>
              <div className="button_numbers_trust_new">
                <button className="whitepaper_button_new fw-medium font-geist d-flex align-items-center justify-content-between">
                  Coming Soon
                  <span className="icon">
                    <img
                      src="/assets/images/globe-explore-icon.png"
                      className="img-fluid"
                      width="20px"
                      height="20px"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="transaction_fee position-relative">
                <div className="transaction_img">
                  <img
                    src="/assets/images/transaction_fee_img.png"
                    className="img-fluid"
                  />
                </div>
                <div className="transaction_fee_content">
                  <h4 className="fw-light font-geist mb-0">Transaction Fee</h4>
                  <h2 className="fw-bold font-geist">0.0018 RZR</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="statistical_landscape d-flex align-items-center justify-content-center">
                <h2 className="text-black font-geist">
                  A Statistical
                  <br />
                  Landscape.
                </h2>
              </div>
              <div className="block_size position-relative">
                <div className="block_size_content">
                  <p className="font-geist mb-0">Block Size/Block Time</p>
                  <h2 className="font-geist fw-bold">6MB/6Secs</h2>
                </div>
                <div className="block_size_img">
                  <img src="/assets/images/block-size-flash.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="transaction_fee">
                <div className="transaction_rate_content1 text-center">
                  <img
                    src="/assets/images/transaction_rate.png"
                    className="img-fluid"
                    alt="Transaction Rate"
                  />
                  <h4 className="font-geist mb-0 text-center mt-4">
                    Transaction Rate
                  </h4>
                  <p className="font-geist mt-3">
                    Rezor enables users to finalise transactions within 6
                    seconds of block finality on the blockchain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container custom-container margin-top-150">
          <div className="row flex-column-reverse flex-md-column-reverse flex-xl-row">
            <div className="col-xl-6">
              <div className="rezor_coin_content pe-lg-5 ps-lg-5">
                <h2 className="font-geist fw-semibold d-xl-block d-none">
                  Rezor Coin
                </h2>
                <p className="fw-medium font-geist d-xl-block d-none mt-3">
                  Life is too good to be stressed out over crypto. At Rezor, <span> </span>
                  <br /> we've made it simple by seamlessly integrating crypto into
                  <br />
                  your daily routine.
                </p>

                <div className="rezor_coin_list">
                  <div className="rezor_list1 list1_img">
                    <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">
                      <img
                        src="/assets/images/icons/rezor_coin_icon1.png"
                        className="img-fluid"
                        width="30px"
                      />
                      <h6 className="fw-medium font-geist mb-0">
                        Trade on multiple Decentralised and Centralised
                        exchanges.
                      </h6>
                    </div>
                  </div>
                  <div className="rezor_list list2_img">
                    <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">
                      <img
                        src="/assets/images/icons/rezor_coin_icon2.png"
                        className="img-fluid"
                        width="30px"
                      />
                      <h6 className="fw-medium font-geist mb-0">
                        Use it as a currency for day-to-day activities.
                      </h6>
                    </div>
                  </div>
                  <div className="rezor_list list3_img">
                    <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">
                      <img
                        src="/assets/images/icons/rezor_coin_icon3.png"
                        className="img-fluid"
                        width="30px"
                      />
                      <h6 className="fw-medium font-geist mb-0">
                        Contribution to project growth with a 2% tax allocated
                        to the development wallet for strategic development
                        initiatives.
                      </h6>
                    </div>
                  </div>
                  <div className="rezor_list list4_img">
                    <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">
                      <img
                        src="/assets/images/tomorrow-design-section/icons/cpu-charge.png"
                        className="img-fluid"
                        width="35px"
                      />
                      <h6 className="fw-medium font-geist mb-0">
                        Enjoy a 0% tax coin on mainnet.
                      </h6>
                    </div>
                  </div>
                  <div className="rezor_list list5_img">
                    <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">
                      <img
                        src="/assets/images/icons/rezor_coin_icon5.png"
                        className="img-fluid"
                        width="30px"
                      />
                      <h6 className="fw-medium font-geist mb-0">
                        Use it as the gas fee in every transaction on the Rezor
                        Blockchain.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="rezor_coin_content d-xl-none d-block mb-5">
                <h2 className="font-geist fw-semibold">Rezor Coin</h2>
                <p className="fw-medium font-geist">
                  Life is too good to be stressed out over crypto. At Rezor,<span> </span>
                  <br />
                  we've made it simple by seamlessly integrating crypto into your daily routine.
                </p>
              </div>
              <div className="rezor_subtract position-relative d-xl-none d-block">
                <div className="rezor_subtract_img">
                  <img
                    src="/assets/images/rezor_coin_subtract.png"
                    className="img-fluid rezor_coin_img"
                    alt="Rezor Coin"
                  />
                </div>
                <div className="rezor_subtract_button_coin">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0x9D0d41Df4cA809dC16A9BFf646d3c6CbC4EbC707&inputCurrency=0x55d398326f99059fF775485246999027B3197955" className="whitepaper_button_coin fw-medium font-geist d-flex align-items-center justify-content-between">
                    Trade Now
                    <span className="icon">
                      <img
                        src="/assets/images/flash-circle.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="rezor_subtract position-relative d-xl-block d-none">
                <div className="rezor_subtract_img">
                  <img src="/assets/images/rezor_coin_subtract.png"
                    className="img-fluid  coinImageDark"
                    alt="Rezor Coin"
                  />
                </div>
                <div className="rezor_subtract_button_coin">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0x9D0d41Df4cA809dC16A9BFf646d3c6CbC4EbC707&inputCurrency=0x55d398326f99059fF775485246999027B3197955" className="whitepaper_button_coin fw-medium font-geist d-flex align-items-center justify-content-between">
                    Trade Now
                    <span className="icon">
                      <img src="/assets/images/flash-circle.png"
                        className="img-fluid"
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5  row justify-content-center ">
          <div className="col-md-4 my-5">
            <a href='#'>  <img src="/assets/images/pancake.png" alt="" width={300} className="panCakeImage" /></a>
          </div>
          <div className="col-md-4 my-5">
            <a href='https://skynet.certik.com/projects/rezor'>  <img src="/assets/images/Audit.png" alt="" width={300} className="auditImage" /></a>
          </div>
        </div>

        <div className="mx-4 d-xl-block d-none">
          <div className="unique_products_bg margin-top-100">
            <div className="container custom-container">
              <div className="row">
                <div className="col-xl-6">
                  <div className=" saita_pro position-relative">
                    <div className="saita_pro_img rezorWalletBG">
                      <h2 className="font-geist text-dark fw-bold mb-0">RezorWallet</h2>
                      <p className="font-geist text-dark fw-light">
                        The only crypto app you need!
                      </p>
                      <div className="rezorWalletDiv ">
                        <a href="https://play.google.com/store/apps/details?id=com.rezor" className='btn-download' target="_blank">

                          <button className="rezorWalletSwap  fw-medium font-geist d-flex align-items-center justify-content-between">
                            Know More
                            <span className="icon">
                              <img
                                src="/assets/images/unique_products/message-question.png"
                                className="img-fluid"
                                width="20px"
                                height="20px"
                              />
                            </span>
                          </button>
                        </a>

                      </div>
                    </div>
                  </div>
                  <div className="user_numbers margin-top-80 text-center">
                    <h2 className="text-gradient fw-semibold font-geist mb-0 cos">
                      COMING
                    </h2>
                    <h3 className="fw-semibold font-geist">SOON</h3>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="unique_products_content text-center mt-5">
                    <h2 className="font-geist fw-semibold">
                      Unique <br />
                      Products
                    </h2>
                    <p className="fw-medium font-geist mt-4 mx-0 mx-sm-2">
                      Everything you need to know about the dynamic world of
                      crypto, Web3,
                      <br />
                      Blockchain and Rezor!
                    </p>
                  </div>
                  <div className="rezorSwapBg saita_card margin-top-100 position-relative">
                    <div className="saita_card_img  ">
                      <h2 className="font-geist text-dark fw-bold mb-0">RezorSwap</h2>
                      <p className="font-geist text-dark fw-light">
                        Swapping made smooth and secure!
                      </p>
                      <div className="rezorWalletDiv ">
                        <button className="rezorWalletSwap  fw-medium font-geist d-flex align-items-center justify-content-between">
                          Coming Soon
                          <span className="icon">
                            <img
                              src="/assets/images/unique_products/message-question.png"
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
            </div>
          </div>
        </div>

        <div className="container-fluid d-xl-none d-block">
          <div className="unique_products_bg margin-top-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="unique_products_content text-center mt-5">
                    <h2 className="font-geist fw-semibold">
                      Unique <br />
                      Products
                    </h2>
                    <p className="fw-medium font-geist mt-4">
                      Everything you need to know about the dynamic world of
                      crypto, Web3,
                      <br />
                      Blockchain, and Rezor!
                    </p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="rezorWalletBG saita_card mt-4 position-relative custo-h">
                    <div className="saita_card_img">
                      <h2 className="font-geist  fw-bold mb-0">RezorWallet</h2>
                      <p className="font-geist  fw-light">
                        The only crypto <br /> app you need!
                      </p>
                      <div className=" rezorWalletButtonDiv-w ">
                        <button className="rezorWalletButton  fw-medium font-geist d-flex align-items-center justify-content-between">
                          Coming Soon
                          <span className="icon">
                            <img
                              src="/assets/images/unique_products/message-question.png"
                              className="img-fluid"
                              width="20px"
                              height="20px"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rezorSwapBg saita_card mt-4 position-relative custo-h">
                    <div className="saita_card_img">
                      <h2 className="font-geist  fw-bold mb-0">RezorSwap</h2>
                      <p className="font-geist  fw-light">
                        Swapping made smooth and secure!
                      </p>
                      <div className=" rezorWalletButtonDiv-w ">
                        <button className="rezorWalletButton fw-medium font-geist d-flex align-items-center justify-content-between">
                          Coming Soon
                          <span className="icon">
                            <img
                              src="/assets/images/unique_products/message-question.png"
                              className="img-fluid"
                              width="20px"
                              height="20px"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div className="x_bridge mt-4  position-relative">
                    <div className="x_bridge_img">
                      <h2 className="font-geist fw-bold mb-0">XBridge</h2>
                      <p className="font-geist fw-light">
                        Crossing the Blockchain
                        <br />
                        Bridges!
                      </p>
                      <div className="x_bridge_button">
                        <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between">
                          Know More
                          <span className="icon">
                            <img
                              src="/assets/images/unique_products/message-question.png"
                              className="img-fluid"
                              width="20px"
                              height="20px"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="saita_card margin-top-150 position-relative">
                    <div className="saita_card_img">
                      <h2 className="font-geist fw-bold mb-0">SaitaCard</h2>
                      <p className="font-geist fw-light">
                        When crypto is new cash!
                      </p>
                      <div className="saita_card_button">
                        <button className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between">
                          Know More
                          <span className="icon">
                            <img
                              src="/assets/images/unique_products/message-question.png"
                              className="img-fluid"
                              width="20px"
                              height="20px"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div> */}
                  <div className="user_numbers margin-top-80 text-center">
                    <h2 className="fw-semibold font-geist mb-0 cs">COMING</h2>
                    <h3 className="fw-semibold font-geist">SOON</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container custom-container">
          <div className="d-lg-flex d-none align-items-center justify-content-between margin-top-100">
            <div className="rezor_blog_content">
              <h2 className="font-geist fw-semibold">Rezor Blog Space</h2>
              <p className="font-geist fw-medium mt-4">A Web3 Knowledge Hub</p>
            </div>
            <Link to="/blog">
              <div className="whitepaper_button fw-medium font-geist d-flex align-items-center justify-content-between">
                More Articles
                <span className="icon">
                  <img
                    src="/assets/images/arrow-square-right.png"
                    className="img-fluid"
                    width="20px"
                    height="20px"
                  />
                </span>
              </div>
            </Link>
          </div>
          <div className="row">
            <div className="rezor_blog_content text-center mt-5 d-lg-none d-block">
              <h2 className="font-geist fw-semibold">Rezor Blog Space</h2>
              <p className="font-geist fw-medium mt-4">A Web3 Knowledge Hub</p>
            </div>
            <div className="col-xl-4">
              <div className="blog_div position-relative">
                <img
                  src="/assets/images/blog_subtract.png"
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
                        src="/assets/images/unique_products/message-question.png"
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
                  src="/assets/images/blog_subtract.png"
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
                        src="/assets/images/unique_products/message-question.png"
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
                  src="/assets/images/blog_subtract.png"
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
                        src="/assets/images/unique_products/message-question.png"
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
          <div className="text-center d-flex justify-content-center">
            <Link to="/blog">
            <button className="whitepaper_button fw-medium font-geist d-flex d-md-none align-items-center justify-content-between mt-5">
              More Articles
              <span className="icon">
                <img
                  src="/assets/images/arrow-square-right.png"
                  className="img-fluid"
                  width="20px"
                  height="20px"
                />
              </span>
            </button>
            </Link>
          </div>
        </div> */}

        <div className="container custom-container margin-top-100 mb-5">
          <div className="rezor_updates position-relative">
            <div className="rezor_updates_content row">
              <div className="col-xl-7">
                <h2 className="font-geist text-white fw-semibold">
                  Rezor Updates
                </h2>
                <p className="font-geist fw-medium text-white mt-3 ps-2">
                  Register with your email and stay tuned for more updates!
                </p>
                <div>
                  <SbForm onSubmit={handleFormSubmit} />
                </div>


                {/* <form className="mt-5">
                  <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      id="exampleFormControlInput1"
                      placeholder="Enter Email"
                    />
                    <button
                      className="form_button fw-medium font-geist d-flex align-items-center justify-content-between"
                      type="submit"
                    >
                      Send
                      <span className="icon">
                        <img
                          src="/assets/images/arrow-right-form.png"
                          className="img-fluid"
                          width="20px"
                          height="20px"
                        />
                      </span>
                    </button>
                  </div>
                </form> */}
              </div>
              <div className="bells_rezor col-xl-5">
                <img
                  src="/assets/images/rezor_updates_bells.png"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
