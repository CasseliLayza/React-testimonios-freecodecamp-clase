import React from "react";
import "./App.css";
import { Testimonio } from "./componentes/Testimonio";
import testimonios from "./datosTestimonios/testimonios";


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          {testimonios.map((testimonio, index) => (
            <Testimonio
              key={index}
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
              nombreImagen={testimonio.nombreImagen}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default App;
