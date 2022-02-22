import React from "react";
import PropTypes from "prop-types";
import pexels from './pexels.jpg';


export function Card(props) {

    return (
      <div className="container">
     <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="container-top">
    <div className="card h-100">
      <img src={pexels} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.footer}</small>
      </div>
    </div>
   </div> 
   </div>
  <div className="col">
  <div className="middle-container">
    <div className="card h-100">
      <img src={pexels} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.footer}</small>
      </div>
    </div>
  </div>
  </div>
  <div className="col">
  <div className="bottom-container">
    <div className="card h-100">
      <img src= {pexels} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.footer}</small>
      </div>
    </div>
  </div>
</div>
</div>
</div>
);
}
Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	footer: PropTypes.string,
  // image: PropTypes.string
};
export default Card