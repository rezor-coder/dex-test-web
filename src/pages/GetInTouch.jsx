import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Message: "",
    Interest: "",
  });
  const [status, setStatus] = useState({ status: "", msg: "" });
  const [loading, setLoading] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseAlert = () => {
    var btn = document.querySelector(".btn-close");
    console.log("btn");
    console.log(btn);

    if (btn) {
      setTimeout(() => {
        btn.click();
      }, 5000);
    }
  };

  useEffect(() => {
    handleCloseAlert();
    // let alertBox = document.querySelector("#myAlert");

    // console.log(alertBox);

    // // Check if alert is active (has class 'show')
    // if (alertBox && alertBox.classList.contains("show")) {

    //   console.log("hghghjgj");

    //   setTimeout(() => {
    //     alertBox.classList.remove("show"); // Hide alert
    //     alertBox.classList.add("fade"); // Ensure fade effect
    //     setTimeout(() => alertBox.remove(), 500); // Remove after fade out
    //   }, 5000); // 5 seconds delay
    // }
  }, []);

  const handleFormSubmit = async () => {
    // console.log("working");
    // e.preventDefault();

    const isValid = Object.values(formData).every(value => value.trim() !== "");
    if(!isValid) {
      setStatus({ status: undefined, msg: "Please fill all the fields" });
      return; 
    }


    if (formData.Email != "" && formData.Name != "") {
      setLoading(true);
    }
    const url =
      "https://gmteoqbjt5.execute-api.us-east-1.amazonaws.com" +
      "/src/server/V1/projectEnquiry";
    try {
      const response = await axios
        .post(url, formData, {
          headers: { "Content-Type": "application/json" },
        })
        .finally(() => {
          setLoading(false);
        });

      handleCloseAlert();

      setFormData({
        Name: "",
        LastName: "",
        Email: "",
        Message: "",
        Interest: "",
      });
      
      setStatus({ status: response?.data?.status, msg: response?.data?.msg });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="main">
      <div className="privacyBG p-3">
        <header>
          <div className="container custom-container">
            <NavBar />
          </div>
        </header>

        <div className="container custom-container git-section mt-5 mb-5">
          <div className=" position-relative mt-5 mb-5">
            <div className="container ms-2 ms-md-5">
              <h2 className="font-geist headingPrivacyPage">Get in touch</h2>
              <p>
                We are always ready to help you <br /> and answer your questions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5 px-2 px-md-5 custom-container">
        <form className="mx-2 mx-md-5">
          <h1>Talk to our specialist</h1>
          <div className="cover-content">
            <p>
              Chatting with us is right at your fingertips. Make sure to provide
              as many details as you can, and we'll assist you better.
            </p>
          </div>

          {status.status != "" && !status.status && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
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

          <div className=" row gx-5 mt-5 ">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="mb-4 getintouchform">
                <input
                  type="text"
                  name="Name"
                  className="form-control"
                  id="name"
                  value={formData.Name}
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 getintouchform">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="LastName"
                  placeholder="Last Name"
                  value={formData.LastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 getintouchform">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="Email"
                  placeholder=" Enter Email"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="mb-4 getintouchform">
                <select
                  name="Interest"
                  id="Interest"
                  className="form-control form-select"
                  onChange={handleChange}
                  style={{ color: "#626466" }}
                >
                  <option value="" disabled selected >
                    {" "}
                    What can we help with?
                  </option>
                  <option value="general_enquiry">General Enquiry</option>
                  <option value="rezor_swap">Rezor Swap</option>
                  <option value="rezor_wallet">Rezor Wallet</option>
                  <option value="bug_report">Bug Report</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4 getintouchform">
                <textarea
                  rows={4}
                  type="text"
                  className="form-control "
                  style={{ paddingBottom: "30px" }}
                  id="name"
                  name="Message"
                  placeholder="Message"
                  value={formData.Message}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {loading !== "" && loading ? (
            <button
              className="sendBtn fw-medium font-geist d-flex align-items-center justify-content-between"
              type="button"
              disabled
            >
              Loading...
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          ) : (
            <button
              type="button"
              className="sendBtn fw-medium font-geist d-flex align-items-center justify-content-between"
              onClick={handleFormSubmit}
            >
              Send Message
              <span className="icon">
                <img
                  src="/assets/images/git/send.png"
                  className="img-fluid"
                  width="20px"
                  height="20px"
                />
              </span>
            </button>
          )}
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default GetInTouch;
