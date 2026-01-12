function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="logo-icon">🎒</span>
                            <span>TransEquipaje</span>
                        </div>
                        <p>
                            Tu socio de confianza para el transporte de equipaje.
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
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#nosotros">Nosotros</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#solicitar">Solicitar</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Servicios</h4>
                        <ul className="footer-links">
                            <li><a href="#servicios">Transporte de Mochilas</a></li>
                            <li><a href="#servicios">Transporte de Maletas</a></li>
                            <li><a href="#servicios">Servicio Express</a></li>
                            <li><a href="#servicios">Rutas del Camino</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <ul className="footer-links contact-info">
                            <li>
                                <span className="icon">📍</span>
                                <span>Calle Principal 123, Madrid</span>
                            </li>
                            <li>
                                <span className="icon">📞</span>
                                <span>+34 900 123 456</span>
                            </li>
                            <li>
                                <span className="icon">✉️</span>
                                <span>info@transequipaje.es</span>
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
