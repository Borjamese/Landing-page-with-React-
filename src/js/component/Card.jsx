import React from "react";
import interior from "/workspace/Landing-page-with-React-/src/img/interior.jpg"

function Card() {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src="interior.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Una simple oficina</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
