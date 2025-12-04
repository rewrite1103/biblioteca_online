
import "../components/about.css"
import { useEffect, useState } from "react";
import { useShow } from "../../../shared/hooks/UseShow.jsx";

import image from "../../../../public/img/lector.svg"



const About = () => {

    let showImage = useShow();


    return (
        <div>
            {/* Acerca de Nosotros */}
            <section id="inicio" className="about">
                <div className="about__container container">
                    <div className="about__row row">

                        <div className="about__content col-sm">
                            <h1 className="about__title">
                                Bienvenido a <span className="about__highlight">Library Online</span>
                            </h1>

                            <p className="about__description">
                                En Library Online, somos tu fuente confiable para libros de alta calidad.
                                Ya sea que necesites libros para estudio o entretenimiento, tenemos todo lo que necesitas
                                para satisfacer tu pasión por la lectura.
                            </p>

                            <a href="/books" className="about__button btn btn-primary">
                                Ver Libros
                            </a>
                        </div>

                        <div className="about__image-wrapper  col-sm">
                            <img
                                src={image}
                                alt="Library Online"
                                
                                className={showImage ? 'about__image image--show img-fluid' : 'image--hide'}

                            />
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
export default About