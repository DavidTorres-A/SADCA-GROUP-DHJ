// CONFIGURACIÓN DE TU NUMERO DE WHATSAPP
const NUMERO_WHATSAPP = "573245709684"; // <-- PON TU NÚMERO AQUÍ (Ej: 573123456789)

function irAWhatsApp(motivo) {
    // Genera un mensaje predeterminado y personalizado para que sepas qué quería el cliente
    const mensaje = encodeURIComponent(`¡Hola! Estoy interesado en el proyecto SADCA. Me contacto para: ${motivo}. ¿Me podrías brindar más información?`);
    
    // Crea el enlace directo API de WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${mensaje}`;
    
    // Abre WhatsApp en una pestaña nueva
    window.open(urlWhatsApp, '_blank');
}