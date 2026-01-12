import { useState } from 'react';
import { Link } from 'react-router-dom';

function TrackingForm() {
    const [trackingCode, setTrackingCode] = useState('');
    const [result, setResult] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setIsSearching(true);
        setError('');
        setResult(null);

        // Buscar en localStorage
        setTimeout(() => {
            const solicitudes = JSON.parse(localStorage.getItem('solicitudes') || '[]');
            const solicitud = solicitudes.find(s => s.codigo === trackingCode.toUpperCase());

            if (solicitud) {
                setResult(solicitud);
            } else {
                setError('No se encontró ninguna solicitud con ese código de seguimiento.');
            }
            setIsSearching(false);
        }, 800);
    };

    const getStatusInfo = (estado) => {
        switch (estado) {
            case 'pendiente':
                return {
                    label: 'Pendiente',
                    icon: '⏳',
                    color: '#f59e0b',
                    description: 'Tu solicitud está siendo revisada. Te contactaremos pronto.'
                };
            case 'confirmada':
                return {
                    label: 'Confirmada',
                    icon: '✅',
                    color: '#10b981',
                    description: '¡Tu solicitud ha sido confirmada! Nos vemos en la fecha acordada.'
                };
            case 'rechazada':
                return {
                    label: 'Rechazada',
                    icon: '❌',
                    color: '#ef4444',
                    description: 'Lo sentimos, no podemos atender tu solicitud. Te contactaremos para más información.'
                };
            default:
                return {
                    label: 'Desconocido',
                    icon: '❓',
                    color: '#6b7280',
                    description: 'Estado desconocido.'
                };
        }
    };

    const getServiceLabel = (tipo) => {
        const servicios = {
            'mochila': 'Transporte de Mochilas',
            'maleta': 'Transporte de Maletas',
            'bicicleta': 'Transporte de Bicicletas'
        };
        return servicios[tipo] || tipo;
    };

    return (
        <section className="tracking-section section" style={{ paddingTop: '120px' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Consultar Estado de Solicitud</h2>
                    <p>
                        Introduce tu código de seguimiento de 16 dígitos para ver el estado de tu solicitud.
                    </p>
                </div>

                <div className="form-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <form onSubmit={handleSearch}>
                        <div className="form-group">
                            <label htmlFor="trackingCode">
                                Código de Seguimiento <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="trackingCode"
                                value={trackingCode}
                                onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                                placeholder="Ej: A1B2C3D4E5F6G7H8"
                                maxLength={16}
                                style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontSize: '1.1rem',
                                    textAlign: 'center'
                                }}
                                required
                            />
                        </div>
                        <div className="form-submit">
                            <button
                                type="submit"
                                className="btn btn-primary btn-large"
                                disabled={isSearching || trackingCode.length < 16}
                            >
                                {isSearching ? 'Buscando...' : 'Consultar Estado'}
                            </button>
                        </div>
                    </form>

                    {error && (
                        <div className="tracking-error" style={{
                            marginTop: '2rem',
                            padding: '1rem',
                            background: '#fef2f2',
                            borderRadius: '0.5rem',
                            border: '1px solid #fecaca',
                            color: '#dc2626',
                            textAlign: 'center'
                        }}>
                            {error}
                        </div>
                    )}

                    {result && (
                        <div className="tracking-result" style={{ marginTop: '2rem' }}>
                            <div className="status-card" style={{
                                background: 'var(--color-gray-50)',
                                borderRadius: '1rem',
                                padding: '2rem',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem'
                                }}>
                                    {getStatusInfo(result.estado).icon}
                                </div>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '9999px',
                                    background: getStatusInfo(result.estado).color,
                                    color: 'white',
                                    fontWeight: '600',
                                    marginBottom: '1rem'
                                }}>
                                    {getStatusInfo(result.estado).label}
                                </div>
                                <p style={{ color: 'var(--color-gray-600)', marginBottom: '2rem' }}>
                                    {getStatusInfo(result.estado).description}
                                </p>

                                <div style={{
                                    background: 'white',
                                    borderRadius: '0.75rem',
                                    padding: '1.5rem',
                                    textAlign: 'left'
                                }}>
                                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                                        Detalles de la Solicitud
                                    </h4>
                                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                                        <div><strong>Código:</strong> {result.codigo}</div>
                                        <div><strong>Nombre:</strong> {result.nombre}</div>
                                        <div><strong>Servicio:</strong> {getServiceLabel(result.tipoServicio)}</div>
                                        <div><strong>Fecha de Recogida:</strong> {new Date(result.fechaRecogida).toLocaleDateString('es-ES')}</div>
                                        <div><strong>Recogida:</strong> {result.direccionRecogida}</div>
                                        <div><strong>Entrega:</strong> {result.direccionEntrega}</div>
                                        <div><strong>Artículos:</strong> {result.numeroArticulos}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/" className="btn btn-secondary">
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrackingForm;
