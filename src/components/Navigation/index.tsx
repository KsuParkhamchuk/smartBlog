import React from 'react'
import './navigation.css'

class Navigation extends React.Component {

    render() {
        return (
            <nav className="header__navigation d-flex justify-content-center">
                <a href="" className="header__navigation--link">Homepage</a>
                <a href="" className="header__navigation--link">Popular</a>
                <a href="" className="header__navigation--link">Sport</a>
                <a href="" className="header__navigation--link">User</a>
                <a href="" className="header__navigation--link">Homepage</a>
            </nav>
        )
    }
}

export default Navigation