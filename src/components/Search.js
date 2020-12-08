import React from 'react'
import "./Search.css";
import showImg from "../images/frozen.jpg";


function Search() {
    return (
        <div>
            <div className="header"><div className="title">Show Finder</div></div>
            <div>            
                <div className="container">
                <input type="text"/><div className="btn-search">Search</div>
                <div>
                    <div className="show-details-container">
                    <div className="show-img"><img alt="showimg" src={showImg} className="show-Img-disp" /></div>
                    <div className="show-description-container">
                        <div className="show-title">Show Title</div>
                        <div className="show-description">Show Title</div>
                        <div className="btn-show-episode">Show Episodes</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Search