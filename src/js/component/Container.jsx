import React from "react";



//aqui aplicamos los children conforme lo vimos en la clase del 31 de marzo! :D (desestructuración)
function Container({children}) {
    return (
      <div>
        {children}
      </div>
    );
  }
  

export default Container;