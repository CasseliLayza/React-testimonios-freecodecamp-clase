import React from "react";
import  "../hojasDeEstilos/Testimonio.css";

export function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img
            className="imagen-testimonio"
            src={require(`../imagenes/${props.nombreImagen}.png`)}
            alt='Foto de' />

            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio" ><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
                <p className="cargo-testimonio" >{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio" >"{props.testimonio}"</p>
            </div>

 
        </div>
    );
   
}



// export default Testimonio;