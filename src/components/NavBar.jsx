import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const storedTheme = localStorage.getItem("theme") || "light";
  const [isDark, setIsDark] = useState(storedTheme === "dark");
  const toggleMode = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.body.classList.toggle("dark-mode", !isDark);
    localStorage.setItem("theme", newTheme);
  };


  return (
    <header className={` ${location.pathname === '/' ? 'navbar-container1 position-absolute w-100':''}`} >
      <div className="container custom-container main-container">
        <nav className="navbar navbar-expand-lg bg-white border-radius-10 px-1 z-index-3">
          <div className="container-xxl">
            <a className="navbar-brand" href="/">
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
              <div className="offcanvas-body align-items-center">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-5 gap-3 align-items-lg-center">
                  <li className="nav-item">
                    <Link className="nav-link fw-medium font-geist" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown"
                      onMouseEnter={() => setIsOpen(true)}
                      onMouseLeave={() => setIsOpen(false)}
                  >
                    <a
                      className={`nav-link fw-medium font-geist d-flex navdropdownitem align-items-lg-center ${location.pathname==='/rezorwallet'? 'active':''}`}
                      href="#"
                      // onClick={(e) => e.preventDefault()}
                    >
                      Products{" "}
                      <img
                        className="img-fluid mt-lg-2"
                        src={`/assets/images/${location.pathname === '/rezorwallet'? 'arrow-right-orange.png':'arrow-right-forlight.png'}`}
                      />
                    </a>

                    {isOpen && (
                      <ul className="dropdown-menu show">
                        <li>
                          <Link to="/rezorwallet" className="dropdown-item font-geist fw-light">
                            Rezor Wallet
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item font-geist" href="#">
                            Rezor Swap (Coming Soon)
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item font-geist" href="#">
                            Rezor Scan (Coming Soon)
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>


                  <li className="nav-item">
                    <Link to="/getintouch" className="nav-link fw-medium font-geist" href="#">
                     Contact Us
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="/termsandconditions" className="nav-link fw-medium font-geist" href="#">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/privacypolicy" className="nav-link fw-medium font-geist" href="#">
                      Privacy Policy
                    </Link>
                  </li> */}
                </ul>

                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 ms-lg-4">
                  <a
                    href="https://x.com/rezor_official?s=21&t=Pqj041XnLLBjILHh9nKyzg"
                    className="community_button font-geist text-white text-decoration-none"
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

export default NavBar;
