import React from "react";
import "./QuienesSomos.css";

const QuieneSomos = () => {
  return (
    <>
      <div className="container-quienes">
        <div className="quienes">
          <div className="titulos-quienes">Quienes Somos</div>
          <p>
            Somo una Empresa dedicada al servicio de las personas con mas de 20
            años de experiencia y conociendo las necesidades de las personas, al
            tratar de llegar a la dichos productos eventualmente sacados del
            campo, conocemos las necesidades de las personas a la hora de
            conseguir estos productos totalmente frescos, conocemos la necesidad
            de nuestros campesinos y la oportunidad que por medio de nostros
            podemos brindar.
          </p>
        </div>
        <div className="mision">
          <div className="titulos-quienes">Misión</div>
          <p>
            Ofrecer un servicio de calidad en todo el proceso, desde la
            producción a la comercialización de fruta adaptándonos a las
            necesidades de cada cliente. Del mismo modo, implicar a nuestros
            empleados trabajando en equipo para lograr la excelencia.
          </p>
        </div>
        <div className="vision">
          <div className="titulos-quienes">Visión</div>
          <p>
            Crecer en nuestra presencia a nivel internacional y nacional a
            través de la innovación, la mejora continua y la generación de valor
            a nuestros grupos de interés.
          </p>
        </div>
      </div>
    </>
  );
};

export default QuieneSomos;
