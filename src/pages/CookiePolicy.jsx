const CookiePolicy = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            <h1>Política de Cookies</h1>
            <p>Última actualización: [Fecha]</p>

            <section>
                <h2>1. ¿Qué son las cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita nuestro sitio web...</p>
            </section>

            <section>
                <h2>2. ¿Qué tipos de cookies utilizamos?</h2>
                <ul>
                    <li><strong>Técnicas:</strong> Necesarias para el funcionamiento de la web.</li>
                    <li><strong>Analíticas:</strong> Nos ayudan a entender cómo usas la web (ej. Google Analytics).</li>
                </ul>
            </section>

            <section>
                <h2>3. Cómo gestionar las cookies</h2>
                <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador...</p>
            </section>
        </div>
    );
};

export default CookiePolicy;