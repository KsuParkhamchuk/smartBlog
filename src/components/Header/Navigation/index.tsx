import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { NavigationModel } from './models';
import { InputLabel, FormControl } from '@material-ui/core';

class Navigation extends React.Component<NavigationModel.Props, NavigationModel.State> {

    constructor(props: any) {
        super(props);
        this.state = {
            categories: ['Sport', 'Art', 'Politics'],
            currentCategory: 'Category'
        }
    }

    handleChange = (event: any) => {
        this.setState({
            currentCategory: event.target.value
        });
    };

    render() {
        return (
            <nav className="header__navigation d-flex justify-content-center">
                <Link to="/" className="header__navigation--link">Homepage</Link>
                <Link to="/popular" className="header__navigation--link">Popular</Link>
                <Link to="/sport" className="header__navigation--link">Sport</Link>
                <Link to="/category" className="header__navigation--link">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.currentCategory}
                            onChange={(e) => this.handleChange(e)}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Sport</MenuItem>
                            <MenuItem value={20}>Art</MenuItem>
                            <MenuItem value={30}>Politics</MenuItem>
                        </Select>
                </Link>
                <Link to="" className="header__navigation--link">User</Link>
                <Link to="" className="header__navigation--link">Homepage</Link>
            </nav>
        )
    }
}

export default Navigation