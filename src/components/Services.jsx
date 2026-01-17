function Services() {
    const services = [
        {
            icon: '🎒',
            title: 'Transporte de Mochilas',
            description: 'De alojamiento en alojamiento a lo largo de las etapas del Camino de Santiago.',
            price: 'Desde 6€',
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
            unit: 'por bicicleta'
        },
        {
            icon: '🎒',
            title: 'Pack Sarria-Santiago',
            description: 'Pack completo para todas las etapas del Camino Francés desde Sarria.',
            price: 'Desde 20€',
            unit: 'por persona'
        },
        {
            icon: '🎒',
            title: 'Pack para grupos',
            description: 'Pack completo para grupos de mas de 10 personas.',
            price: 'Desde 15€',
            unit: 'por persona'
        }
    ];

    return (
        <section className="services section" id="servicios">
            <div className="container">
                <div className="section-title">
                    <h2>Nuestros Servicios</h2>
                    <p>
                        Ofrecemos soluciones de transporte de equipaje adaptadas a tus necesidades.
                        Desde mochilas y maletas hasta bicicletas.
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
