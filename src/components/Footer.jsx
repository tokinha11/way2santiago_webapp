import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="logo-icon">🎒</span>
                            <span>Way2Santiago</span>
                        </div>
                        <p>
                            Tu socio de confianza para el transporte de mochilas.
                            Viaja ligero, nosotros nos encargamos del resto.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">📘</a>
                            <a href="#" className="social-link" aria-label="Instagram">📷</a>
                            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                            <a href="#" className="social-link" aria-label="WhatsApp">💬</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Enlaces Rápidos</h4>
                        <ul className="footer-links">
                            <li><HashLink to="/#inicio">Inicio</HashLink></li>
                            <li><HashLink to="/#nosotros">Nosotros</HashLink></li>
                            <li><HashLink to="/#servicios">Servicios</HashLink></li>
                            <li><Link to="/solicitar">Solicitar</Link></li>
                            <li><Link to="/seguimiento">Consultar</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <ul className="footer-links contact-info">
                            <li>
                                <span className="icon">📍</span>
                                <span>Sarria, Lugo</span>
                            </li>
                            <li>
                                <span className="icon">📞</span>
                                <span>+34 634 08 87 57</span>
                            </li>
                            <li>
                                <span className="icon">✉️</span>
                                <span>waytosantiago@hotmail.com</span>
                            </li>
                            <li>
                                <span className="icon">🕐</span>
                                <span>Lun - Sáb: 8:00 - 20:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Way2Santiago. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
