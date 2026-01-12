import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'

function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />

                <section className="section" style={{ backgroundColor: 'var(--color-gray-50)', textAlign: 'center' }}>
                    <div className="container">
                        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>¿Ya tienes una solicitud en curso?</h2>
                            <p style={{ marginBottom: '2rem', color: 'var(--color-gray-600)' }}>
                                Consulta el estado de tu transporte utilizando tu código de seguimiento de 16 dígitos.
                            </p>
                            <Link to="/seguimiento" className="btn btn-secondary">
                                Consultar Estado de Envío
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default HomePage
