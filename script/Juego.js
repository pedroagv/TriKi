const ModoJuego = {
    UNO_CONTRA_UNO: '1 vs 1',
    UNO_CONTRA_PC: '1 vs PC',
    ONLINE: 'Online'
};

class Juego {

    constructor(id, modo, jugadores, tablero, resultado) {
        this.id = id;
        this.modo = modo;
        this.jugadores = jugadores;
        this.tablero = tablero;
        this.resultado = resultado;
    }

    static CrearJuego(juego) {
        const lista = JSON.parse(localStorage.getItem('lista-juegos')) || [];
        lista.push(juego);
        localStorage.setItem('lista-juegos', JSON.stringify(lista));
    }

    static MostrarHistorial() {
        const lista = JSON.parse(localStorage.getItem('lista-juegos')) || [];
        const historialDiv = document.getElementById('historial_juegos');
        historialDiv.innerHTML = ''; // Limpiar el historial existente

        if (lista.length === 0) {
            historialDiv.innerHTML = '<p>No hay juegos en el historial.</p>';
            return;
        }

        lista.forEach((juego, index) => {
            const jugadores = JSON.parse(juego.jugadores);
            const jugador1 = jugadores.jugador1.nombre;
            const jugador2 = jugadores.jugador2.nombre;
            const modo = juego.modo;
            const resultado = juego.resultado;
            const tablero = juego.tablero.join(' | ');

            const juegoDiv = document.createElement('div');
            juegoDiv.classList.add('card', 'mb-2', 'col-4' ,'border', 'border-4');
            juegoDiv.innerHTML = `
                <div class="card-body">
                    <h6 class="card-title text-dark">Juego ${index + 1}</h6>
                    <p class="card-text text-dark">
                        <strong>Modo:</strong> ${modo} <br/>
                        <strong>Jugador 1:</strong> ${jugador1} <br/>
                        <strong>Jugador 2:</strong> ${jugador2} <br/>
                        <strong>Resultado:</strong> ${resultado} <br/>
                        <strong>Tablero:</strong> ${tablero}
                    </p>
                </div>
            `;

            historialDiv.appendChild(juegoDiv);
        });
    }
    
}

export { Juego, ModoJuego };
