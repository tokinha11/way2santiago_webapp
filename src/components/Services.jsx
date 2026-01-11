function Services() {
    const services = [
        {
            icon: '🎒',
            title: 'Transporte de Mochilas',
            description: 'Ideal para senderistas y peregrinos. Recogemos tu mochila en tu alojamiento y la llevamos al siguiente punto.',
            price: 'Desde 8€',
            unit: 'por etapa'
        },
        {
            icon: '🧳',
            title: 'Transporte de Maletas',
            description: 'Servicio puerta a puerta para tus maletas. Perfecto para viajes en tren, avión o autobús.',
            price: 'Desde 15€',
            unit: 'por envío'
        },
        {
            icon: '📦',
            title: 'Paquetes y Bultos',
            description: 'Transportamos paquetes de cualquier tamaño. Recogida y entrega en la dirección que indiques.',
            price: 'Desde 12€',
            unit: 'por paquete'
        },
        {
            icon: '🚐',
            title: 'Servicio Express',
            description: 'Entrega urgente en el mismo día. Para cuando necesitas que tu equipaje llegue rápido.',
            price: 'Desde 25€',
            unit: 'por envío'
        },
        {
            icon: '🗺️',
            title: 'Rutas del Camino',
            description: 'Especializados en el Camino de Santiago. Conocemos todas las rutas y alojamientos.',
            price: 'Desde 6€',
            unit: 'por etapa'
        },
        {
            icon: '📱',
            title: 'Seguimiento GPS',
            description: 'Rastrea tu equipaje en tiempo real desde nuestra app. Tranquilidad total durante el viaje.',
            price: 'Incluido',
            unit: 'gratis'
        }
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
