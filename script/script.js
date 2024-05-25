import Jugador from '../script/jugador.js'
import { Utilidades, Configuracion } from '../script/util.js'
import { Juego, ModoJuego } from './Juego.js';

document.addEventListener('DOMContentLoaded', (event) => {

    const div_juego = document.getElementById('div_juego');
    const modo_juego = document.getElementById('modo_juego');
    const turno = document.getElementById('turno');
    const seccion_juego = document.getElementById('seccion_juego');
    const seccion_configuracion_usuario = document.getElementById('seccion_configuracion_usuario');
    const btncrear_juego = document.getElementById('crear_juego');
    const input_nombrejugador1 = document.getElementById('nombrejugador1');
    const input_nombrejugador2 = document.getElementById('nombrejugador2');
    const jugador1 = document.getElementById('jugador1');
    const jugador2 = document.getElementById('jugador2');
    const turnoJugador = document.getElementById('turnoJugador');
    const boton_caja_juego = document.querySelectorAll('.caja_juego');
    const botonset_modo_juego = document.querySelectorAll('.set_modo_juego');


    const CombinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // inicializar todo: 
    IniciarConfiguracion(Configuracion.LOAD);

    botonset_modo_juego.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            let modo = evento.target.getAttribute('data-mode');
            if (modo == '1')
                modo_juego.value = ModoJuego.UNO_CONTRA_UNO;
            if (modo == 'pc')
                modo_juego.value = ModoJuego.UNO_CONTRA_PC;
            if (modo == 'online')
                modo_juego.value = ModoJuego.ONLINE;

            IniciarConfiguracion(Configuracion.SELECCION_MODO);
        });
    });

    boton_caja_juego.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            if (evento.currentTarget.children[0].innerHTML == '&nbsp;') {
                evento.currentTarget.children[0].innerHTML = turnoJugador.value;
                AnalizarJuego();
            } else {
                console.log('ya esta marcada la casillas');
            }

        });
    });


    btncrear_juego.addEventListener('click', (evento) => {
        IniciarConfiguracion(Configuracion.EMPEZAR_JUEGO);
    });

    function IniciarConfiguracion(opc) {

        if (opc == Configuracion.LOAD) {
            seccion_modo_juego.style.display = 'block';
            seccion_juego.style.display = 'none';
            seccion_configuracion_usuario.style.display = 'none';
            return;
        }

        if (opc == Configuracion.SELECCION_MODO) {
            if (modo_juego.value != '') {
                seccion_modo_juego.style.display = 'none';
                seccion_configuracion_usuario.style.display = 'block';
                seccion_juego.style.display = 'none';

                if (modo_juego.value == ModoJuego.UNO_CONTRA_PC) {
                    input_nombrejugador2.enabled = false;
                    input_nombrejugador2.value = 'PC - COMPUTADORA';
                    jugador2.value = input_nombrejugador2.value;
                }

                return;
            }
        }

        if (opc == Configuracion.CONFUGURAR_USUARIO) {

            if (jugador1.value == '' && jugador2.value == '') {
                seccion_modo_juego.style.display = 'none';
                seccion_configuracion_usuario.style.display = 'block';
                seccion_juego.style.display = 'none';
                return;
            }
        }

        if (opc == Configuracion.EMPEZAR_JUEGO) {

            jugador2.value = input_nombrejugador2.value;
            jugador1.value = input_nombrejugador1.value;

            if (jugador1.value == '' || jugador2.value == '') {
                seccion_modo_juego.style.display = 'none';
                seccion_configuracion_usuario.style.display = 'block';
                seccion_juego.style.display = 'none';
                input_nombrejugador1.classList.toggle('border-3', jugador1.value === '');
                input_nombrejugador2.classList.toggle('border-3', jugador2.value === '');
                input_nombrejugador1.classList.toggle('border-danger', jugador1.value === '');
                input_nombrejugador2.classList.toggle('border-danger', jugador2.value === '');
                return;
            }

            seccion_modo_juego.style.display = 'none';
            seccion_configuracion_usuario.style.display = 'none';
            seccion_juego.style.display = 'block';

            AnalizarJuego();

            return;
        }
    }

    function AnalizarJuego() {

        debugger;

        // establecer el turno
        let cuantos_vacios = 0;
        Array.from(div_juego.children).forEach((child, index) => {
            if (child.childNodes[1].innerHTML == '&nbsp;') {
                cuantos_vacios++;
            }
        });

        let resultado = cuantos_vacios % 2;

        if (resultado === 1) {
            turno.innerHTML = `Turno del jugador: [${jugador1.value}]`;
            turnoJugador.value ='O';
        } else {
            turno.innerHTML = `Turno del jugador: [${jugador2.value}]`;
            turnoJugador.value ='X';
        }
    }
});



/*
const juego = Juego(id, ModoJuego.UNO_CONTRA_PC, jugadores)
Juego.CrearJuego(juego);
*/

// mostrar todos los usuarios

/*Jugador.MostrarListadoJugadores();

let id = 1,
    Ip = await Utilidades.ObtenerIP(),
    nombre = 'pedrogv',
    historial = [];

const usuario = new Jugador(id, Ip, nombre, historial);
Jugador.CrearJugador(usuario);
*/