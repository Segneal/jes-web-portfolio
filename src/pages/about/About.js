import React from "react";
import portrait from "../../Assets/Images/MainPhoto.JPG";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about-title">
        <h1>Mi Historia</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={portrait} alt=""></img>
        </div>
        <div className="about-description">
          <p>
            Desde pequeña solía cantar y ejecutar instumentos junto a mis
            hermanos , al crecer cada uno tomo su camino y este sueño de artista
            quedó allí esperando ... Muchos años después con la pérdida de mí
            amado hermano quien se despidió de mí con un amoroso abrazo
            diciendome que yo era capaz de lograr todo aquello que me proponía ,
            tome la desición de capacitarme como Modelo y Maquilladora
            Profesional en el instituto de uno de los diseñadores más
            importantes de Argentina
          </p>
          <p>
            Gracias a esto, comprendí que la misma energía que utilizamos los
            músicos trasmitiendo y generando emociones ,la podía utilizar en la
            pasarela como modelo y en las producciones como Maquilladora, hice
            del mundo de la moda mí mundo.
          </p>
          <p>
            Años más tarde y luego de trabajar coordinando grupos de
            profesionales de belleza para una importante Marca cosmética Fui
            invitada a capacitarme y participar como Productora de Moda del
            proyecto Expodesfiles en Argentina. Hoy Mí emprendimiento
            @irene_moda_ybelleza de Maquillaje y Produccion de moda conecta a
            muchas marcas y diseñadores, logrando mayor visibilidad en el
            mercado de la industria de la moda a través de los ciclos de
            desfiles , producción de editorial de moda y difusión en redes
            sociales
          </p>

          <p>
            Por esto, te invito a que me sigas en las redes sociales para que
            puedas recorrer este camino junto ami, el camino de la Moda y
            Belleza.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
