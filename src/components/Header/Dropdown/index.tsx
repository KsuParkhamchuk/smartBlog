import React from "react";
import "./signUp.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registaration from "../../Registration";
import {DropdownModel} from "./models"

class DropdownItem extends React.Component<DropdownModel.Props, any> {
  constructor(props:any){
    super(props);
  }

  render() {
    return (
        <div className="header__logo--signUp">
          <Dropdown>
            <Dropdown.Toggle className="signUpBtn" id="dropdown-basic">
             {this.props.dropdownName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.props.dropdownContent()}
            </Dropdown.Menu>
          </Dropdown>
        </div>
    );
  }
}

export default DropdownItem;
