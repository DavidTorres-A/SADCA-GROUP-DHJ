const NUMERO_WHATSAPP = "573245709684"; // <-- PON TU CELULAR REAL AQUÍ (ej. 573123456789)

function irAWhatsApp(motivo) {
    const mensaje = encodeURIComponent(`¡Hola equipo de DHJ Engineering! Estoy interesado en la Estación Agroindustrial SADCA 3 en 1. Me contacto para: ${motivo}. Deseo recibir información comercial, costos y asesoría técnica.`);
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');
}