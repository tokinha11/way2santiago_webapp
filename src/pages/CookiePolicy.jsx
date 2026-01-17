import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}> {/* Padding para compensar el Header fijo */}
                <section className="section" style={{ background: 'var(--color-gray-50)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            <h1 style={{ color: 'var(--color-primary)' }}>Política de Cookies</h1>
                            <p>Última actualización: {new Date().toLocaleDateString()}</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--color-gray-700)' }}>
                            <article>
                                <h3>1. ¿Qué son las cookies?</h3>
                                <p>
                                    Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador
                                    para mejorar la experiencia de usuario, recordar preferencias y analizar el tráfico.
                                    En <strong>Way2Santiago</strong>, las usamos para garantizar que tu solicitud de transporte
                                    se procese correctamente.
                                </p>
                            </article>

                            <article>
                                <h3>2. ¿Qué tipos de cookies utilizamos?</h3>
                                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Cookies Técnicas (Necesarias):</strong> Son esenciales para que la web funcione,
                                        como recordar tu sesión o los datos del formulario de transporte mientras navegas.
                                    </li>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Cookies Analíticas:</strong> Nos ayudan a entender qué rutas o servicios son
                                        más visitados para mejorar nuestra oferta. La información se recopila de forma anónima.
                                    </li>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Cookies de Funcionalidad:</strong> Permiten recordar tus preferencias,
                                        como el idioma o la región en la que te encuentras.
                                    </li>
                                </ul>
                            </article>

                            <article>
                                <h3>3. Gestión de cookies</h3>
                                <p>
                                    Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante
                                    la configuración de las opciones del navegador instalado en tu ordenador:
                                </p>
                                <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Google Chrome</a></li>
                                    <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Mozilla Firefox</a></li>
                                    <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Safari</a></li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default CookiePolicy;