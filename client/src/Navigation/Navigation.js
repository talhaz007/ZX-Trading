import React, { useState } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import ContactUs from "../components/Contactus/ContactUs";
import LandingPage from "../components/LandingPage/LandingPage";
import Queries from "../components/Queries/Queries";
import { useCookies } from "react-cookie";
import Client from "../components/Client/Client";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import IB from "../components/IB/IB";
import History from "./History";
import Login from "../components/Login/Login";

const Navigation = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [userToken, setUserToken] = useState(cookies.token);

  const isAuthenticated = () => {
    try {
      if (userToken) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };
  if (!isAuthenticated()) {
    return (
      <Router history={History}>
        <div>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/queries" exact component={Queries} />
            <Route path="/clientregister" exact component={Client} />
            <Route path="/ibregister" exact component={IB} />
            <Route path="/admin" exact component={Login} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router history={History}>
        <div>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/queries" exact component={Queries} />
            <Route path="/clientregister" exact component={Client} />
            <Route path="/ibregister" exact component={IB} />
            <Route path="/adminpanel" exact component={AdminPanel} />
            <Route path="/admin" exact component={Login} />
            <Redirect to="/adminpanel" />
          </Switch>
        </div>
      </Router>
    );
  }
};
export default Navigation;
