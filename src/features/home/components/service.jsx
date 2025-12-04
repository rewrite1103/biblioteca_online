
import "../components/service.css";

const Service = () => {
  return (
    <section id="servicios" className="services-section">
      <div className="services-section__container container">

        <h2 className="services-section__title">Nuestros Servicios</h2>

        <div className="services-section__list row">

        
          <div className="service-card col-lg-5 col-md-6">
            <div className="service-card__icon-container">
              <i className="fa-solid fa-book-open service-card__icon"></i>
            </div>
            <h3 className="service-card__title">Alquiler de Libros</h3>
            <p className="service-card__description">
              Contamos con una amplia variedad de libros académicos, novelas y textos técnicos disponibles para alquiler a precios accesibles.
            </p>
          </div>

      
          <div className="service-card col-lg-5 col-md-6">
            <div className="service-card__icon-container">
              <i className="fa-solid fa-chalkboard-teacher service-card__icon"></i>
            </div>
            <h3 className="service-card__title">Asesoría Académica</h3>
            <p className="service-card__description">
              Brindamos asesoría personalizada para estudiantes en diferentes áreas, ayudando a mejorar el aprendizaje y el rendimiento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;
