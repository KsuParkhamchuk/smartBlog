import React from 'react'
import SlickSlider from './SlickSlider';
import MainPagePopularPosts from './MainPagePopular';


class MainPage extends React.Component {

    render(){
        return(
            <div>
            <SlickSlider/>
            <MainPagePopularPosts/>
            </div>
        )
    }
}

export default MainPage