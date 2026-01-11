import { useState } from 'react';

function RequestForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccionRecogida: '',
        direccionEntrega: '',
        fechaRecogida: '',
        numeroArticulos: '1',
        tipoServicio: '',
        instrucciones: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulamos el envío del formulario
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    const handleReset = () => {
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            direccionRecogida: '',
            direccionEntrega: '',
            fechaRecogida: '',
            numeroArticulos: '1',
            tipoServicio: '',
            instrucciones: ''
        });
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <section className="request-form-section section" id="solicitar">
                <div className="container">
                    <div className="form-container">
                        <div className="form-success">
                            <div className="form-success-icon">✓</div>
                            <h3>¡Solicitud Enviada!</h3>
                            <p>
                                Hemos recibido tu solicitud correctamente. Nos pondremos en contacto
                                contigo en las próximas 24 horas para confirmar los detalles del servicio.
                            </p>
                            <button className="btn btn-primary" onClick={handleReset} style={{ marginTop: '1.5rem' }}>
                                Enviar Otra Solicitud
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="request-form-section section" id="solicitar">
            <div className="container">
                <div className="section-title">
                    <h2>Solicitar Transporte</h2>
                    <p>
                        Rellena el siguiente formulario y nos pondremos en contacto contigo
                        para confirmar tu reserva.
                    </p>
                </div>

                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="nombre">
                                        Nombre Completo <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        placeholder="Tu nombre completo"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        Correo Electrónico <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="telefono">
                                        Teléfono <span className="required">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        placeholder="+34 600 000 000"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tipoServicio">
                                        Tipo de Servicio <span className="required">*</span>
                                    </label>
                                    <select
                                        id="tipoServicio"
                                        name="tipoServicio"
                                        value={formData.tipoServicio}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="mochila">Transporte de Mochilas</option>
                                        <option value="maleta">Transporte de Maletas</option>
                                        <option value="paquete">Paquetes y Bultos</option>
                                        <option value="express">Servicio Express</option>
                                        <option value="camino">Rutas del Camino</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="direccionRecogida">
                                    Dirección de Recogida <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="direccionRecogida"
                                    name="direccionRecogida"
                                    value={formData.direccionRecogida}
                                    onChange={handleChange}
                                    placeholder="Calle, número, ciudad, código postal"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="direccionEntrega">
                                    Dirección de Entrega <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="direccionEntrega"
                                    name="direccionEntrega"
                                    value={formData.direccionEntrega}
                                    onChange={handleChange}
                                    placeholder="Calle, número, ciudad, código postal"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fechaRecogida">
                                        Fecha de Recogida <span className="required">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="fechaRecogida"
                                        name="fechaRecogida"
                                        value={formData.fechaRecogida}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="numeroArticulos">
                                        Número de Artículos
                                    </label>
                                    <select
                                        id="numeroArticulos"
                                        name="numeroArticulos"
                                        value={formData.numeroArticulos}
                                        onChange={handleChange}
                                    >
                                        <option value="1">1 artículo</option>
                                        <option value="2">2 artículos</option>
                                        <option value="3">3 artículos</option>
                                        <option value="4">4 artículos</option>
                                        <option value="5+">5 o más artículos</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="instrucciones">
                                    Instrucciones Especiales
                                </label>
                                <textarea
                                    id="instrucciones"
                                    name="instrucciones"
                                    value={formData.instrucciones}
                                    onChange={handleChange}
                                    placeholder="Indica cualquier información adicional que debamos conocer (horarios preferidos, artículos frágiles, etc.)"
                                    rows="4"
                                />
                            </div>

                            <div className="form-submit">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-large"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RequestForm;
