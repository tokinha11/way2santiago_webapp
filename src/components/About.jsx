function About() {
    const features = [
        {
            icon: '🛡️',
            title: 'Máxima Seguridad',
            description: 'Tu equipaje está asegurado durante todo el trayecto.'
        },
        {
            icon: '⚡',
            title: 'Entrega Rápida',
            description: 'Cumplimos con los tiempos de entrega acordados.'
        }
    ];

    return (
        <section className="about section" id="nosotros">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2>¿Quiénes Somos?</h2>
                        <p>
                            Somos una empresa especializada en el transporte de equipaje para viajeros,
                            senderistas y cualquier persona que necesite mover sus pertenencias de un
                            lugar a otro de forma segura y eficiente.
                        </p>
                        <p>
                            Con más de una década de experiencia, hemos desarrollado un sistema de
                            logística que garantiza la máxima seguridad y puntualidad en cada envío.
                            Nuestro compromiso es hacer tu viaje más cómodo.
                        </p>

                        <div className="about-features">
                            {features.map((feature, index) => (
                                <div className="feature-item" key={index}>
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-text">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <img
                                src={`${import.meta.env.BASE_URL}catedral.jpg`}
                                alt="Transporte de equipaje"
                            />
                        </div>
                        <div className="experience-badge">
                            <span className="years">5 ⭐</span>
                            <span className="text">Valoracion de nuestros usuarios</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
