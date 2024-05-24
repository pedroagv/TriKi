const Configuracion = {
    LOAD: 0,
    SELECCION_MODO: 1,
    CONFUGURAR_USUARIO: 2,
    EMPEZAR_JUEGO: 3
};

class Utilidades {
    static ObtenerIP() {
        return new Promise((resolve, reject) => {
            // Hacer una solicitud HTTP GET a ipify
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    // Resuelve la promesa con la dirección IP
                    resolve(data.ip);
                })
                .catch(error => {
                    // Rechaza la promesa si hay un error
                    reject('Hubo un error al obtener la dirección IP: ' + error);
                });
        });
    }
}

export { Utilidades, Configuracion };
