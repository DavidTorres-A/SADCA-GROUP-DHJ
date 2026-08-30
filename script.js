const NUMERO_WHATSAPP = "573245709684"; // <-- Reemplaza por tu número real de celular

function irAWhatsApp(motivo) {
    const mensaje = encodeURIComponent(`¡Hola equipo DHJ! Estoy interesado en la Estación Agroindustrial SADCA 3 en 1. Me contacto para: ${motivo}. Quedo atento a su respuesta.`);
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');
}