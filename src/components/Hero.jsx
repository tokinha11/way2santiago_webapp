import { Link } from 'react-router-dom';

function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="inicio">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        ⭐ Servicio de confianza
                    </div>

                    <h1>
                        Transporte de Equipaje <span>Seguro y Rápido</span>
                    </h1>

                    <p className="hero-description">
                        Nos encargamos de transportar tu equipaje de forma segura y puntual.
                        Viaja ligero mientras nosotros llevamos tus pertenencias a su destino.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/solicitar" className="btn btn-primary btn-large">
                            Solicitar Transporte
                        </Link>
                        <button
                            className="btn btn-secondary btn-large"
                            onClick={() => scrollToSection('servicios')}
                            style={{ background: 'transparent', color: 'white', borderColor: 'white' }}
                        >
                            Ver Servicios
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">15K+</div>
                            <div className="stat-label">Envíos Completados</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Clientes Satisfechos</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Soporte Disponible</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
