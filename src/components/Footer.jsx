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
                            <span className="logo-icon">
                                <img src="/logo.png" alt="Logo" />
                            </span>
                            <span>Way2Santiago</span>
                        </div>
                        <p>
                            Tu socio de confianza para el transporte de mochilas.
                        </p>
                        <p>
                            No Backpack, No Problem!
                        </p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/way2santiagoo/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <img src="/instagram.png" alt="Instagram" />
                            </a>
                            <a href="https://www.tiktok.com/@way2santiago" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                                <img src="/tiktok.png" alt="TikTok" />
                            </a>
                            <a href="https://wa.me/0034634088757" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                                <img src="/whatsapp.png" alt="WhatsApp" />
                            </a>
                            <a href="mailto:waytosantiago@hotmail.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Email">
                                <img src="/email.png" alt="Email" />
                            </a>
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
                                <span>Rúa José Sánchez Arias, 2, 27600 Sarria, Lugo, España</span>
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
                                <span>Lun - Dom: 8:00 - 20:00</span>
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
