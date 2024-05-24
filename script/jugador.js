class Jugador {
    constructor(id, ip, nombre, historial) {
        this.id = id;
        this.ip = ip;
        this.nombre = nombre;
        this.historial = historial;
    }

    static CrearJugador(jugador) {
        const lista = JSON.parse(localStorage.getItem('lista-jugadores')) || [];
        lista.push(jugador);
        localStorage.setItem('lista-jugadores', JSON.stringify(lista));
    }

    static MostrarListadoJugadores() {
        const lista = JSON.parse(localStorage.getItem('lista-jugadores'));
        console.log(lista);
    }

    static JugadorEnSesionONline() {
        //const lista = JSON.parse(localStorage.getItem('lista-jugadores'));
        //console.log(lista);
    }



}

export default Jugador;
