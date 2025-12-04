
import "../components/map.css"
import { useShow } from "../../../shared/hooks/UseShow.jsx";

const Location = () => {
    let showMap = useShow();

    return (




        <section id="contacto" className="contact-section">
            <div className="contact-section__container container">

                <h2 className="contact-section__title">Visítanos</h2>

                <div className="contact-section__row row">

                    <div className="contact-section__map col-lg-7 col-md-6">
                        <img
                            className={showMap ? "contact-section__map-img image--show" : "image--hide"}
                            src="../../../../public/img/Api_Google.png"
                            alt="Mapa de ubicación"
                        />
                    </div>

                 
                    <div className="contact-section__info col-lg-4 col-md-5">

                        <div className="contact-item">
                            <i className="fa-solid fa-phone contact-item__icon"></i>
                            <a className="contact-item__link" href="tel:+112345678">+1 1234 5678</a>
                        </div>

                        <div className="contact-item">
                            <i className="fa-solid fa-envelope contact-item__icon"></i>
                            <a className="contact-item__link" href="mailto:contacto@empresa.com">bliblioteca_online@gmail.com</a>
                        </div>

                        <div className="contact-item">
                            <i className="fa-brands fa-facebook-messenger contact-item__icon"></i>
                            <a className="contact-item__link" href="https://www.facebook.com/LibraryOnline">Library Online</a>
                        </div>

                        <div className="contact-item">
                            <i className="fa-solid fa-map-marker-alt contact-item__icon"></i>
                            <p className="contact-item__text">
                                Calle 123, Barrio San judas, Ciudad de Mexico
                            </p>
                        </div>

                    </div>



                </div>
            </div>
        </section>
    )
}

export default Location