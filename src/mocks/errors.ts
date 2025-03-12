export const errorMsg: { [key:number]: string, default: string } = {
    400: "Hubo un problema con tu solicitud. Por favor, verifica los datos e inténtalo de nuevo.",
    401: "Por favor, revisa los datos.",
    403: "No estás autorizado o el registro ya existe.",
    404: "No encontramos lo que estás buscando. Por favor, verifica la URL o intenta más tarde.",
    409: "Datos inválidos.", // Añadido para el código 409
    500: "¡Ups! Algo salió mal en nuestro servidor. Por favor, inténtalo de nuevo más tarde.",
    502: "El servidor está teniendo problemas. Por favor, inténtalo de nuevo más tarde.",
    503: "El servicio no está disponible en este momento. Por favor, inténtalo de nuevo más tarde.",
    504: "El servidor está tardando demasiado en responder. Por favor, inténtalo de nuevo más tarde.",
    default: "Ocurrió un error desconocido. Por favor, inténtalo de nuevo más tarde.",
};