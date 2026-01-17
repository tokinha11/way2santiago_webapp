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
                        ⭐ Servicio de Confianza
                    </div>

                    <h1>
                        Transporte de Mochilas <span>Seguro y Rápido</span>
                    </h1>

                    <p className="hero-description">
                        Somos una empresa joven y cercana, nacida con una idea clara: hacer que tu Camino de Santiago sea más cómodo y ligero.
                        Con muchas ilusión y el corazón puesto en cada etapa, ofrecemos un servicio de transporte de mochilas entre alojamientos
                        pensado para que solo te preocupes de disfrutar del Camino y vivir la experiencia al máximo.
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
