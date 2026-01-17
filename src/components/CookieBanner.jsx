import CookieConsent from "react-cookie-consent";
import { useNavigate } from "react-router-dom";

const CookieBanner = () => {
    const navigate = useNavigate();

    return (
        <CookieConsent
            location="bottom"
            buttonText="Aceptar todas"
            declineButtonText="Rechazar opcionales"
            enableDeclineButton
            cookieName="UserConsentCookie"
            style={{ background: "#2B373B", color: "#fff", textAlign: "left" }}
            buttonStyle={{ background: "#4e503b", color: "#fff", fontSize: "13px", borderRadius: "3px" }}
            declineButtonStyle={{ background: "#777", color: "#fff", fontSize: "13px", borderRadius: "3px" }}
            expires={150}
            onAccept={() => {
                console.log("El usuario aceptó las cookies");
                // Aquí podrías disparar la carga de Google Analytics
            }}
        >
            Este sitio web utiliza cookies para mejorar su experiencia. Al continuar navegando,
            consideramos que acepta nuestra{" "}
            <span
                onClick={() => navigate("/politica-cookies")}
                style={{ color: "#ffd700", cursor: "pointer", textDecoration: "underline" }}
            >
                política de cookies
            </span>.
        </CookieConsent>
    );
};

export default CookieBanner;