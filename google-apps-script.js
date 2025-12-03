// Google Apps Script para recibir datos del formulario y guardarlos en Google Sheets
// Instrucciones de configuración:
// 1. Ir a https://script.google.com/
// 2. Crear un nuevo proyecto
// 3. Pegar este código
// 4. Crear un Google Sheet y copiar su ID
// 5. Actualizar SHEET_ID con el ID de tu hoja
// 6. Crear un Webhook de Discord:
//    - En tu servidor de Discord: Server Settings → Integrations → Webhooks → New Webhook
//    - Copiar la URL del webhook y pegarla en DISCORD_WEBHOOK_URL
// 7. IMPORTANTE: Configurar el manifiesto (appsscript.json):
//    - En el editor, ve al menú lateral izquierdo y haz clic en "Configuración del proyecto" (⚙️)
//    - Marca la casilla "Mostrar el archivo de manifiesto 'appsscript.json' en el editor"
//    - Vuelve al editor, verás un nuevo archivo "appsscript.json"
//    - Copia el contenido del archivo "appsscript.json" que está junto a este archivo
// 8. Desplegar como Web App:
//    - Ejecutar como: Yo
//    - Quién tiene acceso: Cualquiera
// 9. Copiar la URL del Web App y agregarla como VITE_GOOGLE_SCRIPT_URL en tu .env

const SHEET_ID = '1xbrSdC1Qx_N04QlxKA5RaBsugDUhaVvW6_6x-txWZMc'; // Reemplazar con el ID de tu Google Sheet
const DISCORD_WEBHOOK_URL =
    'https://discord.com/api/webhooks/1445615975771672788/epYoXv2CxS73fLXOHak_z6QMxay5_pIj6U_sM6PuoBn_f3WGbpi_yKCQTaNhi0gfNB8p'; // Reemplazar con tu webhook de Discord

function doPost(e) {
    try {
        // Parsear los datos recibidos
        const data = JSON.parse(e.postData.contents);

        // Abrir la hoja de cálculo
        const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

        // Si es la primera vez, agregar encabezados
        if (sheet.getLastRow() === 0) {
            sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Teléfono', 'Ciudad']);
        }

        // Agregar los datos
        sheet.appendRow([
            new Date(data.fecha),
            data.nombre,
            data.email,
            data.telefono,
            data.ciudad,
        ]);

        // Enviar notificación a Discord
        sendDiscordNotification(data);

        // Respuesta exitosa
        return ContentService.createTextOutput(
            JSON.stringify({
                status: 'success',
                message: 'Datos guardados correctamente',
            })
        ).setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        // Respuesta de error
        return ContentService.createTextOutput(
            JSON.stringify({
                status: 'error',
                message: error.toString(),
            })
        ).setMimeType(ContentService.MimeType.JSON);
    }
}

// Función para enviar notificación a Discord
function sendDiscordNotification(data) {
    if (
        !DISCORD_WEBHOOK_URL ||
        DISCORD_WEBHOOK_URL === 'TU_DISCORD_WEBHOOK_URL_AQUI'
    ) {
        Logger.log('Discord webhook no configurado');
        return; // No enviar si no está configurado
    }

    try {
        const embed = {
            title: '🎉 Nuevo Registro en SimpleBar',
            color: 0x0e6fff, // Color primario de SimpleBar
            fields: [
                {
                    name: '👤 Nombre',
                    value: data.nombre || 'No proporcionado',
                    inline: true,
                },
                {
                    name: '📧 Email',
                    value: data.email || 'No proporcionado',
                    inline: true,
                },
                {
                    name: '📱 Teléfono',
                    value: data.telefono || 'No proporcionado',
                    inline: true,
                },
                {
                    name: '📍 Ciudad',
                    value: data.ciudad || 'No proporcionado',
                    inline: true,
                },
                {
                    name: '🕒 Fecha',
                    value: new Date(data.fecha).toLocaleString('es-AR', {
                        timeZone: 'America/Argentina/Buenos_Aires',
                        dateStyle: 'full',
                        timeStyle: 'short',
                    }),
                    inline: false,
                },
            ],
            footer: {
                text: 'SimpleBar - Sistema de Gestión',
            },
            timestamp: new Date(data.fecha).toISOString(),
        };

        const payload = {
            username: 'SimpleBar Registros',
            embeds: [embed],
        };

        const options = {
            method: 'post',
            contentType: 'application/json',
            payload: JSON.stringify(payload),
            muteHttpExceptions: true,
        };

        Logger.log('Enviando a Discord...');
        const response = UrlFetchApp.fetch(DISCORD_WEBHOOK_URL, options);
        const responseCode = response.getResponseCode();
        const responseBody = response.getContentText();

        Logger.log('Discord Response Code: ' + responseCode);
        Logger.log('Discord Response Body: ' + responseBody);

        if (responseCode === 204 || responseCode === 200) {
            Logger.log('✅ Notificación enviada a Discord exitosamente');
        } else {
            Logger.log('⚠️ Discord respondió con código: ' + responseCode);
        }
    } catch (error) {
        Logger.log(
            '❌ Error al enviar notificación a Discord: ' + error.toString()
        );
        // No lanzar error para que el registro se complete aunque falle Discord
    }
}

// Función de prueba (opcional)
function testDoPost() {
    const testData = {
        postData: {
            contents: JSON.stringify({
                fecha: new Date().toISOString(),
                nombre: 'Test User',
                email: 'test@example.com',
                telefono: '+54 9 1234567890',
                ciudad: 'Buenos Aires',
            }),
        },
    };

    const response = doPost(testData);
    Logger.log(response.getContent());
}

// Función para probar solo Discord
function testDiscord() {
    const testData = {
        fecha: new Date().toISOString(),
        nombre: 'Test Discord',
        email: 'test@discord.com',
        telefono: '+54 9 3624123456',
        ciudad: 'Resistencia, Chaco',
    };

    Logger.log('Probando envío a Discord...');
    Logger.log('Webhook URL: ' + DISCORD_WEBHOOK_URL);

    try {
        sendDiscordNotification(testData);
        Logger.log('✅ Notificación enviada exitosamente');
    } catch (error) {
        Logger.log('❌ Error: ' + error.toString());
    }
}
