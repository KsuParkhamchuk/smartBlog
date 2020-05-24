import React from "react"
import Navigation from '../Navigation'
import SignUpBtn from '../SignUpBtn'
import './header.css'



class Header extends React.Component<any>{
render() {
    return(
        <div>
            <header className="header">
                <div className="header__logo d-flex justify-content-center">
                    <h1 className="header__logo--text">Hikers</h1>
                    <SignUpBtn/>
                </div>
                <hr/>
                <Navigation/>
            </header>
        </div>
    )
}
}

export default Header