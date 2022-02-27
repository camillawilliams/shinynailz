import React from "react";
import PropTypes from "prop-types";


export const MyNavbar = () => {
    
    return(

    <div className="container-nav">
            <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Book</a>
            </li>
            </ul>
    </div>
    );
}
export default MyNavbar