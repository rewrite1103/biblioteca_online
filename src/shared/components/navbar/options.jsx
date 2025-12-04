import "../navbar/options.css"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a href="/">
                    <img className="navbar__logo" src="../../../../public/img/logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                    
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/books">Libros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/lends">Alquileres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/location">Contactanos</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar