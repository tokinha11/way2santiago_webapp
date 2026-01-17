import CookieConsent from "react-cookie-consent";
import { useNavigate } from "react-router-dom";

const CookieBanner = () => {
    const navigate = useNavigate();

    return (
        <CookieConsent
            location="bottom"
            buttonText="Aceptar todas"
            declineButtonText="Rechazar"
            enableDeclineButton
            cookieName="Way2SantiagoCookieConsent"

            style={{
                background: "var(--color-primary-dark)", // #0c1a5c
                color: "var(--color-white)",
                fontSize: "var(--font-size-sm)",
                fontFamily: "var(--font-family)",
                boxShadow: "0 -4px 10px rgba(0,0,0,0.1)",
                padding: "1rem",
                zIndex: 1001 // Superior al Header (1000)
            }}

            buttonStyle={{
                background: "var(--color-accent)", // #fde723
                color: "var(--color-primary-dark)",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "var(--radius-md)",
                padding: "8px 20px",
                border: "none"
            }}

            declineButtonStyle={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "var(--color-white)",
                fontSize: "14px",
                borderRadius: "var(--radius-md)",
                padding: "8px 15px",
                marginRight: "10px"
            }}
            expires={150}
        >
            <div style={{ maxWidth: "90%" }}>
                🍪 <strong>Uso de Cookies:</strong> Utilizamos cookies propias y de terceros para mejorar tu experiencia en el Camino.
                Si continúas navegando, consideramos que aceptas su uso. Puedes consultar nuestra{" "}
                <span
                    onClick={() => navigate("/politica-cookies")}
                    style={{
                        color: "var(--color-accent)",
                        cursor: "pointer",
                        textDecoration: "underline",
                        fontWeight: "bold"
                    }}
                >
                    Política de Cookies
                </span>.
            </div>
        </CookieConsent>
    );
};

export default CookieBanner;