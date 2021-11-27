import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import History from "../../Navigation/History";
import "./Queries.scss";
const Queries = () => {
  const [nameval, setNameVal] = useState("");
  const [emailval, setEmailVal] = useState("");
  const [phoneVal, SetPhoneVal] = useState("");
  const [queryval, setQueryVal] = useState("");

  const onHandleInput = (e, stateName) => {
    stateName(e.target.value);
  };

  const onQuerySubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameval,
        email: emailval,
        phoneNumber: phoneVal,
        query: queryval,
      }),
    };

    fetch("/api/query/", requestOptions)
      .then((res) => res.json())
      .then(() => History.push("/"));
  };

  return (
    <div className="default-layout">
      <Header />
      <div className="container">
        <h3>
          Fill this form to leave a query at the website. We will Contact You
          very shortly to assist you.
        </h3>
        <p className="short-desc">
          *You will either receive an email or a call from us.
        </p>
        <p className="short-desc">
          *All calls will be made during business hours and working days.
        </p>
        <br></br>
        <h2 classname="inputs-top-heading">Leave A Query</h2>
        <div className="inputs-wrapper">
          <div className="label-wrapper">
            <label className="label-style">Name</label>
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
            <label className="label-style">Email</label>
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
            <label className="label-style">Phone</label>
            <input
              type="phone"
              name="phone"
              required
              className="queries-inputs"
              value={phoneVal}
              onChange={(e) => onHandleInput(e, SetPhoneVal)}
            />
          </div>
          <br></br>
          <div className="label-wrapper">
            <label className="label-style">Query</label>
            <textarea
              rows="8"
              cols="50"
              required
              className="queries-textarea"
              value={queryval}
              onChange={(e) => onHandleInput(e, setQueryVal)}
            />
          </div>
          <br></br>
          <div className="inputs-btn-wrapper">
            <button class="input-button-style" onClick={() => onQuerySubmit()}>
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

export default Queries;
