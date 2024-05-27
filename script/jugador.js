class Jugador {
    constructor(id, nombre, tablero) {
        this.id = id;
        this.nombre = nombre;
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
