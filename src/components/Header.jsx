import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (!isHomePage) {
            // Si no estamos en la página principal, navegar y luego scroll
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <Link to="/" className="logo">
                        <span className="logo-icon">🎒</span>
                        <span>Way2Santiago</span>
                    </Link>

                    <nav>
                        <ul className="nav-links">
                            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Inicio</a></li>
                            <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }}>Nosotros</a></li>
                            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>Servicios</a></li>
                        </ul>
                    </nav>

                    <Link to="/solicitar" className="btn btn-primary header-cta">
                        Solicitar Servicio
                    </Link>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menú"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Inicio</a></li>
                    <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }}>Nosotros</a></li>
                    <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>Servicios</a></li>
                    <li><Link to="/solicitar" onClick={() => setIsMobileMenuOpen(false)}>Solicitar Servicio</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
