import React, { useState } from "react";
import { Link } from "react-router-dom";

const Walletnavbar = () => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const storedTheme = localStorage.getItem("theme") || "light";
  const [isDark, setIsDark] = useState(storedTheme === "dark");
  const toggleMode = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.body.classList.toggle("dark-mode", !isDark);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <header className="navbar-container1">
      <div className="container custom-container main-container ">
        <nav className="navbar navbar-expand-lg bg-white border-radius-10 px-1 z-index-3">
          <div className="container-xl">
            <a className="navbar-brand" href="#">
              <img src="/assets/images/logo-main.png" className="img-fluid" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <img
                src="/assets/images/menu.png "
                className="border-0 menuImageForDark"
              ></img>
            </button>

            <div
              className="offcanvas rezorSwapNavBar offcanvas-end bg-white"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title font-geist menu-text "
                  id="offcanvasNavbarLabel"
                >
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close text-white bg-light"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body align-items-center ">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-5 gap-3 rezorWalletNavBarUl align-items-lg-center">

                  <li
                    className="nav-item dropdown "
                    onMouseEnter={() => setIsWalletOpen(true)}
                    onMouseLeave={() => setIsWalletOpen(false)}
                  >
                    <a
                      className="nav-link fw-medium align-items-lg-center font-geist d-flex navdropdownitem dropdownimgaHoverWallet"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Products
                      <img
                        className="img-fluid mt-lg-2"
                        src="/assets/images/arrow-right-forlight.png"
                      />
                    </a>

                    {isWalletOpen && (
                      <ul className="dropdown-menu show">
                        <li>
                          <Link to="#" className="dropdown-item">
                           Rezor Wallet
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                           Rezor Swap (Coming Soon)
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                           Rezor Scan (Coming Soon)
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link fw-medium font-geist" to="#">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-medium font-geist" to="/getintouch">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-medium font-geist" to="/getintouch">
                      STR Report
                    </Link>
                  </li>
                </ul>

                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 ms-md-4">
                  <a
                    href="https://x.com/rezor_official?s=21&t=Pqj041XnLLBjILHh9nKyzg"
                    className="community_button darkButton font-geist text-white text-decoration-none"
                  >
                    Our Community
                  </a>
                  <button
                    id="modeToggle"
                    className="border-0 bg-transparent"
                    onClick={() => toggleMode()}
                  >
                    <img
                      id="modeIcon"
                      src={
                        isDark
                          ? "/assets/images/darkToggle.png"
                          : "/assets/images/lightToggle.png"
                      }
                      alt="Mode Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Walletnavbar;
