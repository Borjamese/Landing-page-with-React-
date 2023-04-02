import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-3"> <strong> Mi primer landing page con react! </strong></h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        Si haces click en el botón de abajo no hará absolutamente nada, es tan inútil como recuperar a tu ex.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Hazme click!
        </a>
      </p>
    </div>
  );
}

export default Jumbotron;
