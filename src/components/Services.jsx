function Services() {
    const services = [
        {
            icon: '🎒',
            title: 'Transporte de Mochilas',
            description: 'De alojamiento en alojamiento a lo largo de las etapas del Camino de Santiago.',
            price: 'Desde 8€',
            unit: 'por etapa'
        },
        {
            icon: '🧳',
            title: 'Transporte de Maletas',
            description: 'Desde aeropuertos hasta alojamientos en el Camino de Santiago o si lo prefieres de etapa en etapa.',
            price: 'Desde 15€',
            unit: 'por envío'
        },
        {
            icon: '🚲',
            title: 'Transporte de bicicletas',
            description: 'Servicio de transporte de bicicletas. Perfecto para viajes en tren, avión o autobús.',
            price: 'Desde 25€',
            unit: 'por envío'
        },
    ];

    return (
        <section className="services section" id="servicios">
            <div className="container">
                <div className="section-title">
                    <h2>Nuestros Servicios</h2>
                    <p>
                        Ofrecemos soluciones de transporte de equipaje adaptadas a tus necesidades.
                        Desde mochilas para peregrinos hasta maletas para viajeros.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-price">
                                {service.price} <span>/ {service.unit}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
