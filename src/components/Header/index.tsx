import React from "react"
import Navigation from './Navigation'
import DropdownItem from './Dropdown'
import './header.css'
import {Link} from 'react-router-dom'



class Header extends React.Component<any>{

    drawDropdownContent = () => {
            return (
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
                        <Link to="/signUp">Sign up now</Link>
                    </div>
                    <div className="signInBtn__wrapper mt-3">
                        <button className="dropdownButton">Sign in</button>
                    </div>
                </form>
            )
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="header__logo d-flex justify-content-center">
                        <h1 className="header__logo--text">Hikers</h1>
                        <DropdownItem dropdownName='sign up' dropdownContent={this.drawDropdownContent} />
                    </div>
                    <hr />
                    <Navigation />
                </header>
            </div>
        )
    }
}

export default Header