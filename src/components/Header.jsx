import { useState, useEffect } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="logo">
                        <span className="logo-icon">🎒</span>
                        <span>Way2Santiago</span>
                    </div>

                    <nav>
                        <ul className="nav-links">
                            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Inicio</a></li>
                            <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }}>Nosotros</a></li>
                            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>Servicios</a></li>
                            <li><a href="#solicitar" onClick={(e) => { e.preventDefault(); scrollToSection('solicitar'); }}>Solicitar</a></li>
                        </ul>
                    </nav>

                    <a
                        href="#solicitar"
                        className="btn btn-primary header-cta"
                        onClick={(e) => { e.preventDefault(); scrollToSection('solicitar'); }}
                    >
                        Solicitar Servicio
                    </a>

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
                    <li><a href="#solicitar" onClick={(e) => { e.preventDefault(); scrollToSection('solicitar'); }}>Solicitar Servicio</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
