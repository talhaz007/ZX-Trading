import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import History from "../../Navigation/History";
import "../IB/IB.scss";

const Client = () => {
  const [nameval, setNameVal] = useState("");
  const [emailval, setEmailVal] = useState("");
  const [cnicval, setCnicVal] = useState("");
  const [descval, setDescVal] = useState("");

  const onHandleInput = (e, stateName) => {
    stateName(e.target.value);
  };

  const onClientSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameval,
        email: emailval,
        cnic: cnicval,
        description: descval,
      }),
    };

    fetch("/api/clients/", requestOptions)
      .then((res) => res.json())
      .then(() => History.push("/"));
  };

  return (
    <div className="default-layout">
      <Header />
      <div className="container">
        <h3>
          Fill this Registeration form as Client in ZX Trading. We will send you
          confirmation mail very shortly.
        </h3>
        <br></br>
        <h2 classname="inputs-top-heading">Register As Client</h2>
        <div className="inputs-wrapper">
          <div className="label-wrapper">
            <label className="label-style">
              Name <span className="staric-color">*</span>
            </label>
            <input
              type="text"
              className="queries-inputs"
              value={nameval}
              onChange={(e) => onHandleInput(e, setNameVal)}
              required
            />
          </div>
          <br></br>
          <div className="label-wrapper">
            <label className="label-style">
              Email <span className="staric-color">*</span>
            </label>
            <input
              type="email"
              className="queries-inputs"
              value={emailval}
              onChange={(e) => onHandleInput(e, setEmailVal)}
              required
            />
          </div>
          <br></br>
          <div className="label-wrapper">
            <label className="label-style">
              CNIC <span className="staric-color">*</span>
              <span className="sub-desc"> (without "-" dashes)</span>
            </label>
            <input
              type="number"
              value={cnicval}
              className="queries-inputs"
              onChange={(e) => onHandleInput(e, setCnicVal)}
              maxLength="13"
              required
            />
          </div>
          <br></br>
          <div className="label-wrapper">
            <label className="label-style">
              Description <span className="sub-desc">(not mandatory)</span>
            </label>
            <textarea
              rows="8"
              cols="50"
              value={descval}
              className="queries-textarea"
              onChange={(e) => onHandleInput(e, setDescVal)}
            />
          </div>
          <br></br>
          <div className="inputs-btn-wrapper">
            <button class="input-button-style" onClick={() => onClientSubmit()}>
              Submit
            </button>
          </div>
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Client;
