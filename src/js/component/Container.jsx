import React from "react";

function Container(props) {
    return (
      <div className="row">
        {props.children}
      </div>
    );
  }
  

export default Container;