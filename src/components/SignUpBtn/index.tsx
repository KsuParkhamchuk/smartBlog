import React from "react";
import "./signUp.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registaration from "../Registration";

class SugnUpBtn extends React.Component {
  render() {
    return (
      <Router>
        <div className="header__logo--signUp">
          <Dropdown>
            <Dropdown.Toggle className="signUpBtn" id="dropdown-basic">
              Sign in
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <form className="dropdownForm">
                <input
                  className="dropdownInput mb-3"
                  type="text"
                  placeholder="Login..."
                ></input>
                <input
                  className="dropdownInput"
                  type="password"
                  placeholder="Password..."
                ></input>
                <div className="dropdownExtraText mt-2">
                  Haven't got an account? <br />
                  <a href="/signUp">Sign up now</a>
                  
                </div>
                <div className="signInBtn__wrapper mt-3">
                  <button className="dropdownButton">Sign in</button>
                </div>
              </form>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Router>
    );
  }
}

export default SugnUpBtn;
