const ModoJuego = {
    UNO_CONTRA_UNO: '1 vs 1',
    UNO_CONTRA_PC: '1 vs PC',
    ONLINE: 'Online'
};

class Juego {
    constructor(id, modo, jugadores) {
        this.id = id;
        this.modo = modo;
        this.jugadores = jugadores;
    }

    static CrearJuego(juego) {
        const lista = JSON.parse(localStorage.getItem('lista-jugadores')) || [];
        lista.push(jugador);
        localStorage.setItem('lista-jugadores', JSON.stringify(lista));
    }

    static GuardarResultadoJuego(juego) {

    }
}

export { Juego, ModoJuego };
