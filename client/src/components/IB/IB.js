import React, { useState } from "react";
import History from "../../Navigation/History";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./IB.scss";

const IB = () => {
  const [nameval, setNameVal] = useState("");
  const [emailval, setEmailVal] = useState("");
  const [experienceVal, SetExperienceVal] = useState("");
  const [descval, setDescVal] = useState("");

  const onHandleInput = (e, stateName) => {
    stateName(e.target.value);
  };

  const onIbSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameval,
        email: emailval,
        experience: experienceVal,
        description: descval,
      }),
    };

    fetch("/api/ibs/", requestOptions)
      .then((res) => res.json())
      .then(() => History.push("/"));
    // .then((d) => alert(d));
  };

  return (
    <div className="default-layout">
      <Header />
      <div className="container">
        <h3>
          Fill this Registeration form as IB in ZX Trading. We will Send You
          confirmation mail very shortly.
        </h3>
        <br></br>
        <h2 classname="inputs-top-heading">Register As IB</h2>
        <div className="inputs-wrapper">
          <div className="label-wrapper">
            <label className="label-style">
              Name <span className="staric-color">*</span>
            </label>
            <input
              type="text"
              required
              className="queries-inputs"
              value={nameval}
              onChange={(e) => onHandleInput(e, setNameVal)}
            />
          </div>
          <br></br>
          <div className="label-wrapper">
            <label className="label-style">
              Email <span className="staric-color">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="queries-inputs"
              value={emailval}
              onChange={(e) => onHandleInput(e, setEmailVal)}
            />
          </div>
          <br></br>
          <div className="label-wrapper">
            <label className="label-style">
              Experience <span className="staric-color">*</span>
            </label>
            <input
              type="text"
              name="Text"
              required
              className="queries-inputs"
              value={experienceVal}
              onChange={(e) => onHandleInput(e, SetExperienceVal)}
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
            <button class="input-button-style" onClick={() => onIbSubmit()}>
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

export default IB;
