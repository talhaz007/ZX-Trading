import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { FaHeadset, FaChartLine, FaHandHoldingHeart } from "react-icons/fa";
import "./LandingPage.scss";
import History from "../../Navigation/History";

const LandingPage = () => {
  return (
    <div className="default-layout">
      <Header />
      <div className="container">
        <div className="card-contnet">
          <div className="left-card-wrap">
            <div className="inner-left-card" id="aboutus">
              <h2 className="left-card-top-text">Start Trading!</h2>
              <div className="inner-left-card-desc">
                <p>
                  We offer multiple consultation services in the world of{" "}
                  <strong>
                    margin based Online Commodities and Currencies Trading,
                    along with trading in Stock Market.
                  </strong>
                  To Start trading now get in touch with us through our contact
                  details or by leaving a request or query on the website.
                </p>
              </div>
            </div>
            <div className="inner-right-card">
              <div className="buttons-wraps">
                <button
                  className="filled-btn"
                  onClick={() => History.push("/contactus")}
                >
                  Get in Touch
                </button>
                <button
                  className="outlined-btn"
                  onClick={() => History.push("/queries")}
                >
                  Leave a Query
                </button>
              </div>
            </div>
          </div>
          <div className="right-card">
            <div>
              <div>
                <h2 style={{ textAlign: "center" }}>Register Yourself</h2>
              </div>
              <div className="buttons-wrap">
                <button
                  className="register-btn-filled"
                  onClick={() => History.push("/ibregister")}
                >
                  Register as IB
                </button>
                <button
                  className="register-btn-outlined"
                  onClick={() => History.push("/clientregister")}
                >
                  Register as Client
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="desc-div">
          <h2 style={{ color: "black" }}>What we do?</h2>
          <p>
            Zx Trading provides its clients with the best services to help them
            enter into the Markets of Online Trading. The company strives to be
            the best in the market to enable its clients to trade confidently,
            through its affiliations with trusted brokers. In addition to that,
            we provide our services to help our clients to learn the
            technicalities of online trading with our extensive support routines
            and 24/7 customer service availability we also help our customers
            understand the platforms and tools that they can use to achieve
            their trading goals.
          </p>
          <h2 style={{ color: "black" }}>Why Choose Zx?</h2>
          <div className="support-div">
            <div className="support-inner-wrap">
              <FaHeadset className="support-icon" />
              <h3 className="support-text">Live Trading Sessions</h3>
              <p className="support-desc">
                We provide live trading sessions to our clients to facilitate
                and help them out to learn the insights of online trading
              </p>
            </div>
            <div className="support-inner-wrap">
              <FaChartLine className="support-icon" />
              <h3 className="support-text">Signal Provision</h3>
              <p className="support-desc">
                Our experienced and qualified team works every day to provide
                our clients with signals that can help them achieve considerable
                profits
              </p>
            </div>
            <div className="support-inner-wrap">
              <FaHandHoldingHeart className="support-icon" />
              <h3 className="support-text"> Support</h3>
              <p className="support-desc">
                Our team is available 24/7 to help our clients out in every
                ambiguity they face in their trading experiences
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
