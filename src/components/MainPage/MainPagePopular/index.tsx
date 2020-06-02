import React from 'react'
import './style.css'

class MainPagePopularPosts extends React.Component{

    render(){
        return(
            <section className="popular">
        <div className="container">
            <h2 className="sectionTitle">Popular Posts</h2>
            <div className="row">
                <div className="col-4">
                    <div className="popular__bigPost">
                        <a className=" popular__postLink d-flex flex-column justify-content-between h-100" href="#">
                            <div className="popular__postCategory"><span>Travel</span></div>
                            <div className="popular__postInfo">
                                <div className="popular__postInfo--title">The 20 Biggest Fintech Companies In America 2019
                                </div>
                                <div className="popular__postInfo--date">February 19,2010</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row h-50">
                        <div className="popular__middlePost">
                            <a className="popular__postLink d-flex flex-column justify-content-between h-100" href="#">

                                <div className="popular__postCategory"><span>Travel</span></div>
                                <div className="popular__postInfo">
                                    <div className="popular__postInfo--title">The 20 Biggest Fintech Companies In America
                                        2019</div>
                                    <div className="popular__postInfo--date">February 19,2010</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row h-50">
                        <div className="col-6">
                            <div className="popular__smallPost">
                                <a className="popular__postLink d-flex flex-column justify-content-between h-100" href="#">
                                    <div className="popular__postCategory"><span>Travel</span></div>
                                    <div className="popular__postInfo">
                                        <div className="popular__postInfo--title">The 20 Biggest Fintech Companies In
                                            America 2019</div>
                                        <div className="popular__postInfo--date">February 19,2010</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="popular__smallPost">
                                <a className="popular__postLink d-flex flex-column justify-content-between h-100" href="#">

                                    <div className="popular__postCategory"><span>Travel</span></div>
                                    <div className="popular__postInfo">
                                        <div className="popular__postInfo--title">The 20 Biggest Fintech Companies In
                                            America 2019</div>
                                        <div className="popular__postInfo--date">February 19,2010</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}

export default MainPagePopularPosts