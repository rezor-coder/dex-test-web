import React, { useState } from "react";
import axios from "axios";

const SubscribeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ email: "" });
  const [status, setStatus] = useState({ status: "", msg: "" });
  const [loading, setLoading] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(formData.email != ""){
      setLoading(true);
    }
    const url =
      "https://gmteoqbjt5.execute-api.us-east-1.amazonaws.com" +
      "/src/server/V1/emailSubsription";
    var res = {};
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

      res = { type: "true", msg: response.data.msg };

      setStatus({ status: response?.data?.status, msg: response?.data?.msg });
      setFormData({email:""});

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ status: undefined, msg: error.response.data.msg });
    }

    onSubmit(res);
  };

  return (
    <>
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

      <form
        className={status.status == "" ? "mt-5" : "mt-2"}
        onSubmit={handleFormSubmit}
      >
        <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
          <input
            type="email"
            name="email"
            className="form-control rounded-pill"
            id="exampleFormControlInput1"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          {loading !== "" && loading ? (
            <button className="form_button fw-medium font-geist d-flex align-items-center justify-content-between" type="button" disabled>
            Loading...
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
          ) : loading !== "" && !loading && status.status ? (
            <button
              className="form_button fw-medium font-geist d-flex align-items-center justify-content-between"
              type="button"
            >
              Done
              <span className="icon">
                <img
                  src="/assets/images/tick.gif"
                  className="img-fluid"
                  width="20px"
                />
              </span>
            </button>
          ) : (
            <button
              className="form_button fw-medium font-geist d-flex align-items-center justify-content-between"
              type="submit"
            >
              Send
              <span className="icon">
                <img
                  src="assets/images/arrow-right-form.png"
                  className="img-fluid"
                  width="20px"
                  height="20px"
                />
              </span>
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default SubscribeForm;
