import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import "./Login.scss";

const Login = (props) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  const onChangeText = (e, setState) => {
    setState(e.target.value);
  };
  const onSignIn = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    fetch("/api/auth/", requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((responseJson) => {
        setCookie("token", responseJson.token);
        console.log(responseJson);
        // history.push("/");
        window.location.assign("/adminpanel");
      });
    // .catch((err) => {
    //   console.log(err, "errorrr");
    //   err.json().then((error) => console.log(error, "errrrrrrrrrrrrrr"));
    //   // err.text().then(errorMessage=>{  console.error(errorMessage, 'errrrrrrrror');
    //   // const errors = JSON.parse(err);
    //   // console.log(errors);
    // });
  };
  return (
    <div className="login-layout">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <label className="email-styling">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => onChangeText(e, setEmail)}
              />
            </div>

            <div className="form-group">
              <label className="email-styling">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => onChangeText(e, setPassword)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={onSignIn}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
